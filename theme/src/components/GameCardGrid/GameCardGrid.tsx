import React from 'react'
import memoize from 'memoize-one'
import { withStyles } from '@material-ui/core'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeGrid as Grid } from 'react-window'

import { styles, StyleProps } from './GameCardGrid.style'
import GameCard from 'components/GameCard/GameCard'
import { dimensions } from 'components/GameCard/GameCard.style'

type GameCardGridProps = {
  portrait?: boolean,
  landscape?: boolean,
  square?: boolean,
  header?: React.ReactNode
  children: React.ReactComponentElement<typeof GameCard>[]
}

const PADDING = 24

const getDimensions = (portrait, landscape, square) => {
  let dimensionObject
  if (portrait) {
    dimensionObject = dimensions.portrait
  } else if (landscape) {
    dimensionObject = dimensions.landscape
  } else if (square) {
    dimensionObject = dimensions.square
  } else {
    dimensionObject = dimensions.portrait
  }

  return {
    BOX_HEIGHT: dimensionObject.height + dimensions.contentHeight + PADDING,
    BOX_WIDTH: dimensionObject.width + PADDING
  }
}

type ItemDataType = {
  children: React.ReactComponentElement<typeof GameCard>[],
  columnCount: number,
}

const Cell = ({ data, columnIndex, rowIndex, style }) => {
  const { children, columnCount } = data
  const content = children[rowIndex * columnCount + columnIndex]
  return (
    <div
        style={{
          ...style,
          height: 35,
          whiteSpace: 'nowrap',
          padding: 10
        }}
      >
        {content}
      </div>
  )
}


const createItemData = memoize(({ children, columnCount }: ItemDataType) => ({
  children,
  columnCount,
}));

const GameCardGrid: React.FunctionComponent<GameCardGridProps & StyleProps> =
  ({ portrait, landscape, square, children, classes }) => {
    const { BOX_WIDTH, BOX_HEIGHT } = getDimensions(portrait, landscape, square)
    return (
      <div className={classes.container}>
        <div className={classes.autoSizerContainer}>
          <AutoSizer>
          {({ height, width }) => {
              const columnCount = Math.floor(width / BOX_WIDTH)
              const rowCount = Math.ceil(children.length / columnCount)
              const itemData = createItemData({ children, columnCount });
              const columnWidth = Math.floor((width - (2 * PADDING)) / columnCount);

              return (<Grid
                className={classes.gridContainer}
                height={height}
                width={width}
                columnWidth={columnWidth}
                columnCount={columnCount}
                itemData={itemData}
                rowCount={rowCount}
                overscanRowsCount={5}
                rowHeight={BOX_HEIGHT}>
                {Cell}
              </Grid>
              )
            }}
          </AutoSizer>
        </div>
      </div>
    )
  }

export default withStyles(styles)(GameCardGrid)

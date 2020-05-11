import React from 'react'
import memoize from 'memoize-one'

import useStyles from './GamePlateGrid.style'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeGrid as Grid } from 'react-window'
import GamePlate from 'components/GamePlate/GamePlate'


type GamePlateGridProps = {
  size: number,
  children: React.ReactComponentElement<typeof GamePlate>[]
}

type ItemDataType = {
  children: React.ReactComponentElement<typeof GamePlate>[],
  columnCount: number,
}

const PADDING = 12

const Cell = ({ data, columnIndex, rowIndex, style }: {data: ItemDataType, columnIndex: number, rowIndex: number, style: React.CSSProperties}) => {
  const { children, columnCount } = data
  const content = children[rowIndex * columnCount + columnIndex]
  return (
    <div style={{ display: 'flex', justifyContent: 'center', ...style }}>
      {content}
    </div>
  )
}

const createItemData = memoize(({ children, columnCount }: ItemDataType) => ({
  children,
  columnCount,
}))

const GamePlateGrid: React.FunctionComponent<GamePlateGridProps> =
  ({ size, children }) => {
    const classes = useStyles()
    return (
      <div className={classes.container}>
        <div className={classes.autoSizerContainer}>
          <AutoSizer>
            {({ height, width }) => {
              const columnCount = Math.floor(width / (size + 2 * PADDING))
              const rowCount = Math.ceil(children.length / columnCount)
              const itemData = createItemData({ children, columnCount });
              const CENTERED_BOX_SIZE = (size + 2 * PADDING)

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
                rowHeight={CENTERED_BOX_SIZE}>
                {Cell}
              </Grid>
              )
            }}
          </AutoSizer>
        </div>
      </div>
    )
  }

export default GamePlateGrid
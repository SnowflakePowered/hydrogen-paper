import React, { memo } from 'react'
import memoize from 'memoize-one'

import { styles, StyleProps } from './GamePlateGrid.style'
// import { CellMeasurerCache, CellMeasurer, AutoSizer, Grid, ColumnSizer } from 'react-virtualized'
import { withStyles } from '@material-ui/core'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeGrid as Grid, areEqual } from 'react-window'
import GamePlate from 'components/GamePlate/GamePlate'


type GamePlateGridProps = {
  size: number,
  header?: React.ReactNode,
  children: React.ReactComponentElement<typeof GamePlate>[]
}

type GameCardGridState = {
  scrollElement?: HTMLElement | null,
}

type ItemDataType = {
  children: React.ReactComponentElement<typeof GamePlate>[],
  columnCount: number,
}

type ReactWindowGridProps = {
  columnIndex: number,
  rowIndex: number,
  style: React.CSSProperties
}

const PADDING = 12

const Cell = ({ data, columnIndex, rowIndex, style }) => {
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
}));

const GamePlateGrid: React.FunctionComponent<GamePlateGridProps & StyleProps> =
  ({ size, children, classes }) => {
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
                // hack to improve performance.
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

export default withStyles(styles)(GamePlateGrid)

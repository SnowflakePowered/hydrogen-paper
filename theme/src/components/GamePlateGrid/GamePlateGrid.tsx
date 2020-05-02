import React, { useState } from 'react'
import { styles, StyleProps } from './GamePlateGrid.style'
import { CellMeasurerCache, CellMeasurer, AutoSizer, Grid, ColumnSizer } from 'react-virtualized'
import { withStyles } from '@material-ui/core'

type GamePlateGridProps = {
  size: number,
  header?: React.ReactNode
}

type GameCardGridState = {
  scrollElement?: HTMLElement | null,
  heightCache: CellMeasurerCache
}

const padding = 12

const cellRenderer = ({ className, children, numberOfRows, numberOfColumns, cache }: {
    className: string,
    children: React.ReactNodeArray
    numberOfRows: number,
    numberOfColumns: number,
    cache: CellMeasurerCache
  }) => 
    ({ columnIndex, key, parent, rowIndex, style }) => {
    const content = children[rowIndex * numberOfColumns + columnIndex]
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
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
      </CellMeasurer>
    )
  }

const GamePlateGrid : React.FunctionComponent<GamePlateGridProps & StyleProps> =
    ({ size, children, classes }) => {
      const [ heightCache, ] = useState(new CellMeasurerCache({
        defaultWidth: 100,
        fixedHeight: false,
        minWidth: 100,
        defaultHeight: size,
        minHeight: size,
        fixedWidth: true
      }))

      const _children = React.Children.toArray(children)
      return (
        <div className={classes.container}>
          <div className={classes.autoSizerContainer}>
            <AutoSizer>
            {({ height, width }) => {
                const numberOfColumns = Math.floor(width / (size + 2 * padding))
                const numberOfRows = Math.ceil(_children.length / numberOfColumns)
                const cellRender = cellRenderer({
                                          className: classes.cellWrapper,
                                          children: _children,
                                          numberOfRows,
                                          numberOfColumns,
                                          cache: heightCache
                                        })
                const CENTERED_BOX_WIDTH = size + (size / numberOfColumns / 2) - padding
                return (
                  <ColumnSizer
                    columnMaxWidth={CENTERED_BOX_WIDTH}
                    columnMinWidth={size}
                    columnCount={numberOfColumns}
                    width={width}
                  >
                  {({ adjustedWidth, getColumnWidth, registerChild }) => (
                    <Grid
                      className={classes.gridContainer}
                      height={height}
                      width={width}
                      ref={registerChild}
                      // hack to improve performance.
                      columnWidth={getColumnWidth}
                      deferredMeasurementCache={heightCache}
                      cellRenderer={cellRender}
                      columnCount={numberOfColumns}
                      rowCount={numberOfRows}
                      rowHeight={heightCache.rowHeight}
                      overscanRowCount={3}
                    />)}
                  </ColumnSizer>
              )}}
          </AutoSizer>
        </div>
      </div>
      )
}

export default withStyles(styles)(GamePlateGrid)

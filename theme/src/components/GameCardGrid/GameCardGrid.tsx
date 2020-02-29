import React, { useState } from 'react'
import { dimensions } from 'components/GameCard/GameCard.style'
import { styles, StyleProps } from './GameCardGrid.style'
import { CellMeasurerCache, CellMeasurer, AutoSizer, Grid, ColumnSizer } from 'react-virtualized'
import { withStyles } from '@material-ui/core'

type GameCardGridProps = {
  portrait?: boolean,
  landscape?: boolean,
  square?: boolean,
  header?: React.ReactNode
}

type GameCardGridState = {
  scrollElement?: HTMLElement | null,
  heightCache: CellMeasurerCache
}

const padding = 24

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
    BOX_HEIGHT: dimensionObject.height + dimensions.contentHeight + padding,
    BOX_WIDTH: dimensionObject.width + padding }
}

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

const GameCardGrid : React.FunctionComponent<GameCardGridProps & StyleProps> =
    ({ portrait, landscape, square, children, classes }) => {
      const [ heightCache, ] = useState(new CellMeasurerCache({
        defaultWidth: 100,
        fixedHeight: false,
        minWidth: 100,
        defaultHeight: 250,
        minHeight: 100,
        fixedWidth: true
      }))

      const { BOX_WIDTH } = getDimensions(portrait, landscape, square)
      const _children = React.Children.toArray(children)
      return (
        <div className={classes.container}>
          <div className={classes.autoSizerContainer}>
            <AutoSizer>
            {({ height, width }) => {
                const numberOfColumns = Math.floor(width / BOX_WIDTH)
                const numberOfRows = Math.ceil(_children.length / numberOfColumns)
                const cellRender = cellRenderer({
                                          className: classes.cellWrapper,
                                          children: _children,
                                          numberOfRows,
                                          numberOfColumns,
                                          cache: heightCache
                                        })
                const CENTERED_BOX_WIDTH = BOX_WIDTH + (BOX_WIDTH / numberOfColumns / 2) - padding
                return (
                  <ColumnSizer
                    columnMaxWidth={CENTERED_BOX_WIDTH}
                    columnMinWidth={BOX_WIDTH}
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

export default withStyles(styles)(GameCardGrid)

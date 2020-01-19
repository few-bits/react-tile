import React from 'react';

import {
    StyledTile,
    StyledColumn,
    StyledItem,
} from './Tile.styled';
import { TileInterface } from './Tile.d';
import useWindowSize from '../../hooks/useWindowSize';

const Tile: React.FC<TileInterface> = ({
    children,
    gap= 20,
    columnSize = 300,
    maxColumns = 5,
    ...restProps
}) => {
    const refTile = React.useRef<HTMLDivElement>(null);
    const [columns, setColumns] = React.useState(1);

    const getColumnCount = React.useCallback(() => {
        if (refTile !== null && refTile.current !== null) {
            const { clientWidth: tileWidth } = refTile.current;
            const item = columnSize + gap;
            let count = 1;
            let width = columnSize;
            while (width < tileWidth) {
                count++;
                width += item;
                if (width > tileWidth) {
                    count--;
                }
            }
            setColumns(Math.min(count, maxColumns));
        }
    }, [refTile, columnSize, maxColumns, gap]);

    React.useEffect(() => getColumnCount(), [refTile]);
    useWindowSize(getColumnCount, 500);

    const mapChildren = (): React.ReactNode[][] => {
        let result: React.ReactNode[][] = [];

        React.Children.map(children, (child, index) => {
            const nextIndex = index%columns;
            if(!result[nextIndex]) {
                result[nextIndex] = [];
            }
            result[nextIndex].push(child);

        });
        return result;
    };

    return (
        <StyledTile ref={refTile} {...restProps}>
            {
                mapChildren().map((col, index: number) => (
                    <StyledColumn
                        key={`tile_column_${index}`}
                        {...{gap, columnSize}}
                    >
                        {
                            col.map((item: any, index: number) => (
                                <StyledItem
                                    key={`tile_item_${index}`}
                                    {...{gap}}
                                >
                                    {item}
                                </StyledItem>
                            ))
                        }
                    </StyledColumn>
                ))
            }
        </StyledTile>
    );
};

export default Tile;

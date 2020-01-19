import styled from 'styled-components';
import { ColumnInterface, ItemInterface } from './Tile.d';

export const StyledTile = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const StyledItem = styled.div<ItemInterface>`
  margin-bottom: ${({ gap }) => `${gap}px`};
`;

export const StyledColumn = styled.div<ColumnInterface>`
  display: flex;
  flex-direction: column;
  margin-right: ${({ gap }) => `${gap}px`};
  flex-grow: 2;
  max-width: ${({ columnSize }) => `${columnSize}px`};
  align-items: center;

  ${StyledItem} {
    &:last-child {
      margin-bottom: 0;
    }      
  }

  &:last-child {
    margin-right: 0;
  }
`;

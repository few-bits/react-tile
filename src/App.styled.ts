import styled from 'styled-components';

import Tile from './Components/Tile';

export const StyledTile = styled(Tile)``;

export const StyledApp = styled.div`
  h1 {
    text-align: center;
  }
  
  ${StyledTile} {
    img {
      border-radius: 5px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
  }
`;

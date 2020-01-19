import React from 'react';

import { StyledApp, StyledTile } from './App.styled';
import { shuffleArray } from './helpers';

const columnSize = 250;

const imgIds = [1001, 983, 104, 893, 46, 65, 569, 315, 406, 391, 98, 641, 999, 803, 404, 302];
let images: string[] = [];
for (let i = 0; i < imgIds.length; i++) {
    const height = 200 + Math.floor(Math.random() * 10) * 20;
    images.push(`https://unsplash.it/${columnSize}/${height}?image=${imgIds[i]}`);
}

const App: React.FC = () => {
    return (
        <StyledApp>
            <h1>Masonry Grid example</h1>
            <StyledTile columnSize={columnSize}>
                {
                    shuffleArray(images).map((img, index) => (
                        <img
                            key={`img_${index}`}
                            src={img}
                            alt="https://unsplash.com/"
                        />
                    ))
                }

            </StyledTile>
        </StyledApp>
    );
};

export default App;

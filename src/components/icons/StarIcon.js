import React from 'react';
import { css } from 'emotion';

const style = css`
  .cls-1 {
    fill: #00ac5b;
  }
`;

const StarIcon = () => (
  <svg width="15" height="15" className={style} viewBox="0 0 42.16 40.1">
    <defs />
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g id="_02-Home" data-name="02-Home">
          <polygon
            className="cls-1"
            points="29.14 24.78 42.16 15.32 26.06 15.32 21.08 0 16.11 15.32 0 15.32 13.03 24.78 8.05 40.1 21.08 30.63 34.11 40.1 29.14 24.78"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default StarIcon;

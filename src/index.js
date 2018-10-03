import React from 'react';
import ReactDOM from 'react-dom';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

import Home from './Home';

import registerServiceWorker from './registerServiceWorker';

import eot from './fonts/fontello.eot';
import svg from './fonts/fontello.svg';
import ttf from './fonts/fontello.ttf';
import woff from './fonts/fontello.woff';

injectGlobal`
  ${styledNormalize}

  @font-face {
    font-family: 'fontello';
    src: url('${eot}?80642114');
    src: url('${eot}?80642114#iefix') format('embedded-opentype'),
          url('${woff}?80642114') format('woff'),
          url('${ttf}?80642114') format('truetype'),
          url('${svg}?80642114#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
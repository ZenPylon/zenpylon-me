import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  outputTargets: [{ type: 'www' }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/variables.scss']
    })
  ]
};

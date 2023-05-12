import * as colors from '@theme/colors';
import { normalize } from '@theme/normalize';
import { reset } from '@theme/reset';
import { weight } from '@theme/fonts';

export const globalStyles = `
  ${normalize};
  ${reset};

  html {
    background-color: ${colors.cloud};
  }
`;

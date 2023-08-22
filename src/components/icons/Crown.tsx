import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import {CrownImage} from '../../assets';

const CrownLogo = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} component={CrownImage} inheritViewBox />
);

export default CrownLogo;
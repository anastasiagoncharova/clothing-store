import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import {ShoppingImage} from '../../assets';

const ShoppingIcon = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} component={ShoppingImage} inheritViewBox />
);

export default ShoppingIcon;
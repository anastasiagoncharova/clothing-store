import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

import {UserImage} from '../../assets';

const UserIcon = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} component={UserImage} inheritViewBox />
);

export default UserIcon;
import React, { FC } from 'react';
import StyledIcon from './styled';
import IconProps from './types';

const Icon: FC<IconProps> = ({ icon, color, size, ...rest }) => {
  console.log(color);
  return (
    <StyledIcon icon={icon} color={color || '#485363'} size={size || '1x'} {...rest} />
  );
};

export default Icon;

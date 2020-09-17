import React, { FC } from 'react';
import { StyledText } from './styled';
import { TextProps } from './types';

const Text: FC<TextProps> = ({ children, ...rest }) => {
  return (
    <StyledText {...rest}>{children}</StyledText>
  );
};

export default Text;

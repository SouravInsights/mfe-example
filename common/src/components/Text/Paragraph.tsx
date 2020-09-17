import React, { FC } from 'react';
import { StyledParagraph } from './styled';
import { TextProps } from './types';

const Paragraph: FC<TextProps> = ({ children, ...rest }) => {
  return (
    <StyledParagraph {...rest}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;

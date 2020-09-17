import React, { FC, createElement } from 'react';
import { StyledHeadline } from './styled';
import { HeadlineProps } from './types';

export const Title: FC<HeadlineProps> = ({ level, children, ...rest }) => (
  createElement(`h${level}`, { ...rest }, children)
);

const Headline: FC<HeadlineProps> = ({ level, children, ...rest }) => {
  return (
    <StyledHeadline level={level} {...rest}>
      {children}
    </StyledHeadline>
  );
};

export default Headline;

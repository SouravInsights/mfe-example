import React, { FC, InputHTMLAttributes } from 'react';
import { StyledInput } from './styled';

class T {
}

const Input: FC<InputHTMLAttributes<T>> = (props) => {
  return (
    <StyledInput {...props} />
  );
};

export default Input;

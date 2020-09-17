import React, { FC } from 'react';
import { Choose, If } from 'react-extras';
import StyledButton from './styled';
import { Text } from '../Text';
import Icon from '../Icon';
import { ButtonProps } from './types';

const { When, Otherwise } = Choose;

const Button: FC<ButtonProps> = ({
  children,
  icon,
  iconType,
  iconColor,
  iconPosition,
  iconOnly,
  iconSize,
  color,
  ...rest
}) => {
  if (icon) {
    return (
      <StyledButton iconOnly={iconOnly} {...rest}>
        <Choose>
          <When condition={iconPosition === 'right'}>
            <If condition={!iconOnly}>
              <Text color={color}>{children}</Text>
            </If>
            <Icon icon={iconType} color={iconColor} size={iconSize} />
          </When>
          <Otherwise>
            <Icon icon={iconType} color={iconColor} size={iconSize} />
            <If condition={!iconOnly}>
              <Text color={color}>{children}</Text>
            </If>
          </Otherwise>
        </Choose>
      </StyledButton>
    );
  }

  return (
    <StyledButton {...rest}>
      <Text color={color}>{children}</Text>
    </StyledButton>
  );
};

export default Button;

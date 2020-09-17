import styled from '@emotion/styled';
import { StyledText } from '../Text/styled';
import StyledIcon from '../Icon/styled';
import { styleBasedOnButtonSize, styleBasedOnButtonType } from '../../theme';
import { ButtonCustomProps, ButtonIconProps } from './types';

// @ts-ignore
const StyledButton = styled.button`
  width: ${({ iconOnly }: ButtonIconProps) => (iconOnly ? 'auto' : '100%')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ iconOnly }: ButtonIconProps) => (iconOnly ? 0 : '4px')};
  border: none;
  outline: none;
  padding: 0;
  transition: 0.3s all;
  cursor: pointer;
  font-size: 1em;
  opacity: ${({ disabled }: ButtonCustomProps) => (disabled ? 0.3 : 1)};
  background-color: ${({ buttonType, iconOnly }: ButtonCustomProps) => {
    if (iconOnly) return 'transparent';
    return styleBasedOnButtonType(buttonType, 'background');
  }};
  height: ${({ buttonSize }: ButtonCustomProps) => styleBasedOnButtonSize(buttonSize, 'height')};

  ${StyledIcon} {
    margin: ${({ iconPosition, iconOnly }: ButtonIconProps) => {
    if (iconOnly) return 0;
    return iconPosition === 'left' ? '0 0 0 0.5rem' : '0 0.5rem 0 0';
  }};
    color: ${({ buttonType }: ButtonCustomProps) => styleBasedOnButtonType(buttonType, 'text')};
  }

  ${StyledText} {
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: ${({ buttonSize }: ButtonCustomProps) => styleBasedOnButtonSize(buttonSize, 'fontSize')};
    line-height: ${({ buttonSize }: ButtonCustomProps) => styleBasedOnButtonSize(buttonSize, 'lineHeight')};
    color: ${({ buttonType }: ButtonCustomProps) => styleBasedOnButtonType(buttonType, 'text')};
  }

  &:hover {
    background-color: ${({ buttonType, disabled, iconOnly }: ButtonCustomProps) => {
    if (disabled) return '';
    if (iconOnly) return 'transparent';
    return styleBasedOnButtonType(buttonType, 'backgroundHover');
  }};
  }

  ${StyledText} {
    color: ${({ buttonType }: ButtonCustomProps) => styleBasedOnButtonType(buttonType, 'textHover')};
  }
`;

export default StyledButton;

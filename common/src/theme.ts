import { ButtonTypeTypes, ButtonSizeTypes, ButtonTypeAttributesType, ButtonSizeAttributesType } from './components/Button/types';

export const theme = {};

export const color = {
  primary: {
    parent: '#5384EE',
    child: '#3F73E3',
    text: '#FFFFFF',
  },
  secondary: {
    parent: 'rgba(83, 132, 238, 0.1)',
    child: 'rgba(83, 132, 238, 0.2)',
    text: '#5384EE',
  },
};

export const button = {
  size: {
    small: {
      height: '1.5rem',
      fontSize: '1rem',
      lineHeight: '1rem',
    },
    medium: {
      height: '2rem',
      fontSize: '1rem',
      lineHeight: '1.2rem',
    },
    large: {
      height: '2.5rem',
      fontSize: '1rem',
      lineHeight: '1.2rem',
    },
  },
  type: {
    primary: {
      text: color.primary.text,
      textHover: color.primary.text,
      background: color.primary.parent,
      backgroundHover: color.primary.child,
    },
    secondary: {
      text: color.secondary.text,
      textHover: color.secondary.text,
      background: color.secondary.parent,
      backgroundHover: color.secondary.child,
    },
    ghost: {
      text: '#586880',
      textHover: '#586880',
      background: 'transparent',
      backgroundHover: 'transparent',
    },
    text: {
      text: '#586880',
      textHover: '#586880',
      background: 'transparent',
      backgroundHover: 'transparent',
    },
    feature: {
      text: '#485363',
      textHover: '#485363',
      background: '#fff',
      backgroundHover: '#F1F4F9',
    },
  },
};

export function styleBasedOnButtonType(buttonType: ButtonTypeTypes, attribute: ButtonTypeAttributesType): string {
  if (!buttonType) {
    return button.type.primary[attribute];
  }
  return button.type[buttonType][attribute];
}

export function styleBasedOnButtonSize(buttonSize: ButtonSizeTypes, attribute: ButtonSizeAttributesType): string {
  if (!buttonSize) {
    return button.size.medium[attribute];
  }
  return button.size[buttonSize][attribute];
}

import { ButtonHTMLAttributes } from 'react';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export type Lit = string | number | boolean | undefined | null | void | {};

export const tuple = <T extends Lit[]>(...args: T) => args;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const tupleNum = <T extends number[]>(...args: T) => args;
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer E)[] ? E : never;
export type LiteralUnion<T extends U, U> = T | (U & {});

export const ButtonTypes = tuple('text', 'primary', 'secondary', 'ghost', 'feature');
export type ButtonTypeTypes = typeof ButtonTypes[number];

export const ButtonSizes = tuple('small', 'medium', 'large');
export type ButtonSizeTypes = typeof ButtonSizes[number];

export const ButtonTypeAttributes = tuple('background', 'backgroundHover', 'text', 'textHover');
export type ButtonTypeAttributesType = typeof ButtonTypeAttributes[number];

export const ButtonSizeAttributes = tuple('fontSize', 'lineHeight', 'height');
export type ButtonSizeAttributesType = typeof ButtonSizeAttributes[number];

export interface ButtonIconProps {
  icon?: boolean;
  iconType?: IconProp;
  iconOnly?: boolean;
  iconColor?: string;
  iconSize?: SizeProp;
  iconPosition?: 'left' | 'right';
}

export interface ButtonCustomProps {
  buttonType?: ButtonTypeTypes;
  buttonSize?: ButtonSizeTypes;
  disabled?: boolean;
  iconOnly?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<any>, ButtonIconProps, ButtonCustomProps {}

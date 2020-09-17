/* eslint-disable */
import React, { FC, useState, useEffect, useRef } from 'react';
import { If, Choose } from 'react-extras';
import Icon from '../Icon';
import {
  StyledHighlightsInputWrapper,
  StyledLabel,
  StyledInputWrapper,
  StyledHighlightInput,
  StyledHelperText,
  StyledHighlightTextarea,
} from './styled';
import { HighlightsInputProps } from './types';

const { When, Otherwise } = Choose;

const HighlightsInput: FC<HighlightsInputProps> = ({
  error,
  icon,
  textarea,
  iconType,
  iconPosition,
  onChange,
  onBlur,
  helperText,
  label,
  touched,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const [typed, setTyped] = useState(false);

  const { value, name } = rest;

  const handleFocus = () => {
    setFocus(true);
  };

  useEffect(() => {}, []);

  console.log({ error, focus, name, touched });

  return (
    <div onClick={handleFocus}>
      <StyledHighlightsInputWrapper
        textarea={textarea}
        error={error}
        focus={focus}
        // ref={inputWrapperRef}
      >
        <StyledLabel typed={typed} touched={touched} error={error} focus={focus}>
          {label}
        </StyledLabel>
        <If condition={focus || !!error || typed}>
          <StyledInputWrapper
            textarea={textarea}
            typed={typed}
            error={error}
            focus={focus}
          >
            <Choose>
              <When condition={!!icon}>
                <Choose>
                  <When condition={iconPosition === 'left'}>
                    <Icon icon={iconType} />
                    <StyledHighlightInput
                      // ref={inputRef}
                      autoFocus={focus}
                      onBlur={onBlur}
                      onChange={onChange}
                      {...rest}
                    />
                  </When>
                  <Otherwise>
                    <StyledHighlightInput
                      // ref={inputRef}
                      autoFocus={focus}
                      onBlur={(event: any) => {
                        onBlur(event);
                        setFocus(false);
                        console.log('onBlur', value);
                      }}
                      onChange={onChange}
                      {...rest}
                    />
                    <Icon icon={iconType} />
                  </Otherwise>
                </Choose>
              </When>
              <Otherwise>
                <Choose>
                  <When condition={!!textarea}>
                      <StyledHighlightTextarea
                        rows={5}
                        // ref={textareaRef}
                        autoFocus={focus}
                        onBlur={onBlur}
                        onChange={onChange}
                        {...rest}
                      />
                  </When>
                  <Otherwise>
                    <StyledHighlightInput
                      // ref={inputRef}
                      autoFocus={focus}
                      onBlur={(event: any) => {
                        onBlur(event);
                        setFocus(false);
                        console.log('onBlur', value);
                      }}
                      onChange={onChange}
                      {...rest}
                    />
                  </Otherwise>
                </Choose>
              </Otherwise>
            </Choose>
          </StyledInputWrapper>
        </If>
      </StyledHighlightsInputWrapper>
      <Choose>
        <When condition={!!error && touched && !focus}>
          <StyledHelperText error={error}>{error}</StyledHelperText>
        </When>
        <When condition={!textarea}>
          <StyledHelperText>{helperText}</StyledHelperText>
        </When>
      </Choose>
    </div>
  );
};

export default HighlightsInput;

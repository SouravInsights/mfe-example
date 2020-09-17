import React, { FC, useState, useRef } from 'react';
import { If, Choose, For } from 'react-extras';
import { isEmpty } from 'lodash';
import { useClickAway } from 'react-use';
import { StyledHighlightsInput, StyledWrapper, InputWrapper, Label, Suggestions, ErrorText, Input, HelperText, Textarea } from './styled';
import { HighlightsInputProps } from './types';

const { When, Otherwise } = Choose;

const HighlightsInput: FC<HighlightsInputProps> = ({ textarea, helperText, label, field, form, ...rest }) => {
  const [clickedWrapper, setClickedWrapper] = useState(false);
  const [suggestions, setSuggestion] = useState([]);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  const writingStatus = (clickedWrapper || !!form.values[field.name]);

  const handleWrapperClick = () => {
    if (!clickedWrapper) {
      setClickedWrapper(true);
      form.setStatus({
        ...form.status,
        [field.name]: true,
      });
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useClickAway(wrapperRef, () => {
    setClickedWrapper(false);
  });

  const providedSuggestions: string[] = ['Frontend Developer', 'Backend Developer', 'Sales Executive', 'Devops Engineer', 'Solution Architech', 'Software Engineer', 'Software Developer', 'Intern'];

  const handleSuggestions = () => {
    const fieldValue = field.value;

    if (fieldValue.length < 3) {
      return setSuggestion([]);
    }

    const suggested = providedSuggestions.filter((providedSuggestion, index) => {
      const words = providedSuggestion.toLowerCase().split(' ');
      let result = '';
      words.filter((word) => {
        if (word.includes(fieldValue.toLowerCase())) {
          result = providedSuggestions[index];
          return true;
        }
        return false;
      });
      return result;
    });

    return setSuggestion(suggested);
  };

  const handleSuggestionSelect = (value: string) => {
    form.setFieldValue(field.name, value);
    setSuggestion([]);
  };

  const shouldValidate = (form.status && form.status[field.name]) || form.touched[field.name];

  return (
    <StyledHighlightsInput>
      <StyledWrapper ref={wrapperRef} onClick={handleWrapperClick} error={shouldValidate && form.errors[field.name]} textarea={textarea}>
        <InputWrapper textarea={!!textarea}>
          <Label writingStatus={writingStatus} error={shouldValidate && form.errors[field.name]} textarea={textarea}>
            {label}
            {helperText && '*'}
          </Label>
          <If condition={writingStatus}>
            <Choose>
              <When condition={!!textarea}>
                <Textarea {...field} ref={inputRef} autoFocus writingStatus={writingStatus} {...rest} rows={5} />
              </When>
              <Otherwise>
                <Input {...field} ref={inputRef} autoFocus writingStatus={writingStatus} {...rest} onKeyUp={handleSuggestions} />
              </Otherwise>
            </Choose>
          </If>
        </InputWrapper>
      </StyledWrapper>
      <If condition={!isEmpty(suggestions)}>
        <Suggestions>
          <ul>
            <For
              of={suggestions}
              render={(suggestion, index) => (
                <li key={`${suggestion}-${index}`}>
                  <button type="button" onClick={() => handleSuggestionSelect(suggestion)}>{suggestion}</button>
                </li>
              )}
            />
          </ul>
        </Suggestions>
      </If>
      <If condition={!!helperText}>
        <HelperText>
          <Choose>
            <When condition={(!!shouldValidate && !!form.errors[field.name])}>
              <ErrorText>{form.errors[field.name]}</ErrorText>
            </When>
            <Otherwise>
              {helperText}
            </Otherwise>
          </Choose>
        </HelperText>
      </If>
    </StyledHighlightsInput>
  );
};

export default HighlightsInput;

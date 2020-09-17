/* eslint-disable @typescript-eslint/no-unused-vars, jsx-a11y/control-has-associated-label */
import React, { FC, useState } from 'react';
import { If } from 'react-extras';
import { isEmpty } from 'lodash';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-light-svg-icons';
import Icon from '../Icon';
import { StyledHighlightsSelectList, StyledHighlightsSelectWrapper, StyledHighlightsSelectListItemWrapper, StyledHighlightsSelectListItem } from './styled';
import { HighlightsSelectProps } from './types';

const HighlightsSelect: FC<HighlightsSelectProps> = ({ defaultOption, name, options, error, value, setFieldValue, handleChange, ...rest }) => {
  const [optionsVisible, setOptionsVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <StyledHighlightsSelectWrapper error={error} {...rest} onClick={() => setOptionsVisibility(!optionsVisible)}>
      <StyledHighlightsSelectList>
        <StyledHighlightsSelectListItem>
          {selectedOption || value || defaultOption.text}
          <Icon icon={optionsVisible ? faChevronUp : faChevronDown} />
        </StyledHighlightsSelectListItem>
        <If condition={optionsVisible && !isEmpty(options)}>
          <StyledHighlightsSelectListItemWrapper>
            {options.map((option) => (
              <StyledHighlightsSelectListItem
                key={option.value}
                onClick={() => {
                  setSelectedOption(option.text);
                  setFieldValue(name, option.value);
                  handleChange(name);
                }}
              >
                {option.text}
              </StyledHighlightsSelectListItem>
            ))}
          </StyledHighlightsSelectListItemWrapper>
        </If>
      </StyledHighlightsSelectList>
    </StyledHighlightsSelectWrapper>
  );
};

export default HighlightsSelect;

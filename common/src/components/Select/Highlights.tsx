import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { isEmpty } from 'lodash';
import { faChevronUp, faChevronDown } from '@fortawesome/pro-solid-svg-icons';
import { If } from 'react-extras';
import Dropdown from './Dropdown';
import Icon from '../Icon';
import { HighlightsSelectProps, StyledDropdownProps } from './types';

const StyledHighlightsSelect = styled.div`
  margin-bottom: 1em;
  position: relative;
`;

const StyledHighlightsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.125em 0 0.75em;
  border: 1px solid #8493A8;
  border-radius: 4px;
  height: 54px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 5px;
`;

const Label = styled.label`
  font-size: ${({ selectedOption }: StyledDropdownProps) => (selectedOption ? '.75em' : '1em')};
  height: 1em;
  line-height: 1em;
  font-family: Roboto, sans-serif;
  color: #8493A8;
  transition: 0.3s all;
  position: absolute;
  top: ${({ selectedOption }: StyledDropdownProps) => (selectedOption ? '.5em' : 'calc(50% - .5em)')};
`;

const Input = styled.div`
  color: #072252;
  font-family: Roboto, sans-serif;
  font-size: 1em;
`;

const IconWrapper = styled.div``;

const HighlightsSelect: FC<HighlightsSelectProps> = ({ helperText, field, form, label, options, ...rest }) => {
  const [optionsVisible, setOptionsVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  console.log({ field, form, rest });

  const handleWrapperClick = () => {
    setOptionsVisibility(!optionsVisible);
  };

  const handleDropdownClick = (item: { value: string, text: string }) => {
    form.setFieldValue(field.name, item.value);
    setSelectedOption(item.text);
  };

  return (
    <StyledHighlightsSelect onClick={() => handleWrapperClick()}>
      <StyledHighlightsWrapper>
        <InputWrapper>
          <Label selectedOption={selectedOption}>
            {label}
            {helperText && '*'}
          </Label>
          <If condition={!!selectedOption}>
            <Input>{selectedOption}</Input>
          </If>
        </InputWrapper>
        <IconWrapper>
          <Icon icon={optionsVisible ? faChevronUp : faChevronDown} />
        </IconWrapper>
      </StyledHighlightsWrapper>
      <If condition={!isEmpty(options) && optionsVisible}>
        <Dropdown selectedOption={selectedOption} handleDropdownClick={handleDropdownClick} options={options} />
      </If>
    </StyledHighlightsSelect>
  );
};

export default HighlightsSelect;

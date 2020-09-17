import React, { FC } from 'react';
import { For } from 'react-extras';
import styled from '@emotion/styled';
import Button from '../Button';
import { StyledText } from '../Text/styled';
import StyledButton from '../Button/styled';
import { DropdownProps } from './types';

const StyledDropdownWrapper = styled.div`
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  position: absolute;
  width: 100%;
  background: #FFFFFF;
  z-index: 2;

  ul {
    margin: 0;
    padding: 5px;
    list-style: none;

    li {
      height: 3.25em;
      box-sizing: border-box;
      border-bottom: 0.5px solid rgba(132, 147, 168, 0.2);
      border-radius: 4px;

      &.selected-item {
        background: #5384EE !important;

        ${StyledText} {
          color: #FFFFFF !important;
        }
      }

      &:last-child {
        border: none;
      }

      &:hover {
        background: #F1F4F9;
        border: none;
      }
    }

    ${StyledButton} {
      justify-content: flex-start;
      height: 3.25em;
      padding: 0 7px;

      ${StyledText} {
        color: #485363;
        font-weight: 400;
      }
    }
  }
`;

const Dropdown: FC<DropdownProps> = ({ options, handleDropdownClick, selectedOption }) => {
  return (
    <StyledDropdownWrapper>
      <ul>
        <For
          of={options}
          render={(item, index) => (
            <li key={`${item.value}-${index}`} className={selectedOption === item.text ? 'selected-item' : ''}>
              <Button buttonType="ghost" onClick={() => handleDropdownClick(item)}>{item.text}</Button>
            </li>
          )}
        />
      </ul>
    </StyledDropdownWrapper>
  );
};

export default Dropdown;

import styled from '@emotion/styled';
import { StyledProps } from './types';

export const StyledSelect = styled.select``;

export const StyledHighlightsSelect = styled.select``;

export const StyledHighlightsSelectWrapper = styled.div`
  border: ${({ error }: StyledProps) => (error ? '1px solid #f00' : '1px solid #8493A8')};
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledHighlightsSelectListItemWrapper = styled.div`
  position: absolute;
  top: 3.5em;
  border: 1px solid #8493A8;
  width: 100%;
  z-index: 3;
`;

export const StyledHighlightsSelectList = styled.ul`
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledHighlightsSelectListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  height: 1.25em;
  line-height: 1.25em;
  font-size: 1em;
  color: #8493A8;
  font-family: Roboto, sans-serif;
  padding: 1.125em 0.75em;
  background: #FFFFFF;

  &:hover {
    background: #F1F4F9;
    color: #485363;
  }
`;

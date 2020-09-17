import styled from '@emotion/styled';
import { StyledText } from '../Text/styled';

export const StyledDatePicker = styled.div``;

export const StyledCalendarWrapper = styled.div``;

export const StyledCalendar = styled.div`
  font-family: Roboto, sans-serif;

  tr {
    text-align: center;
  }

  th {
    color: rgba(0, 0, 0, 0.8);
    padding: 0;
  }

  tbody {
    cursor: pointer;
  }

  td {
    padding: 0;

    ${StyledText} {
      color: #606060;
      font-weight: inherit;
    }
  }
`;

export const StyledCalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInputWrapper = styled.div``;

export const StyledInput = styled.div``;

export const StyledLabel = styled.div``;

import React, { FC, useState } from 'react';
import { DateTime } from 'luxon';
import { For } from 'react-extras';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-light-svg-icons';
import Icon from '../Icon';
import Button from '../Button';
import { StyledDatePicker, StyledInputWrapper, StyledInput, StyledLabel, StyledCalendarWrapper, StyledCalendar, StyledCalendarHeader } from './styled';

const DatePicker: FC = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const arrayFromNumber = (length: number) => Array.from({ length }, Number.call, (i: number) => i + 1);

  const { daysInMonth } = DateTime.local();
  const daysInMonthArray = arrayFromNumber(daysInMonth);

  const daysInWeek = 7;
  const weekDaysNames = [];

  for (let day = 0; day < daysInWeek; day += 1) {
    weekDaysNames.push(DateTime.local().startOf('week').plus({ day }).weekdayShort);
  }

  const selectDate = (day: number) => {
    setSelectedDate(DateTime.local().set({ day }).toLocaleString());
  };

  console.log({ daysInMonthArray, weekDaysNames });

  return (
    <StyledDatePicker>
      <StyledInputWrapper>
        <StyledLabel>
          Label
        </StyledLabel>
        <StyledInput>
          Input
        </StyledInput>
      </StyledInputWrapper>
      <StyledCalendarWrapper>
        <StyledCalendarHeader>
          <div>
            {selectedDate}
          </div>
          <div>
            <Icon icon={faChevronLeft} />
            <Icon icon={faChevronRight} />
          </div>
        </StyledCalendarHeader>
        <StyledCalendar>
          <table>
            <thead>
              <tr>
                <For
                  of={weekDaysNames}
                  render={(item) => <th key={item}>{item}</th>}
                />
              </tr>
            </thead>
            <tbody>
              <For
                of={arrayFromNumber(Math.ceil(daysInMonth / daysInWeek))}
                render={(rowCount) => {
                  return (
                    <tr key={Math.random()}>
                      <For
                        of={rowCount === 1 ? daysInMonthArray.slice(0, 7) : daysInMonthArray.slice(rowCount * 7, (rowCount + 1) * 7)}
                        render={(dayCount) => {
                          return (
                            <td key={Math.random()}>
                              <Button buttonType="ghost" onClick={() => selectDate(dayCount)}>{dayCount}</Button>
                            </td>
                          );
                        }}
                      />
                    </tr>
                  );
                }}
              />
            </tbody>
          </table>
        </StyledCalendar>
      </StyledCalendarWrapper>
    </StyledDatePicker>
  );
};

export default DatePicker;

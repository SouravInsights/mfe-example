import styled from '@emotion/styled';
import { StyledHighlightsProps } from './types';

export const StyledInput = styled.input`
  height: 40px;
  background: #F1F4F9;
  border: 1px solid rgba(132, 147, 168, 0.2);
  border-radius: 20px;
  outline: none;
  width: 100%;
  text-indent: 1.25em;
  color: #072252;
  font-family: Roboto, sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  letter-spacing: 0.02em;

  &::placeholder {
    color: #072252;
    opacity: 0.3;
  }
`;

export const StyledHighlightsInput = styled.div`
  margin-bottom: 1em;
  position: relative;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.125em 0 0.75em;
  border: ${({ error }: StyledHighlightsProps) => (error ? '1px solid #D32F2F' : '1px solid #8493A8')};
  border-radius: 4px;
  min-height: ${({ textarea }: StyledHighlightsProps) => (textarea ? '108px' : '54px')};
`;

export const InputWrapper = styled.div`
  max-width: ${({ textarea }: StyledHighlightsProps) => (textarea ? '100%' : '85%')};
  min-height: ${({ textarea }: StyledHighlightsProps) => (textarea ? '108px' : '54px')};
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ writingStatus }: StyledHighlightsProps) => (writingStatus ? '.75em' : '1em')};
  height: 1em;
  line-height: 1em;
  font-family: Roboto, sans-serif;
  color: ${({ error }: StyledHighlightsProps) => (error ? '#D32F2F' : '#8493A8')};
  position: absolute;
  transition: 0.3s all;
  top: ${({ writingStatus, textarea }: StyledHighlightsProps) => (writingStatus ? '.5em' : (textarea ? 'calc(30% - .5em)' : 'calc(50% - .5em)'))};
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 1em;
  line-height: 1em;
  color: #072252;
  padding: 0;
  width: 100%;
  margin-top: calc(1em + 0.5em);
  display: ${({ writingStatus }: StyledHighlightsProps) => (writingStatus ? 'block' : 'none')};
`;

export const Textarea = styled.textarea`
  outline: none;
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 1em;
  line-height: 1em;
  color: #072252;
  padding: 0;
  width: 100%;
  margin-top: calc(1em + 0.5em);
  resize: none;
  display: ${({ writingStatus }: StyledHighlightsProps) => (writingStatus ? 'block' : 'none')};
`;

export const HelperText = styled.div`
  font-size: 0.75em;
  line-height: 1em;
  margin-top: 4px;
  color: #8493A8;
  font-family: Roboto, sans-serif;
  padding-left: 0.75em;
`;

export const ErrorText = styled.div`
  color: #D32F2F;
`;

export const Suggestions = styled.div`
  position: absolute;
  background: #FFFFFF;
  width: 100%;
  border: 1px solid #8493A8;
  z-index: 9;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      font-family: Roboto, sans-serif;
      color: #485363;
      font-size: 1em;
      line-height: 1.4em;

      &:hover {
        background: #F1F4F9;
      }
    }
  }

  button {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 10px 12px;
    cursor: pointer;
    width: 100%;
    text-align: left;
  }
`;

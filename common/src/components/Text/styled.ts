import styled from '@emotion/styled';
import { Title } from './Headline';

const StyledHeadline = styled(Title)``;

const StyledParagraph = styled.p``;

const StyledText = styled.span`
  color: ${({ color }) => color} !important;
`;

export { StyledHeadline, StyledParagraph, StyledText };

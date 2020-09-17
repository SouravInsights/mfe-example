import React, { FC, lazy, Suspense } from "react";
import styled from "@emotion/styled";

const Text = styled.p`
  color: "red";
`;

const Demo: FC = () => {
  return <Text>Hello, World!</Text>;
};

export default Demo;

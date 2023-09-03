import React from "react";
import { __DATA__ } from "./Data";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar,
} from "./styles";

export default function App01() {
  return (
    <Container>
      <MainContainer>
        {__DATA__.map(({ distance, colors }, i) => {
          return (
            <BarChartContainer key={i}>
              <Number color={colors[1]}>{distance} km</Number>
              <MakeBar height={distance * 2} colors={colors} />
            </BarChartContainer>
          );
        })}
      </MainContainer>
      <BlackLine />
    </Container>
  );
}

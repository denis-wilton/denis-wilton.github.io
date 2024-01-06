import { ReactNode } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;
const Layer = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

export default function Corner(props: {
  children: ReactNode;
  topRight: ReactNode;
}) {
  return (
    <Wrapper id="corner-wrapper">
      <Layer>{props.children}</Layer>
      <Layer
        style={{
          alignSelf: "start",
          justifySelf: "end",
          transform: `translateY(-50%) translateX(50%)`,
        }}
      >
        {props.topRight}
      </Layer>
    </Wrapper>
  );
}

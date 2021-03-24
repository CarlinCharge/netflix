import React from "react";
import * as S from "./styles";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return <S.Inner direction={direction}>{children}</S.Inner>;
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
};

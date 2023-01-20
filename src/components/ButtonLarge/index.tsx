import * as S from "./style";
import React, { ButtonHTMLAttributes } from "react";
type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLargeProps = {
    value: string;
  } & ButtonType;
  

const ButtonLarge = () => {
  return (
    <S.ButtonLarge></S.ButtonLarge>
  );
}

export default ButtonLarge;
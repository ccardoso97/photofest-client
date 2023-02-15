import * as S from "./style";
import logo from "assets/images/logo.png";
import ButtonLarge from "components/ButtonLarge";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
  onSubmitData: (data: { userName: string; password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [userName, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { userName, password };
    onSubmitData(data);
  };
  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText></S.BoxLoginLogoText>
        <S.BoxLoginLogoImage src={logo} alt="Logo" />
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input
          type="text"
          placeholder="Nickname"
          value={userName}
          onChange={({ target }) => setNickname(target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="Entrar" type="button" onClick={handleSubmit} />
      </S.BoxLoginForm>
      {Boolean(errorMessage.length) && (
        <S.BoxLoginError>{errorMessage}</S.BoxLoginError>
      )}
    </S.BoxLogin>
  );
};

export default BoxLogin;

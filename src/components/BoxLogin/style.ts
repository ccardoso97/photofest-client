import styled, { css } from "styled-components";

export const BoxLogin = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.baseBg2};
    width: 330px;
    height: 414px;
    padding: 0px 0px 0px 0px;
    margin: -50px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 6px 3px ${theme.colors.shadowColor};
    color: ${theme.colors.textColor};
  `}
`;
export const BoxLoginLogo = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
export const BoxLoginLogoText = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.constants.logoFontFamily};
    font-size: 4em;
    line-height: 80px;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0px 0;
    padding: 0px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: calc(50% - 10px);

    }
  `}
`;
export const BoxLoginLogoImage = styled.img`
  ${() => css`
    width: 250px;
  `}
`;
export const BoxLoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    input {
      ${theme.mixins.input()};
      color: ${theme.colors.textColor};
    }
  `}
`;
export const BoxLoginError = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryColor};
    text-align: center;
    display: inline-block;
    margin-top: 25px;
  `}
`;



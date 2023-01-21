import * as S from "./style";

import ButtonToggle from "components/ButtonToggle";

const OrderDetails = () => {
  return (
    <S.OrderDetails>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle active={true} value="WhatsApp" />
        <ButtonToggle active={true} value="Instagram" />
      </S.OrderDetailsButtonGroup>
      _____________________________________
      <S.OrderDetailsTitle>Detalhes do equipamento</S.OrderDetailsTitle>
      <S.OrderDetailsList>
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
};

export default OrderDetails;

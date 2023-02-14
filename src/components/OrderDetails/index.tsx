import * as S from "./style";
import OrderItemList from "components/OrderItemList";
import OrderItem from "components/OrderItem";
import ButtonToggle from "components/ButtonToggle";
import ButtonLarge from "components/ButtonLarge";

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
        <OrderItemList
          header={
            <S.OrderDetailsListTitle>
              <h4>Item</h4>
              <h4>Qtd</h4>
              <h4>Preço</h4>
            </S.OrderDetailsListTitle>
          }
          list={<OrderItem />}
          footer={
            <S.OrderDetailsListFooter>
              <S.OrderDetailsListFooterRow>
                <span>Subtotal</span>
                <span>R$ 100.00</span>
              </S.OrderDetailsListFooterRow>
              <ButtonLarge value="Continue para o contato" />
            </S.OrderDetailsListFooter>
          }
        />
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
};

export default OrderDetails;

import ButtonLarge from "components/ButtonLarge";
import ButtonToggle from "components/ButtonToggle";
import OrderItem from "components/OrderItem";
import OrderItemList from "components/OrderItemList";
import { HTMLAttributes, useEffect, useState } from "react";
import { OrderItemType } from "types/OrderItemType";
import * as S from "./style";

type OrderDetailsType = HTMLAttributes<HTMLDivElement>;

type OrderDetailsProps = {
  orders: OrderItemType[];
  onRemoveItem: (id: string) => void;
} & OrderDetailsType;

const OrderDetails = ({ orders, onRemoveItem }: OrderDetailsProps) => {
  const price = orders
    .map((i) => i.product.price * i.quantity)
    .reduce((a, b) => a + b, 0);

  const [priceState, setPriceState] = useState(price);

  useEffect(() => {
    setPriceState(price);
  }, [orders, price]);
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
          list={
            Boolean(orders.length) ? (
              orders.map((item, index) => (
                <OrderItem
                  onRemoveItem={() => onRemoveItem(item.product.id)}
                  product={item.product}
                  quantity={item.quantity}
                  observation={item.observation}
                  key={`OrderDetails-${index}`}
                />
              ))
            ) : (
              <S.OrderDetailsListGap />
            )
          }
          footer={
            <S.OrderDetailsListFooter>
              <S.OrderDetailsListFooterRow>
                <span>Subtotal</span>
                <span>R$ {priceState.toFixed(2)}</span>
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

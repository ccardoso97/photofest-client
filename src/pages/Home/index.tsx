import Menu from "components/Menu";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import ProductItemList from "components/ProductItemList";
import ProductItem from "components/ProductItem";
import OrderDetails from "components/OrderDetails";
import Overlay from "components/Overlay";
import CheckoutSection from "components/CheckoutSection";
import { useNavigate } from "react-router-dom";
import { products } from "mocks/products";
import { ProductResponse } from "types/Product";
import { useState } from "react";
import { OrderItemType } from "types/OrderItemType";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "short",
  });
  const navigate = useNavigate();

  const [order, setOrders] = useState<OrderItemType[]>([]);

  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (product: ProductResponse) => {
    const existing = order.find((i) => i.product.id === product.id);
    const quantity = existing ? existing.quantity + 1 : 1;
    const item: OrderItemType = { product, quantity };

    const list = existing
      ? order.map((i) => (i.product.id === existing.product.id ? item : i))
      : [...order, item];
    setOrders(list);
  };

  const handleRemoveOrderItem = (id: string) => {
    const filtered = order.filter((i) => i.product.id != id);
    setOrders(filtered);
  };

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Photofest</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo nome" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Equipamentos</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <ProductItemList>
              {Boolean(products.length) &&
                products.map((product, index) => (
                  <ProductItem
                    product={product}
                    key={`ProductItem-${index}`}
                    onSelect={handleSelection}
                  />
                ))}
            </ProductItemList>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <OrderDetails orders={order} onRemoveItem={handleRemoveOrderItem} />
      </aside>
      {/* <Overlay>
                <CheckoutSection />
            </Overlay> */}
    </S.Home>
  );
};

export default Home;

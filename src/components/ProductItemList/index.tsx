import * as S from "./style";

interface ProductItemListProps {
    children: React.ReactNode;
  }
const ProductItemList = ({ children }: ProductItemListProps) => {
  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          Confira nossos equipamentos
        </S.ProductItemListHeaderTitle>
      </S.ProductItemListHeader>
      <S.ProductItemList>
        {children}
      </S.ProductItemList>
    </section>
  );
};

export default ProductItemList;

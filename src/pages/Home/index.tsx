import { ReactComponent as Search } from "assets/icons/search.svg";
import { DateTime } from "luxon";
import * as S from "./style";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>PhotoFest</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Pesquise pelo nome" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Produtos</b> <b>Contato</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>Lista de produtos aqui</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
      </aside>
    </S.Home>
  );
};

export default Home;

import {
  HeaderWrapper,
  Brand,
  SearchForm,
  UserActions,
  ActionLink,
  CartLink,
  CartCount,
} from "./Header.styles";

function Header() {
  return (
    <HeaderWrapper className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Brand className="navbar-brand" href="#">
          Lume-Store
        </Brand>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Área de pesquisa */}
          <SearchForm className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Digite o produto"
              aria-label="Pesquisar produtos"
            />

            <button className="btn" type="submit">
              Pesquisar
            </button>
          </SearchForm>

          {/* Links de ações do usuário */}
          <UserActions>
            <ActionLink href="/login">Entrar / Criar conta</ActionLink>
            {/* <ActionLink href="/account" aria-haspopup="true">Minha conta </ActionLink> */}
            <ActionLink href="/rastrear">
              <i className="bi bi-geo-alt"></i> <span>Rastrear pedido</span>
            </ActionLink>
            <CartLink href="/carrinho" aria-label="Ver carrinho com 0 itens">
              <i className="bi bi-cart3"></i> <CartCount>0</CartCount>
            </CartLink>
          </UserActions>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

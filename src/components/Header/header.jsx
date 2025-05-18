import {
  HeaderWrapper,
  Brand,
  NavLinkWrapper,
  SearchForm,
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
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ height: "100%" }}
        >
          <NavLinkWrapper className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Loja
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Novidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Promoções
              </a>
            </li>
          </NavLinkWrapper>
          <SearchForm className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Digite o produto"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Pesquisar
            </button>
          </SearchForm>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

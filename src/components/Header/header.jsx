import {
  HeaderWrapper,
  Brand,
  NavLinkWrapper,
  SearchForm,
} from "./Header.styles";

function Header() {
  return (
    <HeaderWrapper>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Brand class="navbar-brand" href="#">
            Lume-Store
          </Brand>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-between align-items-center"
            id="navbarSupportedContent"
            style={{ height: "100%" }}
          >
            <NavLinkWrapper class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Loja
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Novidades
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Promoções
                </a>
              </li>
            </NavLinkWrapper>
            <SearchForm class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Digite o produto"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Pesquisar
              </button>
            </SearchForm>
          </div>
        </div>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;

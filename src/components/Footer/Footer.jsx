import { BottomBar, FooterContainer, LinkList } from "./Footer.style";
import { CreditCard2Front, ShieldLock, Truck } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row text-center text-md-start py-4 border-bottom">
          <div className="col-md-4 mb-4 mb-md-0">
            <CreditCard2Front size={32} />
            <h5 className="mt-3">Escolha como pagar</h5>
            <p>Pague com Pix, cartão ou boleto. Em até 12x no cartão.</p>
            <a href="#">Saiba mais</a>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <Truck size={32} />
            <h5 className="mt-3">Entrega rápida e grátis</h5>
            <p>
              Receba seus produtos com frete grátis nas compras acima de R$150.
            </p>
            <a href="#">Veja as condições</a>
          </div>
          <div className="col-md-4">
            <ShieldLock size={32} />
            <h5 className="mt-3">Segurança garantida</h5>
            <p>Devolução fácil e proteção do início ao fim da compra.</p>
            <a href="#">Como protegemos você</a>
          </div>
        </div>

        <BottomBar className="text-center pt-4">
          <LinkList className="d-flex justify-content-center flex-wrap gap-3">
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
            <a href="#">Contato</a>
            <a href="#">Trabalhe conosco</a>
          </LinkList>
          <p className="mt-3">
            © 2025 Lume-Store. Todos os direitos reservados.
          </p>
        </BottomBar>
      </div>
    </FooterContainer>
  );
};

export default Footer;

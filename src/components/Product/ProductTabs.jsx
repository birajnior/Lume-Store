import { useState } from "react";
import { TabButton, TabButtons, TabsContainer } from "./ProductTabs.styles";
import { TabContent } from "react-bootstrap";
import ReviewList from "./ReviewList";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <TabsContainer>
      <TabButtons>
        <TabButton
          active={activeTab === "description"}
          onClick={() => setActiveTab("description")}
        >
          Descrição
        </TabButton>
        <TabButton
          active={activeTab === "reviews"}
          onClick={() => setActiveTab("reviews")}
        >
          Avaliações
        </TabButton>
        <TabButton
          active={activeTab === "faq"}
          onClick={() => setActiveTab("faq")}
        >
          Perguntas Frequentes
        </TabButton>
      </TabButtons>

      <TabContent>
        {activeTab === "description" && (
          <div>
            <p>A vela de lavanda é ideal para relaxamento e bem-estar.</p>
            <p>Composição: cera vegetal, essência de lavanda</p>
            <p>Duração: até 30h</p>
          </div>
        )}
        {activeTab === "reviews" && <ReviewList />}
        {activeTab === "faq" && (
          <div>
            <p>
              <strong>É vegana?</strong> Sim, feita com cera vegetal.
            </p>
            <p>
              <strong>Tem garantia?</strong> Garantia de 7 dias após o
              recebimento.
            </p>
            <p>
              <strong>Serve para aromaterapia?</strong> Sim! Ideal para
              ambientes calmos.
            </p>
          </div>
        )}
      </TabContent>
    </TabsContainer>
  );
};

export default ProductTabs;

import React from "react";
import {
  CollectionContainer,
  CollectionDataContainer,
  CollectionItem,
  CollectionTitle,
  CustomCollectionButton,
  CustomCollectionButtonContainer,
  CustomCollectionContainer,
  CustomCollectionDualItem,
} from "./style";

const CollectionById: React.FC = () => {
  return (
    <CollectionContainer>
      <div>
        <CollectionDataContainer>
          <CollectionTitle>Collection</CollectionTitle>
          <CollectionItem>Address: address-here</CollectionItem>
          <CollectionItem>Name: Name-here</CollectionItem>
          <CollectionItem>Size: 4 NFT's</CollectionItem>
          <CollectionItem>
            Description: Lorem Ipsum é simplesmente uma simulação de texto da
            indústria tipográfica e de impressos, e vem sendo utilizado desde o
            século XVI, quando um impressor desconhecido pegou uma bandeja de
            tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem
            Ipsum sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado. Se
            popularizou na década de 60, quando a Letraset lançou decalques
            contendo passagens de Lorem Ipsum, e mais recentemente quando passou
            a ser integrado a softwares de editoração eletrônica como Aldus
            PageMaker.
          </CollectionItem>
        </CollectionDataContainer>
        <CustomCollectionContainer>
          <CollectionItem>
            Click and choose NFTs to add them to your personalized collection.
          </CollectionItem>
          <CustomCollectionDualItem>
            <CollectionItem>Customized Collection Size : 0</CollectionItem>
            <CustomCollectionButtonContainer>
              <CustomCollectionButton>Finish</CustomCollectionButton>
            </CustomCollectionButtonContainer>
          </CustomCollectionDualItem>
        </CustomCollectionContainer>
      </div>
    </CollectionContainer>
  );
};

export default CollectionById;

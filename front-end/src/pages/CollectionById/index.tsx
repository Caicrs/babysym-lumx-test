import React from "react";
import {
  CardNFTData,
  CardNFTDataContainer,
  CardNFTImageContainer,
  CardNFTTitle,
  CollectionContainer,
  CollectionDataContainer,
  CollectionItem,
  CollectionTitle,
  CustomCollectionButton,
  CustomCollectionButtonContainer,
  CustomCollectionContainer,
  CustomCollectionDualItem,
  ListNFTContainer,
} from "./style";
import ProductCard from "../../components/general/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGeneral } from "../../contexts/GeneralContext";
import ModalBase from "../../components/modalBase";

const CollectionById: React.FC = () => {
  const { modalOpened, setIsModalOpened } = useGeneral();
  const data = [
    {
      id: 1,
      name: "NFT 1",
      description:
        "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI",
      image:
        "https://cdn.leonardo.ai/users/9b7e579a-648c-4061-ae4f-15b3104ab797/generations/24562372-515c-4f3b-b54d-eb8f7b13edd5/variations/Default_Jesus_walking_on_the_surface_of_water_in_a_storm_and_i_0_24562372-515c-4f3b-b54d-eb8f7b13edd5_1.jpg?w=512",
      price: 0.1,
      owner: "0x0000000",
    },
    {
      id: 2,
      name: "NFT 2",
      description:
        "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI",
      image: "https://picsum.photos/200/300",
      price: 0.1,
      owner: "0x0000001",
    },
    {
      id: 3,
      name: "NFT 3",
      description:
        "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI",
      image:
        "https://cdn.leonardo.ai/users/9b7e579a-648c-4061-ae4f-15b3104ab797/generations/24562372-515c-4f3b-b54d-eb8f7b13edd5/variations/Default_Jesus_walking_on_the_surface_of_water_in_a_storm_and_i_0_24562372-515c-4f3b-b54d-eb8f7b13edd5_1.jpg?w=512",
      price: 0.1,
      owner: "0x0000000",
    },
    {
      id: 4,
      name: "NFT 4",
      description:
        "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI",
      image: "https://picsum.photos/200/300",
      price: 0.1,
      owner: "0x0000001",
    },
  ];
  return (
    <>
      <CollectionContainer>
        <div>
          <CollectionDataContainer>
            <CollectionTitle>Collection</CollectionTitle>
            <CollectionItem>Address: address-here</CollectionItem>
            <CollectionItem>Name: Name-here</CollectionItem>
            <CollectionItem>Size: 4 NFT's</CollectionItem>
            <CollectionItem>
              Description: Lorem Ipsum é simplesmente uma simulação de texto da
              indústria tipográfica e de impressos, e vem sendo utilizado desde
              o século XVI, quando um impressor desconhecido pegou uma bandeja
              de tipos e os embaralhou para fazer um livro de modelos de tipos.
              Lorem Ipsum sobreviveu não só a cinco séculos, como também ao
              salto para a editoração eletrônica, permanecendo essencialmente
              inalterado. Se popularizou na década de 60, quando a Letraset
              lançou decalques contendo passagens de Lorem Ipsum, e mais
              recentemente quando passou a ser integrado a softwares de
              editoração eletrônica como Aldus PageMaker.
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
          <ListNFTContainer>
            <Container>
              <Row xs={1} md={2} lg={3} className="g-4">
                {data.map((item) => (
                  <Col key={item.id} xs={12} md={6}>
                    <ProductCard
                      imageSrc={item.image}
                      title={item.name}
                      price={item.price}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </ListNFTContainer>
          {/*
        <ListNFTContainer>
       
            <CardNFT key={item.id}>
             <CardNFTImage src={item.image} alt={item.name} /> 
              <CardNFTImageContainer>teste</CardNFTImageContainer>

              <CardNFTDataContainer>
                <CardNFTTitle>{item.name}</CardNFTTitle>
                <CardNFTData>{item.price}</CardNFTData>
              </CardNFTDataContainer>
            </CardNFT>
          
          {data.map((item) => (
            <ProductCard
              imageSrc={item.image}
              title={item.name}
              price={item.price}
            />
          ))}
        </ListNFTContainer>
          */}
        </div>
      </CollectionContainer>
    </>
  );
};

export default CollectionById;

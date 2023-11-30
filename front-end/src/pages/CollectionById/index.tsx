import React, { useEffect, useState } from "react";
import {
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
import { useParams } from "react-router-dom";
import { useApi } from "../../contexts/apiContext";
import { MetadataNFT, MoralisNFT } from "../../models/moralis";
import { CustomCollectionBody } from "../../models/apiModels";

const CollectionById: React.FC = () => {
  const { id } = useParams();
  const { getUserData, nftCollectionSearched, createCustomCollection } =
    useApi();
  const { loading } = useGeneral();

  const [selectedNFTs, setSelectedNFTs] = useState([]);

  const toggleCardSelection = (card: MoralisNFT) => {
    if (selectedNFTs.includes(card)) {
      setSelectedNFTs(selectedNFTs.filter((id) => id !== card));
      return;
    }
    setSelectedNFTs([...selectedNFTs, card]);
  };

  const isNFTSelected = (card: MoralisNFT) => {
    return selectedNFTs.includes(card);
  };

  useEffect(() => {
    if (id) {
      console.log("called 1");
      getUserData(id);
    }
  }, [id, loading]);

  return (
    <>
      <CollectionContainer>
        <div>
          <CollectionDataContainer>
            <CollectionTitle>Collection</CollectionTitle>
            <CollectionItem>Address: {id}</CollectionItem>
            <CollectionItem>
              Name: {nftCollectionSearched && nftCollectionSearched[0].name}
            </CollectionItem>
            <CollectionItem>
              Size: {nftCollectionSearched && nftCollectionSearched.length}{" "}
              NFT's
            </CollectionItem>
          </CollectionDataContainer>
          <CustomCollectionContainer>
            <CollectionItem>
              Click and choose NFTs to add them to your personalized collection.
            </CollectionItem>
            <CustomCollectionDualItem>
              <CollectionItem>
                Customized Collection Size : {selectedNFTs.length}
              </CollectionItem>
              <CustomCollectionButtonContainer>
                <CustomCollectionButton
                  onClick={() => {
                    const data: CustomCollectionBody = {
                      name: selectedNFTs[0].name,
                      customCollections: selectedNFTs,
                    };
                    createCustomCollection(data);
                  }}
                >
                  Finish
                </CustomCollectionButton>
              </CustomCollectionButtonContainer>
            </CustomCollectionDualItem>
          </CustomCollectionContainer>
          <ListNFTContainer>
            <Container>
              <Row xs={1} md={2} lg={3} className="g-4">
                {nftCollectionSearched &&
                  nftCollectionSearched.map((item: MoralisNFT) => {
                    // const metadata: MetadataNFT = JSON.parse(item.metadata);
                    return (
                      <Col key={item.token_id} xs={12} md={6}>
                        <ProductCard
                          imageSrc={item.metadata.image}
                          title={item.metadata.name}
                          price={item.metadata.points.amount}
                          toggleCardSelection={() => toggleCardSelection(item)}
                          isSelected={isNFTSelected(item)}
                        />
                      </Col>
                    );
                  })}
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

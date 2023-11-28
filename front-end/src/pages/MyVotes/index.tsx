import React from "react";
import {
  CollectionContainer,
  ListNFTContainer,
} from "../CollectionById/style";
import ProductCard from "../../components/general/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGeneral } from "../../contexts/GeneralContext";

const MyVotes: React.FC = () => {
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
          <h1>My Votes</h1>
          <ListNFTContainer>
            <Row xs={1} md={2} lg={3} className="g-4">
              {data.map((item) => (
                <Col key={item.id} xs={12} md={6}>
                  <ProductCard
                    imageSrc={item.image}
                    title={item.name}
                  />
                </Col>
              ))}
            </Row>
          </ListNFTContainer>
        </div>
      </CollectionContainer>
    </>
  );
};

export default MyVotes;

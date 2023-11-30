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
} from "../CollectionById/style";
import Accordion from "react-bootstrap/Accordion";
import ProductCard from "../../components/general/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  CommentContainer,
  CommentSubContainer,
  VoteContainer,
  VoteStarsContainer,
} from "./style";
import StarOutlined from "../../assets/star-outlined";
import { useParams } from "react-router-dom";
import { useApi } from "../../contexts/apiContext";
import { MoralisNFT } from "../../models/moralis";
import { SearchInput, SearchInputContainer } from "../Search/style";
import { CreateVote } from "../../models/apiModels";

const CustomizedCollectionById: React.FC = () => {
  const { id, name } = useParams();
  const {
    getCustomCollectionData,
    nftCollectionSearched,
    votes,
    createVoteCollection,
  } = useApi();
  const [selectedNFTs, setSelectedNFTs] = useState([]);
  const [comment, setComment] = useState<string>("");
  const [voteNumber, setVoteNumber] = useState<number>(0);

  const toggleCardSelection = (cardId: number) => {
    if (selectedNFTs.includes(cardId)) {
      setSelectedNFTs(selectedNFTs.filter((id) => id !== cardId));
      return;
    }
    setSelectedNFTs([...selectedNFTs, cardId]);
  };

  const isNFTSelected = (cardId: number) => {
    return selectedNFTs.includes(cardId);
  };

  useEffect(() => {
    if (id) {
      console.log("called 1");
      console.log(id, name);
      getCustomCollectionData(id, name);
    }
  }, [id]);

  return (
    <>
      <CollectionContainer>
        <div>
          <CollectionDataContainer>
            <CollectionTitle>Collection</CollectionTitle>
            <CollectionItem>
              Address:{" "}
              {nftCollectionSearched &&
                nftCollectionSearched[0].collection_contract_address}
            </CollectionItem>
            <CollectionItem>
              Name:{" "}
              {nftCollectionSearched &&
                nftCollectionSearched[0].collection_moralis_name}
            </CollectionItem>
            <CollectionItem>
              Size:{" "}
              {nftCollectionSearched &&
                nftCollectionSearched[0].collection_moralis_data.length}{" "}
              NFT's
            </CollectionItem>
          </CollectionDataContainer>
          <CustomCollectionContainer>
            <CollectionItem>Click and cast your vote.</CollectionItem>
            <CustomCollectionDualItem>
              <CollectionItem>
                <VoteContainer>
                  Average Note:{" "}
                  <strong>{votes && votes.average_votes} / 5</strong>
                </VoteContainer>
              </CollectionItem>
            </CustomCollectionDualItem>
            <VoteStarsContainer>
              {voteNumber}
              {[...Array(5)].map((_, i) => (
                <StarOutlined
                  onChange={() => setVoteNumber(i + 1)}
                  isFilled={voteNumber >= i + 1}
                />
              ))}
            </VoteStarsContainer>
            <Accordion
              style={{ background: "red !important" }}
              defaultActiveKey="0"
              flush
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Comments</Accordion.Header>
                <Accordion.Body>
                  <CommentContainer>
                    <SearchInputContainer>
                      <i
                        style={{ color: "white" }}
                        className="fa fa-comments"
                        aria-hidden="true"
                      ></i>
                      <SearchInput
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Make a comment"
                      />
                    </SearchInputContainer>
                  </CommentContainer>
                  <CommentContainer>
                    {votes &&
                      votes.comments.map((comment) => {
                        if (comment.message && comment.message !== "") {
                          return (
                            <CommentSubContainer>
                              {comment.message}
                            </CommentSubContainer>
                          );
                        }
                      })}
                  </CommentContainer>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <CustomCollectionButtonContainer>
              <CustomCollectionButton
                onClick={() => {
                  const data: CreateVote = {
                    comment: { vote: 1, voter_wallet: id, message: comment },
                    vote_number: voteNumber,
                    collectionAddress:
                      nftCollectionSearched[0].collection_contract_address,
                    walletAddress: id,
                  };
                  createVoteCollection(data);
                }}
              >
                Send vote and comment
              </CustomCollectionButton>
            </CustomCollectionButtonContainer>
          </CustomCollectionContainer>
          <ListNFTContainer>
            <Row xs={1} md={2} lg={3} className="g-4">
              {nftCollectionSearched &&
                nftCollectionSearched[0].collection_moralis_data.map(
                  (item: MoralisNFT) => {
                    return (
                      <Col key={item.token_id} xs={12} md={6}>
                        <ProductCard
                          imageSrc={item.metadata.image}
                          title={item.metadata.name}
                          price={item.metadata.points.amount}
                        />
                      </Col>
                    );
                  }
                )}
            </Row>
          </ListNFTContainer>
          {/*
       <ListNFTContainer>
            <Row xs={1} md={2} lg={3} className="g-4">
              {data.map((item) => (
                 <Col key={item.id} xs={12} md={6}>
                    <ProductCard
                      imageSrc={item.image}
                      title={item.name}
                      price={item.price}
                      toggleCardSelection={() => toggleCardSelection(item.id)}
                      isSelected={isNFTSelected(item.id)}
                    />
                  </Col>
              ))}
            </Row>
          </ListNFTContainer>
          */}
        </div>
      </CollectionContainer>
    </>
  );
};

export default CustomizedCollectionById;

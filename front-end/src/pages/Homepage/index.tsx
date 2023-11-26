import React from "react";
import {
  AnalyticItem,
  AnalyticTitle,
  AnalyticDescription,
  Analytics,
  ButtonContainer,
  ButtonSearch,
  HomepageContainer,
  LeftSide,
  PurpleDescription,
  PurpleTitle,
  RightSide,
  WhiteTitle,
  Line,
  ImageAsset,
} from "./style";
import img_1 from "../../assets/img_1.png";

const Homepage: React.FC = () => {
  return (
    <HomepageContainer>
      <div>
        <LeftSide>
          <WhiteTitle>Build, Share & Avaliate</WhiteTitle>
          <PurpleTitle>NFT Collections.</PurpleTitle>
          <PurpleDescription>
            Discover the power of NFTs for a unique digital experience.
          </PurpleDescription>
          <ButtonContainer>
            <ButtonSearch>Search now</ButtonSearch>
          </ButtonContainer>

          <Analytics>
            <AnalyticItem>
              <AnalyticTitle>10K</AnalyticTitle>
              <AnalyticDescription>Artwork</AnalyticDescription>
            </AnalyticItem>
            <Line />
            <AnalyticItem>
              <AnalyticTitle>32K</AnalyticTitle>
              <AnalyticDescription>Auction</AnalyticDescription>
            </AnalyticItem>
            <Line />
            <AnalyticItem>
              <AnalyticTitle>42K</AnalyticTitle>
              <AnalyticDescription>Artists</AnalyticDescription>
            </AnalyticItem>
          </Analytics>
        </LeftSide>
        <RightSide>
          <ImageAsset src={img_1} alt="" />
        </RightSide>
      </div>
    </HomepageContainer>
  );
};

export default Homepage;

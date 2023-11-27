// ProductCard.tsx

import React from "react";
import styled from "styled-components";

// Define the styled components
const CardContainer = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  border-radius: 16px;
  border-bottom: 1px solid rgba(238, 237, 237, 0.15);
  background: #2b2b2b;
`;

const Image = styled.img`
border-radius: 16px 16px 0 0;
  width: 100%;
  height: 300px; /* Adjust the height as needed */
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 22px 32px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const Price = styled.p`
  color: white;
  font-size: 14px;
`;

// Define the TypeScript interface for the props
interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
}

// Create the functional component
const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
}) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt={title} />
      <ContentContainer>
        <Title>{title}</Title>
        <Price>ETH {price.toFixed(2)}</Price>
      </ContentContainer>
    </CardContainer>
  );
};

export default ProductCard;

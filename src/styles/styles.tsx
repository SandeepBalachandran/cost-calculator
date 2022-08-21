import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;
export const FlexSpaceEvently = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ProductWrap = styled(FlexSpaceEvently)`
  width: 80%;
  margin:10px;
`;

export const CartWrap = styled.div`
  display: flex;

  flex-direction: column;
  background-color: #ecece;
  width: 20%;
`;

export const SingleProduct = styled(Flex)`
  flex-direction: column;
  padding: 10;
  border: 1px solid grey;
  width: 30%;
  margin: 10px;
  gap: 10;
  border-radius:0.75rem;
  cursor:pointer;
`;

export const CartItem = styled.div`
  display: flex;
  padding: 10;
  border: 1px solid grey;
  margin: 5;
  justify-content: space-between;

  img {
    width: 70px;
    object-fit: cover;
  }
`;

export const CartItemButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10;
`;

export const Button = styled.button`
  padding: 15px;
  border: 0;
  border-radius: 0.75rem;
`;

export const AddButton = styled(Button)`
  background-color: #e53935;
  color: white;
`;

export const RemoveButton = styled(Button)`
  padding: 5;
  border: 0;
  border-radius: 0.75rem;
  background-color: green;
  color: white;
`;

import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const EachDay = styled.div`
  border-radius: 30px;
  padding: 10px 0px 0px;
  width: 120px;
  filter: opacity(0.75);
  text-align: center;
  transition: 0.3s;
  &:hover {
    background-color: #474343;
  }
  @media (max-width: 768px) {
    width: 70px;
    border-radius: 20px;
  }
`;
export const BigFont = styled.p`
  padding: 0;
  font-size: 23px;
  @media (max-width: 810px) {
    font-size: 17px;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`;
export const SmallFont = styled.p`
  padding: 0;
  margin-top: 0;
  font-size: 17px;
  @media (max-width: 810px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 9px;
  }
`;
export const GraphSpace = styled.div`
  margin: 70px 0;
  height: 30px;
  @media (max-width: 810px) {
    margin: 60px 0;
  }
`;
export const Images = styled.img`
  margin: 20px 0;
  width: 35px;
  height: 30px;
`;

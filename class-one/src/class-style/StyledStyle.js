import styled from "styled-components/native";

export const PageContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a1c7e0;
  flex: 1;
`;

export const PageTitle = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #ff9933;
`;
export const PageSubtitle = styled.Text`
  padding-top: 20px;
  font-size: 40px;
  color: #04bf9d;
`;

export default function App() {
  return (
    <PageContainer>
      <PageTitle>Mate</PageTitle>
      <PageSubtitle>Com limão</PageSubtitle>
    </PageContainer>
  );
}

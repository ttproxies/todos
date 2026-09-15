import styled, { createGlobalStyle } from 'styled-components'
import { Square } from 'lucide-react';
import Card from './components/Card' 

function App() {
  return (
    <>
      <Global></Global>
      <Main>
        <h1>helo</h1>
        <Cards>
          <Card><p>Task1</p><Button><Square/></Button></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Cards>
      </Main>
    </>
  )
}

export default App

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }  
`

const Main = styled.main`
  margin: auto;
  max-width: 1200px;
`;

const Cards = styled.ul``;
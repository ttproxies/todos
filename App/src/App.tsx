import styled, { createGlobalStyle } from "styled-components";
import Todo from "./components/Todo";
import TodoNames from "./todos";

function App() {
  return (
    <>
      <Global></Global>
      <Main>
        <h1>helo</h1>
        <Todos>
          {TodoNames.map((name, i) => (
            <Todo itemName={name} key={i} fCheck={() => {console.log("checked")}} fDelete={() => {console.log("deleted")}} />
          ))}
        </Todos>
      </Main>
    </>
  );
}

export default App;

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }  
`;

const Main = styled.main`
  margin: auto;
  max-width: 1200px;
`;

const Todos = styled.ul``;

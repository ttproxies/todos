import styled from 'styled-components';
import { Square, SquareCheck, Trash } from 'lucide-react';

interface TodoProps {
  className?: string;
  itemName: string;
  fDelete: () => void;
  fCheck: () => void;
}

function Todo({ className, itemName, fDelete, fCheck }: TodoProps) {
  return <TodoCont className={className}>
    <TodoName>{itemName}</TodoName>
    <Buttons>
      <Button onClick={fDelete}><Trash /></Button>
      <Button onClick={fCheck}><Square /></Button>
    </Buttons>
  </TodoCont>
}

function changeIcon() {
  
}

const TodoName = styled.p``

const Button = styled.button`
  background: none;
  border: none;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  column-gap: 0.5em;
`

const TodoCont = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`

export default styled(Todo)`
  display: flex;
  background-color: #eee;
  margin-bottom: 1rem;
  list-style-type: none;
  font-size: 1.35em;
  padding: 1em;
`;

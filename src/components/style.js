import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const TodoWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.secondary ? "74%" : "100%")};
  margin: ${props => (props.secondary ? "0 auto" : "")};
`;

const InputField = styled.input`
  padding: 5px 5px;
  border: 2px solid palevioletred;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TodoList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0 auto;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  &:span {
    display: inline-block;
    width: 300px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 17px;
    font-family: sans-serif;
    color: #676262;
  }
`;

const TextArea = styled.span`
  display: inline-block;
  width: 300px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
  font-family: sans-serif;
  color: #676262;
`;

export {
  Title,
  Wrapper,
  TodoWrapper,
  InputField,
  Button,
  TodoList,
  TodoItem,
  TextArea
};

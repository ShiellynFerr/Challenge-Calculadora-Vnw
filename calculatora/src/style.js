import styled,{createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle `
  *{
      outline: none;
      margin: 0;
      padding: 0;
}  
      
`;

export const Section = styled.section `
background-color: #2F243A;
margin-top: 8%;
border-radius: 1em;
padding: 2px;
height: 430px;
width: 370px;
margin-left: 40%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
`

export const Title = styled.h1 `
  color: white;
  font-size: 1.3vw;
`;


export const BoxInputs = styled.div `
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input `
padding: 0.5em;
margin: 0.5em;
color: palevioletred;
background: papayawhip;
border: none;
border-radius: 3px;
`;

export const BoxButtons = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
`;

// export const Button = styled.button `
//   width: 2.5vw;
//   height: 2.5vw;
//   font-size: 1vw;
//   color: rgb (168,111,4);
//   border: solid black 0.2vw;
//   border-radius: 20vw;
//   &:hover{
//   background: rgb(13, 20, 49);
//   color: white;
//   }
// `;

export const Btn = styled.button`
width: 50px;
height: 50px;
margin: 0.3em;
font-size: 1.5em;
background-color: #C8C8C8;
border-radius:2em;
border: none;
`

export const ButtonDel = styled.button `
  padding: 1vw 2vw;
  font-size: 1vw;
  color: rgb (168,111,4);
  border: solid black 0.2vw;
  border-radius: 2vw;
`;

export const InputResult = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid #2F243A;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
import React, { Component } from "react";
import {
  Container, 
  Title,
  BoxInputs,
  BoxButtons,
  Input,
  Button,
  ButtonDel,
  InputResult,
  GlobalStyle,
  Section,
  Btn
} from "./style";

class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  divisao = () => {
    this.setState({
      res: this.state.n1 / this.state.n2
    });
  };

  mult = () => {
    this.setState({
      res: this.state.n1 * this.state.n2
    });
  };

  sub = () => {
    this.setState({
      res: this.state.n1 - this.state.n2
    });
  };

  soma = () => {
    this.setState({
      res: Number(this.state.n1) + Number(this.state.n2)
    });
  };

  limpar = () => {
    this.setState({
      n1: "",
      n2: "",
      res: ""
    });
  };

  handleChangeN1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChangeN2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  render() {
    return (
      <Section>
        <GlobalStyle />
        <Title>CALCULADORA</Title>
        <BoxInputs>
          <Input
            value={this.state.n1}
            onChange={this.handleChangeN1}
            placeholder="Primeiro número..."
          />
          <Input
            value={this.state.n2}
            onChange={this.handleChangeN2}
            placeholder="Segundo número..."
          />
        </BoxInputs>
        <BoxButtons>
          <Btn onClick={this.divisao}>/</Btn>
          <Btn onClick={this.mult}>*</Btn>
          <Btn onClick={this.sub}>-</Btn>
          <Btn onClick={this.soma}>+</Btn>
          <ButtonDel onClick={this.limpar}>limpar</ButtonDel>
        </BoxButtons>
        <InputResult value={this.state.res} placeholder="Resultado..." />
      </Section>
    );
  }
}

export default App;
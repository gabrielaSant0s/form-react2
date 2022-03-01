import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core"

function App() {
  return(
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' component="h1" align='center'>Formulario de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf}/>
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 dígitos"}
  } else{
    return {valido:true, texto:""}
  }
}
export default App;

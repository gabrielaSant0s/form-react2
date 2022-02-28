import React, {useState} from "react";
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core';

function FormularioCadastro({aoEnviar}){
    const [nome,setNome] = useState("")
    const [sobrenome,setSobrenome]= useState("")
    const [cpf,setCpf]= useState("")
    const [promocoes,setPromocoes]= useState(true)
    const [novidades,setNovidades]= useState(true)
    const [erros,setErros]= useState({cpf:{valido:true,texto:""}})

    return (
    <form
        onSubmit={(event) =>{
            event.preventDefault();
            aoEnviar({nome,sobrenome,cpf,promocoes,novidades})

        }}>
        <TextField 
            value={nome}
            onChange = {(event) =>{
                setNome(event.target.value);
            }}

            id="nome" 
            label="Nome" 
            variant="outlined" 
            margin="normal" 
            fullWidth />
        <TextField 
            value={sobrenome}
            onChange = {(event) =>{
                setSobrenome(event.target.value);
            }}

            id="sobrenome" 
            label="Sobrenome" 
            variant="outlined" 
            margin="normal" 
            fullWidth/>
        <TextField 
        value={cpf}
        onChange = {(event) =>{
            setCpf(event.target.value);
        }}
        id="cpf" 
        label="CPF"
        onBlur={(event)=>{
            setErros({cpf:{valido:false,texto:"CPF deve ter 11 dígitos"}})

        }} 
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined" 
        margin="normal" 
        fullWidth rows="number"/>
       
        <FormControlLabel 
        label="Promoções"
        control={<Switch 
        checked = {promocoes}
        onChange={(event)=>{
            setPromocoes(event.target.checked)
        }}
        name="promocoes" 
        color="primary"/>}/>
        
        <FormControlLabel 
        label="Novidades" 
        control={<Switch 
        checked = {novidades}
        onChange={(event)=>{
            setNovidades(event.target.checked)
        }}
        name="novidades"
        color="primary"/>}/>
        

        <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
    </form>
    
    );
}

export default FormularioCadastro;
import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({aoEnviar}){
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    return (
        <form onSubmit={(event)=>{
            event.preventDefault()
            aoEnviar({email,senha})
        }}>
            <TextField 
            value={email}
            onChange = {(event) => {setEmail(event.target.value)}}
            id="email" 
            label="e-mail" 
            type="email" 
            variant="outlined" 
            margin="normal" 
            required
            fullWidth/>
            <TextField 
            value={senha}
            onChange = {(event) => {setSenha(event.target.value)}}
            id="senha" 
            label="senha" 
            type="password"
            variant="outlined" 
            margin="normal" 
            required
            fullWidth/>
            <Button 
            type="submit"
            variant="contained" 
            color="primary"
            >Cadastrar</Button>


            
        </form>
    );
}

export default DadosUsuario;
import React from "react";
import DadosPessoais from "../DadosPessoais";
import DadosEntrega from "./DadosEntrega";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validarCpf}){
    return (
        <>
            
            <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf}/>
            <DadosUsuario/>
            <DadosEntrega/>
        </>
        
    );
}

export default FormularioCadastro;
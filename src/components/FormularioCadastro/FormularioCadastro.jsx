import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosPessoais from "../DadosPessoais";
import DadosEntrega from "./DadosEntrega";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validarCpf}){
    const [etapaAtual, SetEtapaAtual] = useState(0)

    function proximo(){
        SetEtapaAtual(etapaAtual+1)
    }

    const formularios = [
        <DadosUsuario aoEnviar={proximo}/>,
        <DadosPessoais aoEnviar={proximo} validarCpf={validarCpf}/>,
        <DadosEntrega aoEnviar={aoEnviar}/>,

    ]
  
    return (
        <>
            {formularios[etapaAtual]}
            
        </>
        
    );
}



export default FormularioCadastro;
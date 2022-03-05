import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosPessoais from "../DadosPessoais";
import DadosEntrega from "./DadosEntrega";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar, validarCpf}){
    const [etapaAtual, SetEtapaAtual] = useState(0)
    const [dadosColetados,setDados]=useState({})

    useEffect(()=>{
        if (etapaAtual === formularios.length-1){
            aoEnviar(dadosColetados)
        }
    })

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados})
        console.log(dadosColetados);
        proximo()

    }
    function proximo(){
        SetEtapaAtual(etapaAtual+1)
    }
    const formularios = [
        <DadosUsuario aoEnviar={coletarDados}/>,
        <DadosPessoais aoEnviar={coletarDados} validarCpf={validarCpf}/>,
        <DadosEntrega aoEnviar={coletarDados}/>,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>

    ]
  
    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
            {formularios[etapaAtual]}
            
        </>
        
    );
}



export default FormularioCadastro;
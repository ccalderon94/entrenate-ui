import { gql } from "@apollo/client"

export const GQL_PERSONA_PROFILE = gql`
query persona($id: ID!) {
    persona(id: $id) {
        Per_IdPersona
        Tdi_IdTipoDocumentoIdentidad
        Per_NumeroDocumentoIdentidad
        Per_Nombres
        Per_ApellidoPaterno
        Per_ApellidoMaterno
        Per_CorreoElectronico
        Per_Celular
        Per_FechaNacimiento
        Per_Sexo
        Per_Direccion
        tipoDocumentoIdentidad {
            Tdi_NombreCorto
        }
    }    
}`

export const GQL_PERSONA_NAVBAR = gql`
query persona($id: ID!) {
    persona(id: $id) {
        Per_Nombres
        Per_ApellidoPaterno
        Per_ApellidoMaterno
        Per_CorreoElectronico
    }    
}`

export const GQL_PERSONA_UPDATE = gql`
mutation updatePersona($id: ID!, $input: UpdatePersonaInput!) {
    updatePersona(id: $id, input: $input) {
        Per_IdPersona
    }
}`

export const GQL_PERSONAS_LIST = gql`
query personas ($activo: Int){
    personas(activo: $activo) {
        Per_IdPersona
        Per_Nombres
        Per_ApellidoPaterno
        Per_ApellidoMaterno
		Per_CorreoElectronico
        Per_Celular
        Per_NumeroDocumentoIdentidad        
        Per_Activo
        tipoDocumentoIdentidad{
            Tdi_NombreCorto
        }
    }
}`
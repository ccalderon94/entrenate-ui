import { gql } from "@apollo/client"

export const GQL_USUARIO = gql`
query usuario($id: ID!) {
    usuario(id: $id) {
        Usu_NombreUsuario
        persona {
            Per_IdPersona
            Per_Nombres
            Per_ApellidoPaterno
            Per_ApellidoMaterno
        }
    }    
}`

export const GQL_USUARIO_BY_TOEN = gql`
query usuarioByToken($token: String!) {
    usuarioByToken(token: $token) {
        Usu_IdUsuario
        persona {
            Per_Nombres
            Per_CorreoElectronico
        }
    }    
}`
import { gql } from "@apollo/client"

export const GQL_TIPOS_DOCUMENTO_IDENTIDAD_SELECT = gql`
query tiposDocumentoIdentidad($activo: Int) {
    tiposDocumentoIdentidad(activo: $activo) {
        Tdi_IdTipoDocumentoIdentidad
        Tdi_NombreCorto
    }    
}`
"use server"
import { gqlTiposDocumentoIdentidad } from "app/graphql/queries/tipoDocumentoIdentidad";
import { GQL_TIPOS_DOCUMENTO_IDENTIDAD_SELECT } from "./gql";

export const getTipoDocumentoIdentidadSelect = async (activo?: number): Promise<TipoDocumentoIdentidadSelect[]> => {
   const response = await gqlTiposDocumentoIdentidad(GQL_TIPOS_DOCUMENTO_IDENTIDAD_SELECT,{
      activo
   });
   return response;
}
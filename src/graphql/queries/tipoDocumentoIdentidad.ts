import { DocumentNode } from "@apollo/client";
import { getServerSession } from "next-auth";
import { authOptions } from "app/auth";
import { GraphQLClientSingleton } from "..";

type TipoDocumentoIdentidadVariables = {
    id?: string;
}

type TiposDocumentoIdentidadVariables = {
    activo?: number;
}

export const gqlTipoDocumentoIdentidad = async (gql: DocumentNode, variables: TipoDocumentoIdentidadVariables) => {
    try {
        const client = GraphQLClientSingleton.getInstance().getClient();        
        const session = await getServerSession(authOptions);
        const { data } = await client.query({
            query: gql,
            variables,
            context: {
                headers: {
                    authorization: `Bearer ${session?.accessToken}`
                }                
            }
        })
        if(!data){          
            throw new Error('Request Fail')  
        }
        return data.tipoDocumentoIdentidad
    } catch (error) {        
       console.log(error)
    }
}

export const gqlTiposDocumentoIdentidad = async (gql: DocumentNode, variables?: TiposDocumentoIdentidadVariables) => {
    try {
        const client = GraphQLClientSingleton.getInstance().getClient();        
        const session = await getServerSession(authOptions);
        const { data } = await client.query({
            query: gql,
            variables,
            context: {
                headers: {
                    authorization: `Bearer ${session?.accessToken}`
                }                
            }
        })
        if(!data){          
            throw new Error('Request Fail')  
        }
        return data.tiposDocumentoIdentidad
    } catch (error) {        
       console.log(error)
    }
}
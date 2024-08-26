import { DocumentNode } from "@apollo/client";
import { getServerSession } from "next-auth";
import { authOptions } from "app/auth";
import { GraphQLClientSingleton } from "..";

type PersonaVariables = {
    id: string;
}

type PersonasVariables = {
    activo?: number;
}


export const gqlPersona = async (gql: DocumentNode, variables: PersonaVariables) => {
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
        return data.persona
    } catch (error) {        
       console.log(error)
    }
}




export const gqlPersonas = async (gql: DocumentNode, variables: PersonasVariables) => {
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
        return data.personas
    } catch (error) {        
       console.log(error)
    }
}
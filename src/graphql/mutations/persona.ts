import { DocumentNode } from "@apollo/client";
import { GraphQLClientSingleton } from "..";
import { getServerSession } from "next-auth";
import { authOptions } from "app/auth";

type UpdatePersonaVariables = {
    id: string;
    input: UpdatePersonaInput;
}

export const gqlUpdatePersona = async (gql: DocumentNode, variables?: UpdatePersonaVariables) => {
    try {
        const client = GraphQLClientSingleton.getInstance().getClient();        
        const session = await getServerSession(authOptions);
        const { data } = await client.mutate({
            mutation: gql,
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
        return data.updatePersona
    } catch (error) {        
       console.log(error)
    }
}
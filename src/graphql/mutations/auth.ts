import { DocumentNode } from "@apollo/client";
import { GraphQLClientSingleton } from "..";

type AuthenticateVariables = {
    username: string;
    password: string;
}

export const gqlAuthenticate = async (gql: DocumentNode, variables: AuthenticateVariables) => {
    try {
        const client = GraphQLClientSingleton.getInstance().getClient();
        const { data } = await client.mutate({
            mutation: gql,
            variables
        })
        if(!data){
            throw new Error('Authentication Fail')  
        }
        return data.authenticate
    } catch (error) {        
        console.log(error)
    }
}
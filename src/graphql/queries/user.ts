import { DocumentNode } from "@apollo/client";
import { getServerSession } from "next-auth";
import { authOptions } from "app/auth";
import { GraphQLClientSingleton } from "..";

type UsuarioVariables = {
    id: string;
}
type UsuarioByTokenVariables = {
    token: string;
}

export const gqlUsuario = async (gql: DocumentNode, variables: UsuarioVariables) => {
    try {
        const client = GraphQLClientSingleton.getInstance().getClient();
        const { data } = await client.query({
            query: gql,
            variables
        })
        if(!data){
            throw new Error('Request Fail')  
        }
        return data.usuario
    } catch (error) {        
        console.log(error)
    }
}


export const gqlUsuarioByToken = async (gql: DocumentNode, variables: UsuarioByTokenVariables) => {
    try {
        const client = GraphQLClientSingleton.getInstance().getClient();
        const { data } = await client.query({
            query: gql,
            variables
        })
        if(!data){
            throw new Error('Request Fail')  
        }
        return data.usuario
    } catch (error) {        
        console.log(error)
    }
}
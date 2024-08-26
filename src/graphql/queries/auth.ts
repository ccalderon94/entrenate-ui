import { DocumentNode, gql } from "@apollo/client";
import { getServerSession } from "next-auth";
import { authOptions } from "app/auth";
import { GraphQLClientSingleton } from "..";

export const gqlRefresh = async (gql: DocumentNode) => {
    try {
        const client = GraphQLClientSingleton.getInstance().getClient();
        const session = await getServerSession(authOptions);
        const { data } = await client.query({
            query: gql,
            context: {
                headers: {
                    Authorization:  `Bearer ${session?.refreshToken}`
                }
            }
        })

        if(!data){
            throw new Error('Request Fail')  
        }        
        return data.refresh
    } catch (error) {        
        console.log(error)
    }
}
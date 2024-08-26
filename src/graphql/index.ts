import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import config from 'app/config';

export class GraphQLClientSingleton {
    private static instance: GraphQLClientSingleton;
    private readonly endpoint =  config().backend.graphqlURL;
    static getInstance():GraphQLClientSingleton {
        if (!this.instance) {
          this.instance = new GraphQLClientSingleton();
        }        
        return this.instance
    }

    getClient(): ApolloClient<NormalizedCacheObject> {    
        return new ApolloClient({
            uri: this.endpoint,
            cache: new InMemoryCache(),
            credentials: "include",
        });
    } 
}
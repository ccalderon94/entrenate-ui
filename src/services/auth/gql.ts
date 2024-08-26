import { gql } from "@apollo/client";

export const GQL_REFRESH = gql`
   query refresh {
    refresh {
        user {
            id
            name
            email
        }
        access_token
        refresh_token
    }    
}
`
export const GQL_AUTHENTICATE = gql`
mutation authenticate($username: String!, $password: String!) {
    authenticate(username: $username, password: $password) {
        user {
            id
            name
            email
        }
        access_token
        refresh_token
    }    
}`
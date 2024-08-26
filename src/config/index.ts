export default function config() {
    return {
        auth: {
            secret: process.env.AUTH_SECRET || ''
        },
        backend: {
            graphqlURL: process.env.BACKEND_GRAPHQL_URL || ''
        }
    }
}
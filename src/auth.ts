
import type { JWT } from "next-auth/jwt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authenticateUser, refreshTokens } from "./services/auth";
import { getUsuarioByToken } from "./services/user";
import { jwt } from "./utils";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },  
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                username: { label: "Username", type: "string", },
                password: { label: "Password", type: "password",
                },
            },
            async authorize(credentials) {
                try {
                    const response = await authenticateUser(credentials?.username, credentials?.password)
                    if(!response.access_token) {
                        throw response;
                    }
                    return { ...response.user, accessToken: response.access_token, refreshToken: response.refresh_token };
                } catch (error) {
                    if (error instanceof Response) {
                        return null;
                    }            
                    throw new Error("An error has occurred during login request");
                }
            },      

        }),
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === "update") {
                if (session.type === "MANUAL") {
                    const { Usu_IdUsuario: id, persona: { Per_Nombres: name, Per_CorreoElectronico: email } } = await getUsuarioByToken(token.accessToken);
                    return { ...token, id, name, email };
                }                
                return { ...token, ...session };
            }
            if (user) {
                return { ...token, ...user };
            }

            const { exp: accessTokenExpires } = jwt.decode(token.accessToken);
            if (!accessTokenExpires) {
                return token;
            }
            
            const currentUnixTimestamp = Math.floor(Date.now() / 1000);
            const accessTokenHasExpired = currentUnixTimestamp > accessTokenExpires;
           
            if (accessTokenHasExpired) {
                return await refreshAccessToken(token);
            }

            return token;
        },
        async session({session, token}) {
            if (token.error) {
                throw new Error("Refresh token has expired");
            }
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.user.id = token.id ?? "";
            session.user.name = token.name ?? "";
            session.user.email = token.email ?? "";
     
            return session;
        }
    }
}

async function refreshAccessToken(token: JWT) {
    try {
      const response = await refreshTokens();  
      console.log('====================================');
      console.log('JWT AQUIIIIII EXPIROOOOO', response);
      console.log('====================================');
      if (!response) throw response;
  
      const refreshedAccessToken = response.access_token;
      const { exp } = jwt.decode(refreshedAccessToken);
  
      return {
        ...token,
        accessToken: refreshedAccessToken,
        exp,
      };
    } catch (error) {
      return {
        ...token,
        error: "RefreshAccessTokenError",
      };
    }
  }
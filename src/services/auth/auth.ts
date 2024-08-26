'use server';

import { gqlRefresh } from "app/graphql/queries/auth";
import { GQL_AUTHENTICATE, GQL_REFRESH } from "./gql";
import { gqlAuthenticate } from "app/graphql/mutations/auth";

export const refreshTokens = async (): Promise<AuthenticateUserResponse> => {
    const response = await gqlRefresh(GQL_REFRESH);
    return response;
 }
 
export const authenticateUser = async (username: string = '', password: string = ''): Promise<AuthenticateUserResponse> => {
    const response = await gqlAuthenticate(GQL_AUTHENTICATE, {
        username,
        password
    });
    return response;
 }
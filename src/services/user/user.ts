'use server';

import { gqlUsuario, gqlUsuarioByToken } from "app/graphql/queries/user";
import { GQL_USUARIO, GQL_USUARIO_BY_TOEN } from "./gql";


export const getUsuarioById = async (id: string): Promise<UsuarioResponse> => {
    const response = await gqlUsuario(GQL_USUARIO, {
        id
    });
    return response;
 }
 
export const getUsuarioByToken = async (token: string): Promise<UsuarioResponse> => {
    const response = await gqlUsuarioByToken(GQL_USUARIO_BY_TOEN, {
        token
    });
    return response;
 }
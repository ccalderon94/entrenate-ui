"use server"
import { gqlPersona, gqlPersonas } from "app/graphql/queries/persona"
import { gqlUpdatePersona } from "app/graphql/mutations/persona";
import { GQL_PERSONA_PROFILE, GQL_PERSONA_NAVBAR, GQL_PERSONA_UPDATE, GQL_PERSONAS_LIST } from "./gql";

export const getPersonaInfoProfile = async (id: string): Promise<PersonaProfile> => {
   const response = await gqlPersona(GQL_PERSONA_PROFILE,{
    id
   });
   return response;
}

export const getListadoPersonas = async (activo?: number): Promise<PersonasList[]> => {
    const response = await gqlPersonas(GQL_PERSONAS_LIST,{
      activo
    });
    return response;
}

export const getPersonaNavBar = async (id: string): Promise<PersonaNavBar> => {
    const response = await gqlPersona(GQL_PERSONA_NAVBAR,{
     id
    });
    return response
 }
 
 export const updatePersona =  async (id: string, input: UpdatePersonaInput) => {
    const response = await gqlUpdatePersona(GQL_PERSONA_UPDATE,{
        id,
        input
    });
    return response
 } 
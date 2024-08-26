type PersonaProfile =  {  
        Per_IdPersona: string;                                 
        Tdi_IdTipoDocumentoIdentidad: string;                                 
        Per_NumeroDocumentoIdentidad: string;                                 
        Per_Nombres: string;                                 
        Per_ApellidoPaterno: string;                                 
        Per_ApellidoMaterno: string;                                 
        Per_CorreoElectronico: string;                                 
        Per_Celular: string;                                 
        Per_FechaNacimiento?: Date;                                 
        Per_Sexo: string;                                 
        Per_Direccion: string;     
        tipoDocumentoIdentidad: {
            Tdi_NombreCorto: String;
        }
 }

 type PersonasList =  {  
    Per_IdPersona: string;                                               
    Per_Nombres: string;                                 
    Per_ApellidoPaterno: string;                                 
    Per_ApellidoMaterno: string;                                 
    Per_CorreoElectronico: string;                                 
    Per_Celular: string;                                            
    Per_NumeroDocumentoIdentidad: string;    
    Per_Activo: number;
    tipoDocumentoIdentidad: {
        Tdi_NombreCorto: String;
    }
}

 type PersonaNavBar =  {  
    Per_IdPersona: string;                                 
    Tdi_IdTipoDocumentoIdentidad: string;                                 
    Per_NumeroDocumentoIdentidad: string;                                 
    Per_Nombres: string;                                 
    Per_ApellidoPaterno: string;                                 
    Per_ApellidoMaterno: string;                                 
    Per_CorreoElectronico: string;                                 
    Per_Celular: string;                                 
    Per_FechaNacimiento: Date;                                 
    Per_Sexo: string;                                 
    Per_Direccion: string;     
}

type UpdatePersonaInput = {
    Tdi_IdTipoDocumentoIdentidad?: string;
    Per_NumeroDocumentoIdentidad?: string;
    Per_Nombres?: string;
    Per_ApellidoPaterno?: string;
    Per_ApellidoMaterno?: string;
    Per_CorreoElectronico?: string;
    Per_Celular?: string;
    Per_FechaNacimiento?: Date;
    Per_Sexo?: string;
    Per_Direccion?: string;
    Per_Activo?: number;
}
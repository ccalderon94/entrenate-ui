type UsuarioResponse =  {    
    Usu_IdUsuario: string;
    Usu_NombreUsuario: string;
    Usu_Activo: number;
    persona: {
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
        Per_Activo: number;        
    }
}

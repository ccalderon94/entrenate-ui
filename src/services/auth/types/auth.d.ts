type AuthenticateUserResponse =  {        
    user: {
        id: string;
        name: string;
        email: string;
    };
    access_token: string;
    refresh_token: string;

}
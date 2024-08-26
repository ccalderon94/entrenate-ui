import 'next-auth';
import type { User } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: User;
        accessToken?: string;
        refreshToken?: string;
    }

    interface User {
        id: string;
        name: string;
        email: string;
        accessToken?: string;
        refreshToken?: string;
    }    
}

declare module "next-auth/jwt" {
    interface JWT extends User {
      accessToken: string;
      refreshToken: string;
      accessTokenExpires: number;
    }
  }
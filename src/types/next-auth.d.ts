import { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

/** Example on how to extend the built-in session types */
declare module 'next-auth' {
  export interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
    foo: string
  }
}

/** Example on how to extend the built-in types for JWT */
declare module 'next-auth/jwt' {
  export interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    bar: string
  }
}

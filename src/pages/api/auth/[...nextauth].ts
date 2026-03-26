import NextAuth from 'next-auth'
import { TinaAuthJSOptions } from 'tinacms-authjs'
import GithubProvider from 'next-auth/providers/github'
import databaseClient from '../../../../tina/__generated__/databaseClient'

export default NextAuth(
  TinaAuthJSOptions({
    databaseClient,
    secret: process.env.NEXTAUTH_SECRET!,
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      }),
    ],
    overrides: {
      callbacks: {
        jwt: async ({ token, account }: any) => {
          // Qualquer usuário autenticado pelo GitHub recebe role 'user'
          if (account?.provider === 'github') {
            token.role = 'user'
          }
          return token
        },
        session: async ({ session, token }: any) => {
          session.user.role = token.role
          session.user.sub = token.sub
          return session
        },
      },
    },
  })
)

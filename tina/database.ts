import { createDatabase, createLocalDatabase } from '@tinacms/datalayer'
import { MongodbLevel } from 'mongodb-level'
import { GitHubProvider } from 'tinacms-gitprovider-github'

// Local = desenvolvimento local OU fase de build (sem MongoDB disponível)
const isLocal =
  process.env.TINA_PUBLIC_IS_LOCAL === 'true' ||
  process.env.TINA_BUILD_MODE === 'true'

export default isLocal
  ? createLocalDatabase()
  : createDatabase({
      gitProvider: new GitHubProvider({
        repo: process.env.GITHUB_REPO!,
        owner: process.env.GITHUB_OWNER!,
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN!,
        branch: process.env.GITHUB_BRANCH || 'main',
      }),
      databaseAdapter: new MongodbLevel<string, Record<string, unknown>>({
        collectionName: 'tinacms',
        dbName: 'tinacms',
        mongoUri: process.env.MONGODB_URI!,
      }),
    })

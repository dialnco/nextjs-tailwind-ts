This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## prima

https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries

## TODO: check prisma/graphql integration:

https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-oklidw1rhw
https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-2-fwpc6ds155
https://github.com/prisma/awesome-links
https://github.com/planetscale/nextjs-planetscale-starter
https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes-auth
https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-nextjs-api-routes-auth/pages/api/post/index.ts

https://dev.to/prisma/passwordless-authentication-with-next-js-prisma-and-next-auth-5g8g

https://bedrock.mxstbr.com/#tools
https://github.com/mxstbr/bedrock/tree/main/src/pages
https://github.com/mxstbr/bedrock/blob/main/docs/1-architecture.md

https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes-auth

// example flow
https://docs.planetscale.com/tutorials/automatic-prisma-migrations
https://docs.planetscale.com/tutorials/prisma-data-platform-integration

// next-auth
https://github.com/nextauthjs/next-auth-typescript-example

Video for prisma setup
https://www.youtube.com/watch?v=5JpKZfPx-1k
https://www.youtube.com/watch?v=qEBEo76gKK0

## Working with Prisma & PlanetScale

Create new db on pscale, create initial branch (for working and tinkering) and shadow branch
Set main as production branch (then working branch can do pull requests to main).

### open connections

`pscale connect <bd-name> <branch-name> --port 3309`
`pscale connect <bd-name> shadow --port 3310`

### add changes to schema and

Generate prisma artifacts to localdev???
https://www.prisma.io/docs/reference/api-reference/command-reference

`prima generate`

### add schema changes to connection branch

migrate db schema
`npx prisma migrate dev --name init`

If branch is ok, add branch pull request to main, on planet scale dashboard.

### Open studio

`npx prisma studio`
For local db studio

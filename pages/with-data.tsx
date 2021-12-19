import type { NextPage } from 'next';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

const AllUsersQuery = gql`
  query {
    users {
      id
      name
      email
      image
    }
  }
`;

const WithDataPage: NextPage = () => {
  const { data, loading, error } = useQuery(AllUsersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>With graphql query data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">pages/with-data</code>
        </p>

        <div className="flex flex-wrap items-center justify-around mt-6 w-full">
          {data.users.map((user) => (
            <div
              key={user.id}
              className="p-6 mt-6 text-left border w-full rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <img className="shadow-sm" src={user.image} />
              <div className="p-5 flex flex-col space-y-2">
                <p className="text-lg text-blue-500">{user.name}</p>
                <p className="text-xl font-bold">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
};

export default WithDataPage;

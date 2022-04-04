import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React questionnaire</title>
        <meta name="description" content="React questionnaire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full p-4 justify-center">
        <h1 className="text-lg">Welcome!</h1>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home

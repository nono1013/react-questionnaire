import type { NextPage } from 'next'
import Head from 'next/head'
import Questionnaire from '../src/components/Questionnaire'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React questionnaire</title>
        <meta name="description" content="React questionnaire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Questionnaire />
      </main>

      <footer></footer>
    </div>
  )
}

export default Home

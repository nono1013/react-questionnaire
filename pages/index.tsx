import type { NextPage } from 'next'
import Head from 'next/head'
import Questionnaire from '../src/components/Questionnaire'
import { Provider } from 'react-redux'
import { store } from '../src/store'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React questionnaire</title>
        <meta name="description" content="React questionnaire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Provider store={store}>
          <Questionnaire />
        </Provider>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home

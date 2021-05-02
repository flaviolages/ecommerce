import Head from 'next/head'
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-600">
      <Head>
        <title>e-commerce</title>
        <meta name="description" content="e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

    </div>
  )
}

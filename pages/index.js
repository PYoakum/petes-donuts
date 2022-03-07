import Head from 'next/head'
import Hero from "../components/Hero.tsx";


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Peter's Donuts</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
    </div>
  )
}



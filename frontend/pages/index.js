import Image from 'next/image'
import { Inter } from 'next/font/google';
import Head from "next/head";
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Home() {
  return (
    <section className="font-mono min-h-screen bg-[#131615]">
      <Head>
        <title>Aptos Explorer</title>
      </Head>
      <Header/>
      <Main/>
    </section>
  )
}

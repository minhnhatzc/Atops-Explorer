import Head from "next/head";
import Header from "@/components/Header.js";
import Txn from "@/components/Txn";

export default function Home() {
  return (
    <section className="font-mono min-h-screen bg-[#131615]">
      <Head>
        <title>Aptos Explorer</title>
      </Head>
      <Header />
      <Txn />
    </section>
  );
}

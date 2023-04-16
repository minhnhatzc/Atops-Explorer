import "@/styles/globals.css";
import { useState } from "react";
import TxnContext from "@/components/TxnContext";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon]
const projectId = 'YOUR_PROJECT_ID'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  const [hash, setHash] = useState("");
  const [version, setVersion] = useState("");
  const [txnStatus, setTxnStatus] = useState("");
  const [sender, setSender] = useState("");
  const [txnFunction, setTxnFunction] = useState("");
  const [amount, setAmount] = useState("0");
  return (
    <TxnContext.Provider
      value={{
        hash,
        setHash,
        version,
        setVersion,
        txnStatus,
        setTxnStatus,
        sender,
        setSender,
        txnFunction,
        setTxnFunction,
        amount,
        setAmount,
      }}
    >
      <>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </>
    </TxnContext.Provider>
  );
}

import type { NextPage } from "next";
import { MainLayout } from "../layouts/MainLayout";

import Image from "next/image"
import { CheckScore } from "../components/CheckScore"

const Home: NextPage = () => {
  return (
    <MainLayout>
      <section className="mt-10 flex flex-col items-center justify-center">
        <p className="text-7xl font-bold">Transactions are safe now.</p>
      </section>
      <section>
        <CheckScore />
      </section>

      <section className="mt-10 flex flex-col items-start justify-center rounded-md bg-green-200 p-10 md:w-6/12">
        <p className="mb-5 text-2xl font-bold">What is Score?</p>
        <p>
          Are you tired of worrying about the security and legitimacy of your
          crypto transactions? Look no further! Our project is designed to help
          you determine the trustworthiness of any crypto wallet you come
          across.
        </p>
      </section>

      <div className="flex justify-end">
        <section className="mt-10 flex flex-col items-start justify-center rounded-md bg-green-200 p-10 md:w-6/12">
          <p className="mb-5 text-2xl font-bold">How does Score works?</p>
          <p>
            By using advanced algorithms and data analysis techniques, our
            system assigns a trust score to each wallet, based on factors such
            as transaction history, security features, and user feedback. This
            score is then displayed alongside the wallet information, giving you
            the confidence to make informed decisions when it comes to your
            crypto transactions.
          </p>
        </section>
      </div>

      <section className="mt-10 flex flex-col items-start justify-center rounded-md bg-green-200 p-10 md:w-6/12">
        <p className="mb-5 text-2xl font-bold">Try it out!</p>
        <p>
          Our project is dedicated to creating a more transparent and secure
          crypto environment for all users. We believe that by providing
          reliable information about wallets, we can help prevent fraud and
          scams, and promote responsible use of cryptocurrencies. So whether
          you're a seasoned crypto investor or just getting started, our trust
          score system can help you navigate the complex world of digital
          currencies with confidence. Join us today and experience the peace of
          mind that comes with knowing your crypto transactions are secure and
          trustworthy.
        </p>
      </section>

      <div className="flex justify-end">
        <section className="mt-10 flex flex-col items-start justify-center rounded-md bg-green-200 p-10 md:w-6/12">
          <p className="mb-5 text-2xl font-bold">MetaMask extension</p>
          <p>
            Our Metamask Flask extension is designed to simplify the process of
            interacting with decentralized applications (dApps) on the Ethereum
            network. With just a few clicks, you can connect to your Metamask
            wallet and check the score of any wallet you are interacting with.
          </p>
        </section>
      </div>

      <section className="mt-10 flex flex-col items-start justify-center rounded-md bg-green-200 p-10 md:w-6/12">
        <p className="mb-5 text-2xl font-bold">Etherscan extension</p>
        <p>
          Our Etherscan extension provides users with an easy way to access and
          analyze blockchain data on the Ethereum network. With this extension,
          you can quickly view transaction details and Trust Score of the
          wallet,
        </p>
      </section>
    </MainLayout>
  );
};

export default Home;

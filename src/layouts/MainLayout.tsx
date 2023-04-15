import { Shield } from "@mui/icons-material"
import Head from "next/head";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Score</title>
        <meta
          name="description"
          content="The project helps to identify the trust score of a crypto wallet. Using trust score you can understand wether your transaction is safe"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="absolute left-0 top-0 h-20 w-full bg-green-500">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-2xl text-white font-bold mr-2">Score</h1>
          <Shield sx={{color: 'white'}}/>
        </div>
      </header>

      <main className="md:p-24 bg-green-50 p-10 pt-24">{children}</main>
    </>
  );
};

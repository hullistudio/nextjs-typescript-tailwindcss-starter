import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='align-center flex h-screen w-screen justify-center bg-slate-600 text-slate-50'>
      <Head>
        <title>Hi</title>
        <meta name='description' content='Hello in the template' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col justify-center'>
        <h1 className='text-center'>Hi</h1>
        <Image src='/vercel.svg' width={100} height={100} alt='vercel' />
      </main>
    </div>
  );
};

export default Home;

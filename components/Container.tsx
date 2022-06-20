import Head from 'next/head';
import Footer from './Footer.bs';
import GA from './GA.bs';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'), {
  ssr: false
});

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <GA />
      <section className="flex flex-col flex-nowrap pt-24 w-full min-h-screen items-center justify-between bg-white dark:bg-zinc-900">
        <Header />
        <main className="flex flex-col flex-nowrap w-full max-w-screen-md items-center z-10 px-5">
          {children}
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Container;

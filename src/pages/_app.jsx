import { SessionProvider } from 'next-auth/react'
import ThemeRegistry from '@/components/ThemeRegistry'
import Head from 'next/head'
import { getServerSession } from 'next-auth';
export default  function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log({session})
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <SessionProvider session={session}>
      <ThemeRegistry>
   
        <Component {...pageProps} />
      </ThemeRegistry>
    </SessionProvider>
</>
   
  )
}

import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import Layout from '../components/Layout'
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {
  return (
       <>
       <ChakraProvider>
          <Layout>
            <NextNProgress color='gray'/>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>  
       </>
  )
}

export default MyApp
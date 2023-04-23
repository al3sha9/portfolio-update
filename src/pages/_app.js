import '@/styles/globals.css'
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


export default function App({ Component, pageProps }) {
  return(
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    <Component {...pageProps} />
    </>

  ) 
}

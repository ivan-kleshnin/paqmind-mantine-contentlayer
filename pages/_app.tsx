import type {AppProps} from "next/app"
import {Menu} from "components"

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return <div>
    <Menu/>
    <Component {...pageProps}/>
  </div>
}


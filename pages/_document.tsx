import {createGetInitialProps} from "@mantine/next"
import Document, {Head, Html, Main, NextScript} from "next/document"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return <>
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect"/>
          <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400;1,600&family=Source+Serif+Pro:ital@0;1&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    </>
  }
}

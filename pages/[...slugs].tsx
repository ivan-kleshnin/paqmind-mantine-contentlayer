import {Page, allPages} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps, GetStaticPaths} from "next"
import Head from "next/head"
import Link from "next/link"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Button} from "components"

// AnyPage
type AnyPageProps = {
  page: Page
}

export default function AnyPage({page} : AnyPageProps) : JSX.Element {
  const MDXContent = useMDXComponent(page.body.code)

  return <>
    <Head>
      <title>{page.title}</title>
    </Head>
    <article>
      <h1>{page.title}</h1>

      <div>
        <MDXContent components={{Button}}/>
      </div>
    </article>
  </>
}

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
  page: Page
}

type Params = ParsedUrlQuery & {
  slugs: string[]
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  // const page = allPages.find(p => p.url == "/about")
  // const paths = allPosts.map((post) => post.url)

  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<Payload, Params> = async ({params}) => {
  const url = "/" + (params?.slugs || []).join("/")
  const page = allPages.find(p => p.url == url)

  if (!page) {
    throw new Error("...")
  }

  return {
    props: {
      page,
    }
  }
}

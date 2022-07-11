import {Container} from "@mantine/core"
import {Prism} from "@mantine/prism"
import {Page, allPages} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps, GetStaticPaths} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Typography} from "components"

// AnyPage
type AnyPageProps = Payload // & some Next stuff

export default function AnyPage({page} : AnyPageProps) : JSX.Element {
  const MDXContent = useMDXComponent(page.body.code)

  return <>
    <Head>
      <title>{page.title}</title>
    </Head>
    <Container size={AnyPage.layoutSize} mt="2rem" mb="2.5rem">
      <article>
        <Typography>
          <h1>{page.title}</h1>
          <MDXContent components={{Prism}}/>
        </Typography>
      </article>
    </Container>
  </>
}

AnyPage.layoutSize = "sm" as const

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

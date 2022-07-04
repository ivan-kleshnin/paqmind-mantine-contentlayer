import {Post, allPosts, Page} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps, GetStaticPaths} from "next"
import Head from "next/head"
import Link from "next/link"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Button} from "components"

type PostPageProps = {
  post: Post
}

export default function PostPage({post} : PostPageProps) : JSX.Element {
  const MDXContent = useMDXComponent(post.body.code)

  return <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <article>
      <h1>{post.title}</h1>
      <time dateTime={post.createdAt}>
        {new Date(post.createdAt).toLocaleDateString()}
      </time>
      <div>
        <MDXContent components={{Button}}/>
      </div>
    </article>
  </>
}

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
  post: Post
}

type Params = ParsedUrlQuery & {
  slug: string
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
  const url = "/blog/" + (params?.slug || "")
  const post = allPosts.find(p => p.url == url)

  if (!post) {
    throw new Error("...")
  }

  return {
    props: {
      post,
    }
  }
}

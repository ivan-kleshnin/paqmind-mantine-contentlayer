import {Group, Text, Title} from "@mantine/core"
import {Prism} from "@mantine/prism"
import {Post, allPosts} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps, GetStaticPaths} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Link, Typography} from "components"

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
      <Title order={1}>{post.title}</Title>
      <Text color="dimmed" component="time" dateTime={post.createdAt}>
        Posted: {new Date(post.createdAt).toLocaleDateString()} by Ivan Kleshnin
      </Text>
      <Typography>
        <MDXContent components={{Group, Prism}}/>
        <hr/>
      </Typography>
      {post.tags && Boolean(post.tags.length) &&
        <Group mb={20}>
          {
            post.tags.map((tag, i) =>
              <Link key={i} href="#">
                <strong><code>#{tag.toLowerCase()}</code></strong>
              </Link>
            )
          }
        </Group>
      }
    </article>
  </>
}

PostPage.layoutSize = "sm" as const

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

import {Group, Stack, Title} from "@mantine/core"
import {Page, Post, allPages, allPosts} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import {HorizontalCard, Typography} from "components"
import * as U from "lib/utils"

// BlogPage
type BlogPageProps = {
  blog: Page
  posts: Post[]
}

export default function BlogPage({blog, posts}: BlogPageProps) : JSX.Element {
  const MDXContent = useMDXComponent(blog.body.code)

  return <>
    <Head>
      <title>{blog.title}</title>
    </Head>
    <main>
      <Typography>
        <h1>{blog.title}</h1>
        <MDXContent components={{Group}}/>
      </Typography>

      <Title order={2} mt={32} mb={24}>All Posts</Title>
      <Stack spacing={24}>
        {posts.map((post, i) => (
          <HorizontalCard
            key={i}
            title={post.title}
            intro={post.intro.html}
            postedAt={post.createdAt}
            tags={post.tags}
            url={post.url}
          />
        ))}
      </Stack>
    </main>
  </>
}

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
  blog: Page
  posts: Post[]
}

type Params = ParsedUrlQuery

export const getStaticProps: GetStaticProps<Payload, Params> = async () => {
  const url = "/blog"
  const blog = allPages.find(p => p.url == url)

  if (!blog) {
    throw new Error("...")
  }

  const posts = [...allPosts].sort(U.byCreatedAtDesc)

  return {
    props: {
      blog, posts
    }
  }
}

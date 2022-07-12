import {Box, Container, Title} from "@mantine/core"
import {Page, Post, allPages, allPosts} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Group, HorizontalCard, Stack, Typography} from "components"
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
      <title>{blog.seoTitle || blog.title}</title>
    </Head>
    <Box sx={{backgroundColor: "#eee"}} pt="2rem" pb="2.5rem">
      <Container size={BlogPage.layoutSize}>
        <main>
          <Title>{blog.title}</Title>
          <Typography>
            <MDXContent components={{Group}}/>
          </Typography>

          <Title order={2} mt="2rem" mb="1rem">All Posts</Title>
          <Stack spacing="1rem">
            {posts.map((post, i) =>
              <HorizontalCard
                key={i}
                title={post.title}
                intro={post.intro.html}
                postedAt={post.createdAt}
                tags={post.tags}
                url={post.url}
              />
            )}
          </Stack>
        </main>
      </Container>
    </Box>
  </>
}

BlogPage.layoutSize = "md" as const

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

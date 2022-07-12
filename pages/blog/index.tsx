import {Alert, Box, Container, Text, Title} from "@mantine/core"
import {Page, Post, allPages, allPosts} from "contentlayer/generated"
import {AlertCircle, FilterOff} from "tabler-icons-react"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import {useRouter} from "next/router"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import * as R from "rambda"
import {Group, HorizontalCard, Link, Stack, Tags, Typography} from "components"
import * as U from "lib/utils"

// BlogPage
type BlogPageProps = {
  blog: Page
  posts: Post[]
}

const allTags = R.sortBy(String, R.uniq(allPosts.flatMap(post => post.tags || [])))

export default function BlogPage({blog, posts}: BlogPageProps) : JSX.Element {
  const router = useRouter()
  const MDXContent = useMDXComponent(blog.body.code)

  const filterTag = router.query.tag as string | undefined
  const filteredPosts = filterTag
    ? posts.filter(post => (post.tags || []).map(t => t.toLowerCase()).includes(filterTag.toLowerCase()))
    : posts

  return <>
    <Head>
      <title>{blog.seoTitle || blog.title}</title>
    </Head>
    <Box sx={{backgroundColor: "#eee", height: "100%"}} pt="2rem" pb="2.5rem">
      <Container size={BlogPage.layoutSize}>
        <main>
          <Title>{blog.title}</Title>
          <Typography>
            <MDXContent components={{Group}}/>
          </Typography>

          <Title order={2} mt="2rem" mb="1rem">
            Posts {filteredPosts.length == posts.length ? "" : <Text component="span" size="sm">({filteredPosts.length} of {posts.length})</Text>}
          </Title>
          {allTags.length &&
            <Box mb="1.5rem">
              <Tags tags={allTags} selectedTag={router.query.tag as string | undefined}/>
            </Box>
          }
          <Stack spacing="1rem">
            {(!filterTag || filteredPosts.length)
              ? filteredPosts.map((post, i) =>
                  <HorizontalCard
                    key={i}
                    title={post.title}
                    intro={post.intro.html}
                    postedAt={post.createdAt}
                    tags={post.tags}
                    url={post.url}
                  />
                )
              : <Alert icon={<AlertCircle size="1rem"/>} title="INFO" color="blue">
                  No posts matching the tag. <Link href="/blog">Reset filters <FilterOff size="1rem"/></Link>
                </Alert>
            }
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

  const posts = R.sort(U.byCreatedAtDesc, allPosts)

  return {
    props: {
      blog,
      posts
    }
  }
}

import {Box, Container, Divider, SimpleGrid, Text, Title} from "@mantine/core"
import {Prism} from "@mantine/prism"
import {Post, allPosts} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps, GetStaticPaths} from "next"
import Head from "next/head"
import {useRouter} from "next/router"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Group, Tags, Typography} from "components"

type PostPageProps = {
  post: Post
}

export default function PostPage({post} : PostPageProps) : JSX.Element {
  const router = useRouter()
  const MDXContent = useMDXComponent(post.body.code)

  return <>
    <Head>
      <title>{post.seoTitle || post.title}</title>
    </Head>
    <Container size={PostPage.layoutSize} mt="2rem" mb="2.5rem">
      <Box sx={{display: "grid", gap: "2rem", gridTemplateColumns: "9fr 3fr"}}>
        <article>
          <Title order={1}>{post.title}</Title>
          <Text color="dimmed" component="time" dateTime={post.createdAt}>
            Posted: {new Date(post.createdAt).toLocaleDateString()} by Ivan Kleshnin
          </Text>
          <Typography>
            <MDXContent components={{Group, Prism, SimpleGrid}}/>
            <Divider my="1rem" variant="dashed"/>
          </Typography>
          <Tags tags={post.tags} selectedTag={router.query.tag as string | undefined}/>
        </article>
        <aside style={{backgroundColor: "#eee", padding: "0 1rem"}}>
          Time to read: 15 mins
        </aside>
      </Box>
    </Container>
  </>
}

PostPage.layoutSize = "md" as const

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

import {Box, Container, Text, Title} from "@mantine/core"
import {
  type Account, type Page, type Post, type Testimonial,
  allPages, allPosts, allTestimonials, allAccounts
} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import LazyLoad from "react-lazyload"
import {CommentCarousel, Group, HorizontalCard, Link, Stack, Typography} from "components"
import * as U from "lib/utils"

// HomePage
type HomePageProps = Payload // & some Next stuff

export default function HomePage({accounts, home, recentPosts, recentTestimonials}: HomePageProps) : JSX.Element {
  const MDXContent = useMDXComponent(home.body.code)

  return <>
    <Head>
      <title>{home.seoTitle || home.title}</title>
    </Head>
    <main>
      <Container size={HomePage.layoutSize} mt="2rem" mb="2.5rem">
        <Title>{home.title}</Title>
        <Typography>
          <MDXContent components={{Group}}/>
        </Typography>
      </Container>

      <RecentPosts accounts={accounts} recentPosts={recentPosts}/>
      <StudentsMap/>
      <RecentTestimonials accounts={accounts} recentTestimonials={recentTestimonials}/>
    </main>
  </>
}

HomePage.layoutSize = "md" as const

// RecentPosts
type RecentPostsProps = {
  accounts: Account[]
  recentPosts: Post[]
}

function RecentPosts({recentPosts}: RecentPostsProps): JSX.Element {
  return <>
    <Box className="grayPaddingBox" sx={{backgroundColor: "#eee"}} pt="2rem" pb="2.5rem">
      <Container size={HomePage.layoutSize}>
        <Title order={2} mb="1rem">Recent Posts</Title>
        <Stack spacing="1rem">
          {recentPosts.flatMap((post, i) =>
            <HorizontalCard
              key={i + "-2"}
              title={post.title}
              intro={post.intro.html}
              postedAt={post.createdAt}
              tags={post.tags}
              url={post.url}
            />
          )}
        </Stack>
        <Box component="p" mt="1.25rem">
          &#128073; Check more on the <Link href="/blog">Blog page</Link>.
        </Box>
      </Container>
    </Box>
  </>
}

// RecentTestimonials
type RecentTestimonialsProps = {
  accounts: Account[]
  recentTestimonials: Testimonial[]
}

function RecentTestimonials({accounts, recentTestimonials}: RecentTestimonialsProps): JSX.Element {
  const enrichedTestimonials = recentTestimonials.flatMap(testimonial => {
    const author = accounts.find(account => account.id == testimonial.fromAccountId)
    if (!author) return []
    return [{
      ...testimonial,
      body: testimonial.body.html,
      createdAt: testimonial.createdAt,
      author,
    }]
  })

  return <>
    <Box className="grayPaddingBox" sx={{backgroundColor: "#eee"}} pt="2rem" pb="2.5rem">
      <Container size={HomePage.layoutSize}>
        <Title order={2} mb="1rem">Recent Testimonials</Title>
        <CommentCarousel testimonials={enrichedTestimonials}/>
        <Box component="p" mt="1.25rem">
          &#128073; Check more on the <Link href="/testimonials">Testimonials page</Link>.
        </Box>
      </Container>
    </Box>
  </>
}

// StudentsMap
function StudentsMap(): JSX.Element {
  return <>
    <Box className="whitePaddingBox" pt="2rem" pb="2.5rem">
      <Container size={HomePage.layoutSize}>
        <Title mb="1rem">The map of our Students</Title>
        <LazyLoad>
          <img src="/index/map-of-students.webp" width="100%"/>
        </LazyLoad>
        <Text component="p" mt="1rem">
          The map will be updated to English soon &#128521;
        </Text>
      </Container>
    </Box>
  </>
}

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
  accounts: Account[]
  home: Page
  recentPosts: Post[]
  recentTestimonials: Testimonial[]
}

type Params = ParsedUrlQuery

export const getStaticProps: GetStaticProps<Payload, Params> = async () => {
  const url = "/"
  const home = allPages.find(p => p.url == url)

  if (!home) {
    throw new Error("...")
  }

  const accounts = allAccounts
  const recentPosts = [...allPosts].sort(U.byCreatedAtDesc).slice(0, 3)
  const recentTestimonials = [...allTestimonials].sort(U.byCreatedAtDesc).slice(0, 3)

  return {
    props: {
      accounts,
      home,
      recentPosts,
      recentTestimonials,
    }
  }
}

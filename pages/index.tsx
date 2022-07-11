import {Box, Container, Text, Title} from "@mantine/core"
import {Page, Post, Testimonial, allPages, allPosts, allTestimonials} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import LazyLoad from "react-lazyload"
import {Carousel, Group, HorizontalCard, Link, Stack, Typography} from "components"
import * as U from "lib/utils"

// HomePage
type HomePageProps = Payload // & some Next stuff

export default function HomePage({home, recentPosts/*, recentTestimonials*/}: HomePageProps) : JSX.Element {
  const MDXContent = useMDXComponent(home.body.code)

  return <>
    <Head>
      <title>{home.title}</title>
    </Head>
    <Container size={HomePage.layoutSize} mt="2rem" mb="2.5rem">
      <Title>{home.title}</Title>
      <Typography>
        <MDXContent components={{Group}}/>
      </Typography>
    </Container>

    <Box sx={{backgroundColor: "#eee"}} pt="2rem" pb="2.5rem">
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
        <Box component="p" mt="1.5rem">
          &#128073; Read more posts on our <Link href="#">Blog</Link> page.
        </Box>
      </Container>
    </Box>

    <Box pt="2rem" pb="2.5rem">
      <Container size={HomePage.layoutSize}>
        <Title mb="1rem">Zzz</Title>
        <LazyLoad>
          <img src="/index/map-of-students.webp" width="100%"/>
        </LazyLoad>
        <Text component="p" mt="1rem">
          The map will be update to English soon ;)
        </Text>
      </Container>
    </Box>

    <Box sx={{backgroundColor: "#eee"}} pt="2rem" pb="2.5rem">
      <Container size={HomePage.layoutSize}>
        <Title order={2} mb="1rem">Recent Testimonials</Title>
        <Carousel
          items={[
            {
              body: `<p>Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.</p>`,
              createdAt: new Date().toLocaleDateString(),
              author: {
                name: "John Doe",
                image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
              },
            },
            {
              body: `<p>Replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.</p>`,
              createdAt: new Date().toLocaleDateString(),
              author: {
                name: "Jane Doe",
                image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
              },
            }
          ]}
        />
      </Container>
    </Box>
  </>
}

HomePage.layoutSize = "md" as const

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
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

  const recentPosts = [...allPosts].sort(U.byCreatedAtDesc).slice(0, 3)
  const recentTestimonials = [...allTestimonials].sort(U.byCreatedAtDesc).slice(0, 3)

  return {
    props: {
      home, recentPosts, recentTestimonials,
    }
  }
}

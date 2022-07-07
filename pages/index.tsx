import {Box, Group, Stack, Title} from "@mantine/core"
import {Page, Post, Testimonial, allPages, allPosts, allTestimonials} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Carousel, HorizontalCard, Link, Typography} from "components"
import * as U from "lib/utils"

// HomePage
type HomePageProps = Payload // & some Next stuff

export default function HomePage({home, recentPosts/*, recentTestimonials*/}: HomePageProps) : JSX.Element {
  const MDXContent = useMDXComponent(home.body.code)

  return <>
    <Head>
      <title>{home.title}</title>
    </Head>
    <article>
      <Typography>
        <h1>{home.title}</h1>
        <MDXContent components={{Group}}/>
      </Typography>

      <Title order={2} mt={32} mb={24}>Recent Posts</Title>
      <Stack spacing={24}>
        {recentPosts.map((post, i) => (
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
      <Box component="p" mt={20}>
        &#128073; Read more posts on our <Link href="#">Blog</Link> page.
      </Box>

      <Title order={2} mt={32} mb={24}>Recent Testimonials</Title>

      {/*<h2>Recent Testimonials</h2>
      {recentTestimonials.map((testimonial, i) => (
        <TestimonialCard key={i} testimonial={testimonial}/>
      ))}*/}

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
    </article>
  </>
}

// TestimonialCard
// type TestimonialCardProps = {
//   testimonial: Testimonial
// }
//
// function TestimonialCard({testimonial} : TestimonialCardProps) : JSX.Element {
//   return <>
//     <div>
//       <div>
//         <time dateTime={testimonial.createdAt}>
//           {new Date(testimonial.createdAt).toLocaleDateString()}
//         </time>
//       </div>
//       <div>
//         <div dangerouslySetInnerHTML={{__html: testimonial.body.html}}/>
//       </div>
//     </div>
//   </>
// }

HomePage.layoutSize = "lg" as const

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

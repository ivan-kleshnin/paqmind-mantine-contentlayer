import {Box, Container, Title} from "@mantine/core"
import {Page, Testimonial, allPages, allTestimonials} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import {CommentCard, Group, Stack, Typography} from "components"
import BlogPage from "pages/blog"
import * as U from "lib/utils"

// TestimonialsPage
type TestimonialsPageProps = Payload

export default function TestimonialsPage({page, testimonials}: TestimonialsPageProps) : JSX.Element {
  const MDXContent = useMDXComponent(page.body.code)

  return <>
    <Head>
      <title>{page.title}</title>
    </Head>
    <Box sx={{backgroundColor: "#eee"}} pt="2rem" pb="2.5rem">
      <Container size={BlogPage.layoutSize}>
        <main>
          <Title>{page.title}</Title>
          <Typography>
            <MDXContent components={{Group}}/>
          </Typography>

          <Title order={2} mt="2rem" mb=".5rem">Testimonials</Title>
          <Stack spacing="1rem">
            {testimonials.map((testimonial, i) => (
              <CommentCard
                key={i}
                postedAt="today"
                body={testimonial.body.html}
                author={{name: "JohnDoe", image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"}}
              />
            ))}
          </Stack>
        </main>
      </Container>
    </Box>
  </>
}

TestimonialsPage.layoutSize = "md" as const

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
  page: Page
  testimonials: Testimonial[]
}

type Params = ParsedUrlQuery

export const getStaticProps: GetStaticProps<Payload, Params> = async () => {
  const url = "/testimonials"
  const page = allPages.find(p => p.url == url)

  if (!page) {
    throw new Error("...")
  }

  const testimonials = [...allTestimonials].sort(U.byCreatedAtDesc)

  return {
    props: {
      page, testimonials,
    }
  }
}

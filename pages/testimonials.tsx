import {Box, Container, Title} from "@mantine/core"
import {
  type Account, type Page, type Testimonial,
  allPages, allTestimonials, allAccounts
} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import {CommentCard, Group, Stack, Typography} from "components"
import BlogPage from "pages/blog"
import * as U from "lib/utils"

// TestimonialsPage
type TestimonialsPageProps = Payload

export default function TestimonialsPage({accounts, page, testimonials}: TestimonialsPageProps): JSX.Element {
  const MDXContent = useMDXComponent(page.body.code)

  return <>
    <Head>
      <title>{page.seoTitle || page.title}</title>
    </Head>
    <main>
      <Container size={BlogPage.layoutSize} mt="2rem" mb="2.5rem">
        <Title>{page.title}</Title>
        <Typography>
          <MDXContent components={{Group}}/>
        </Typography>
      </Container>
      <TestimonialSection accounts={accounts} testimonials={testimonials}/>
    </main>
  </>
}

TestimonialsPage.layoutSize = "md" as const

// TestimonialSection
type TestimonialSectionProps = {
  accounts: Account[]
  testimonials: Testimonial[]
}

function TestimonialSection({accounts, testimonials}: TestimonialSectionProps): JSX.Element {
  const enrichedTestimonials = testimonials.flatMap(testimonial => {
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
    <Box sx={{backgroundColor: "#eee"}} pt="2rem" pb="2.5rem">
      <Container size={BlogPage.layoutSize}>
        <Title order={2} mb="1rem">Mentors' Testimonials</Title>
        <Stack spacing="1rem">
          {enrichedTestimonials.map((testimonial, i) =>
            <CommentCard key={i} {...testimonial}/>
          )}
        </Stack>
      </Container>
    </Box>
  </>
}

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
  accounts: Account[]
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

  const accounts = allAccounts
  const testimonials = [...allTestimonials].sort(U.byCreatedAtDesc)

  return {
    props: {
      accounts,
      page,
      testimonials,
    }
  }
}

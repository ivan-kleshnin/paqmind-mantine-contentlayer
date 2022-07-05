import {Page, Testimonial, allPages, allTestimonials} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Button} from "components"

type TestimonialsPageProps = Payload

export default function TestimonialsPage({page, testimonials}: TestimonialsPageProps) : JSX.Element {
  const MDXContent = useMDXComponent(page.body.code)

  return <>
    <Head>
      <title>{page.title}</title>
    </Head>
    <main>
      <h1>{page.title}</h1>

      <div>
        <MDXContent components={{Button}}/>
      </div>

      <h2>Testimonials</h2>
      {testimonials.map((testimonial, i) => (
        <TestimonialCard key={i} testimonial={testimonial}/>
      ))}
    </main>
  </>
}

// TestimonialCard
type TestimonialCardProps = {
  testimonial: Testimonial
}

function TestimonialCard({testimonial} : TestimonialCardProps) : JSX.Element {
  return <>
    <div>
      <div>
        <time dateTime={testimonial.createdAt}>
          {new Date(testimonial.createdAt).toLocaleDateString()}
        </time>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{__html: testimonial.body.html}}/>
      </div>
    </div>
  </>
}

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
  page: Page
  testimonials: Testimonial[]
}

type Params = ParsedUrlQuery

export const getStaticProps: GetStaticProps<Payload, Params> = async () => {
  const url = "/"
  const page = allPages.find(p => p.url == url)

  if (!page) {
    throw new Error("...")
  }

  const testimonials = [...allTestimonials]

  return {
    props: {
      page, testimonials,
    }
  }
}

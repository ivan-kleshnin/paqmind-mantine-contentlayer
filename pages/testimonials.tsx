import {Page, Post, Testimonial, allPages, allPosts, allTestimonials} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import Link from "next/link"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Button} from "components"

type TestimonialsPageProps = Payload & {}

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

// PostCard
type PostCardProps = {
  post: Post
}

function PostCard({post} : PostCardProps) : JSX.Element {
  return <>
    <div>
      <h2>
        <Link href={post.url}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <div>
        <time dateTime={post.createdAt}>
          {new Date(post.createdAt).toLocaleDateString()}
        </time>
      </div>
    </div>
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

export const getStaticProps: GetStaticProps<Payload, Params> = async ({params}) => {
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

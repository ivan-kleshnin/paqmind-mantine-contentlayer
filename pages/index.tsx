import {Page, Post, Testimonial, allPages, allPosts, allTestimonials} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import Link from "next/link"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Button} from "components"
import * as U from "lib/utils"

// HomePage
type HomePageProps = Payload

export default function HomePage({home, recentPosts, recentTestimonials}: HomePageProps) : JSX.Element {
  const MDXContent = useMDXComponent(home.body.code)

  return <>
    <Head>
      <title>{home.title}</title>
    </Head>
    <main>
      <h1>{home.title}</h1>

      <div>
        <MDXContent components={{Button}}/>
      </div>

      <h2>Recent Posts+</h2>
      {recentPosts.map((post, i) => (
        <PostCard key={i} post={post}/>
      ))}

      <h2>Recent Testimonials</h2>
      {recentTestimonials.map((testimonial, i) => (
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

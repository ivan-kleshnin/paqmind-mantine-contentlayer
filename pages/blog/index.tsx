import {Page, Post, allPages, allPosts} from "contentlayer/generated"
import {ParsedUrlQuery} from "querystring"
import {GetStaticProps} from "next"
import Head from "next/head"
import Link from "next/link"
import {useMDXComponent} from "next-contentlayer/hooks"
import {Button} from "components"
import * as U from "lib/utils"

type BlogPageProps = {
  blog: Page
  posts: Post[]
}

export default function BlogPage({blog, posts}: BlogPageProps) : JSX.Element {
  const MDXContent = useMDXComponent(blog.body.code)

  return <>
    <Head>
      <title>{blog.title}</title>
    </Head>
    <main>
      <h1>{blog.title}</h1>

      <div>
        <MDXContent components={{Button}}/>
      </div>

      <h2>Posts</h2>
      {posts.map((post, i) => (
        <PostCard key={i} post={post}/>
      ))}
    </main>
  </>
}

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

// SSR /////////////////////////////////////////////////////////////////////////////////////////////
type Payload = {
  blog: Page
  posts: Post[]
}

type Params = ParsedUrlQuery

export const getStaticProps: GetStaticProps<Payload, Params> = async ({params}) => {
  const url = "/blog"
  const blog = allPages.find(p => p.url == url)

  if (!blog) {
    throw new Error("...")
  }

  const posts = [...allPosts].sort(U.byCreatedAtDesc)

  return {
    props: {
      blog, posts
    }
  }
}


import type {AppProps} from "next/app"
import Link from "next/link"
import * as React from "react"

export function Menu(): JSX.Element {
  return <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    {" "}
    <Link href="/about">
      <a>About</a>
    </Link>
    {" "}
    <Link href="/testimonials">
      <a>Testimonials</a>
    </Link>
  </div>
}

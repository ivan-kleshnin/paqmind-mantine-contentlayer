import {Code} from "@mantine/core"
import * as React from "react"
import {Group, Link} from "components"

export type TagsProps = {
  tags?: string[]
  selectedTag?: string
}

export function Tags({tags, selectedTag}: TagsProps): JSX.Element {
  if (!tags || !tags.length) {
    return <></>
  }

  return <Group>
    {
      tags.map((tag, i) =>
        <strong key={i}>
          <Code style={{backgroundColor: "inherit", padding: 0}}>
            {(selectedTag && tag.toLowerCase() == selectedTag.toLowerCase())
              ? <Link href="/blog" style={{color: "black", fontFamily: "inherit"}}>#{tag.toLowerCase()}</Link>
              : <Link href={`/blog?tag=${tag.toLowerCase()}`}>#{tag.toLowerCase()}</Link>
            }
          </Code>
        </strong>
      )
    }
  </Group>
}

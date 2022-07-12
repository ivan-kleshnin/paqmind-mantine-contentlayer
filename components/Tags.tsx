import {Code} from "@mantine/core"
import * as React from "react"
import {Group, Link} from "components"

export type TagsProps = {
  tags?: string[]
}

export function Tags({tags}: TagsProps): JSX.Element {
  if (!tags || !tags.length) {
    return <></>
  }

  return <Group>
    {
      tags.map((tag, i) =>
        <Link key={i} href="#">
          <strong>
            <Code style={{background: "none", padding: 0}}>
              #{tag.toLowerCase()}
            </Code>
          </strong>
        </Link>
      )
    }
  </Group>
}

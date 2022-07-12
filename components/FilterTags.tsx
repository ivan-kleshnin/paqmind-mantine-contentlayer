import {Code} from "@mantine/core"
import * as React from "react"
import {Group, Link} from "components"

export type FilterTagsProps = {
  tags?: string[]
}

export function FilterTags({tags}: FilterTagsProps): JSX.Element {
  if (!tags || !tags.length) {
    return <></>
  }

  return <Group>
    {/*<span>Filter by:</span>*/}
    {
      tags.map((tag, i) =>
        <Link key={i} href="#">
          <strong><Code>#{tag.toLowerCase()}</Code></strong>
        </Link>
      )
    }
  </Group>
}

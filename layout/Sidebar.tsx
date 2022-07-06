import {Container, Divider, Navbar, Stack, useMantineTheme} from "@mantine/core"
import * as React from "react"
import {Link} from "components"

export type NavbarProps = {
  opened: boolean
  size: "sm" | "md" | "lg"
}

export function Sidebar({opened, size}: NavbarProps) : JSX.Element {
  const breakpoint = (
    size == "lg" ? "md" :
    size == "md" ? "lg" :
    size == "sm" ? "xl" : "lg"
  )

  const theme = useMantineTheme()

  return <>
    <Navbar
      mt="5rem"
      sx={{
        display: opened ? undefined : "none",
        [theme.fn.largerThan(breakpoint)]: {
          display: "none",
        },
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      <Container size={size} sx={{width: "100%"}}>
        <Stack mt="1rem">
          <Link href="/about" asText>About</Link>
          <Divider variant="dashed"/>
          <span>Blog</span>
          <Divider variant="dashed"/>
          <span>Links</span>
        </Stack>
      </Container>
    </Navbar>
  </>
}

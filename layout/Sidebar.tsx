import {Container, Divider, Navbar, useMantineTheme} from "@mantine/core"
// import {useWindowScroll} from "@mantine/hooks"
import * as React from "react"
import {Link, Stack} from "components"

export type NavbarProps = {
  opened: boolean
  size: "sm" | "md"
}

export function Sidebar({opened, size}: NavbarProps) : JSX.Element {
  // Hide Sidebar at the point where Burger menu disappears
  const breakpoint = (
    size == "md" ? "lg" :
    size == "sm" ? "xl" : "lg"
  )

  const theme = useMantineTheme()
  const [scroll] = [{y: 0}] // useWindowScroll() -- SSR incompatible
  const headerHeight = (scroll.y > 16 * 8) ? "3.5rem" : "5rem"

  return <>
    <Navbar
      mt={headerHeight}
      sx={{
        display: opened ? undefined : "none",
        [theme.fn.largerThan(breakpoint)]: {
          display: "none",
        },
        position: "fixed",
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

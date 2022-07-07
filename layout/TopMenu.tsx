import {Container, Group, Header, MediaQuery, Title} from "@mantine/core"
import * as React from "react"
import {Link} from "components"
import {BurgerMenu} from "layout/BurgerMenu"

// TopMenu
export type TopMenuProps = {
  opened: boolean
  toggle: () => void
  size: "sm" | "md" | "lg"
}

export function TopMenu({opened, toggle, size}: TopMenuProps): JSX.Element {
  const breakpoint = (
    size == "lg" ? "md" :
    size == "md" ? "lg" :
    size == "sm" ? "xl" : "lg"
  )

  return <>
    <Header fixed height="5rem">
      <Container size={size} sx={{height: "100%"}}>
        <Group position="apart" sx={{height: "100%"}}>
          <Group spacing={0} position="left" sx={{height: "100%"}}>
            <Title mr="0.5rem" order={2}><Link href="/" asText>Q</Link></Title>
            <Title mr="3rem" order={4}><Link href="/" asText>paqmind</Link></Title>
            <MediaQuery smallerThan={breakpoint} styles={{display: "none"}}>
              <Group spacing={32}>
                <Link href="/about" asText>
                  About
                </Link>
                {" "}
                <Link href="/testimonials" asText>
                  Testimonials
                </Link>
                <Link href="https://paqmind.com/blog" asText>
                  Blog
                </Link>
              </Group>
            </MediaQuery>
          </Group>
          <Group spacing={8} sx={{height: "100%"}}>
            <span>Sign In</span>
            <span>/</span>
            <span>Sign Up</span>
            <MediaQuery largerThan={breakpoint} styles={{display: "none"}}>
              <BurgerMenu opened={opened} onClick={toggle}/>
            </MediaQuery>
          </Group>
        </Group>
      </Container>
    </Header>
  </>
}

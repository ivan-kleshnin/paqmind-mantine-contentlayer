import {Container, Group, Header, MediaQuery, Title} from "@mantine/core"
import * as React from "react"
import {Link} from "components"
import {BurgerMenu} from "layout/BurgerMenu"

// TopMenu
export type TopMenuProps = {
  opened: boolean
  toggle: () => void
}

export function TopMenu({opened, toggle}: TopMenuProps): JSX.Element {
  return <>
    <Header fixed height="5rem">
      <Container size="lg" sx={{height: "100%"}}>
        <Group position="apart" sx={{height: "100%"}}>
          <Group spacing={0} position="left" sx={{height: "100%"}}>
            <Title mr="0.5rem" order={2}>Q</Title>
            <Title mr="3rem" order={4}>paqmind</Title>
            <MediaQuery smallerThan="sm" styles={{display: "none"}}>
              <Group spacing={32}>
                <Link href="/" asText>
                  Home
                </Link>
                {" "}
                <Link href="/about" asText>
                  About
                </Link>
                {" "}
                <Link href="/testimonials" asText>
                  Testimonials
                </Link>
                <Link href="https://paqmind.com/blog"  asText>Blog</Link>
                <Link href="/text" asText>Text Sandbox</Link>
                <Link href="/code" asText>Code Sandbox</Link>
              </Group>
            </MediaQuery>
          </Group>
          <Group sx={{height: "100%"}}>
            <span>Sign In</span>
            <span>/</span>
            <span>Sign Up</span>
            <MediaQuery largerThan="sm" styles={{display: "none"}}>
              <BurgerMenu opened={opened} onClick={toggle}/>
            </MediaQuery>
          </Group>
        </Group>
      </Container>
    </Header>
  </>
}

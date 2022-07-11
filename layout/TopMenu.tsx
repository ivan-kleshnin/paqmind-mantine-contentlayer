import {Container, Header, MediaQuery, Text, Title} from "@mantine/core"
// import {useWindowScroll} from "@mantine/hooks"
import * as React from "react"
import {Link, Group} from "components"
import {BurgerMenu} from "layout/BurgerMenu"

// TopMenu
export type TopMenuProps = {
  opened: boolean
  toggle: () => void
}

export function TopMenu({opened, toggle}: TopMenuProps): JSX.Element {
  const [scroll] = [{y: 0}]  // useWindowScroll() -- SSR incompatible
  const logoOrder = (scroll.y > 16 * 8) ? 3 : 2
  const itemSize = (scroll.y > 16 * 8) ? "md" : "lg"
  const headerHeight = (scroll.y > 16 * 8) ? "3.5rem" : "5rem"

  return <>
    <Header fixed height={headerHeight}>
      <Container sx={{height: "100%"}}>
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
          <Group spacing=".5rem" sx={{height: "100%"}}>
            <Text size={itemSize}>
              Sign In / Sign Up
            </Text>
            <MediaQuery largerThan="sm" styles={{display: "none"}}>
              <BurgerMenu opened={opened} onClick={toggle}/>
            </MediaQuery>
          </Group>
        </Group>
      </Container>
    </Header>
  </>
}

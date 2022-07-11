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
            <Link href="/" asText>
              <Title mr="3rem" order={logoOrder}>PAQMIND</Title>
            </Link>
            <MediaQuery smallerThan="sm" styles={{display: "none"}}>
              <Group spacing="2rem">
                <Link href="/about" asText>
                  <Text size={itemSize}>About</Text>
                </Link>
                <Link href="/testimonials" asText>
                  <Text size={itemSize}>Testimonials</Text>
                </Link>
                <Link href="/blog" asText>
                  <Text size={itemSize}>Blog</Text>
                </Link>
              </Group>
            </MediaQuery>
          </Group>
          <Group spacing=".5rem" sx={{height: "100%"}}>
            <Link href="#" asText>
              <Text size={itemSize} onClick={() => alert("This functionality is temporarily unavailable!")}>
                Sign In / Sign Up
              </Text>
            </Link>
            <MediaQuery largerThan="sm" styles={{display: "none"}}>
              <BurgerMenu opened={opened} onClick={toggle}/>
            </MediaQuery>
          </Group>
        </Group>
      </Container>
    </Header>
  </>
}

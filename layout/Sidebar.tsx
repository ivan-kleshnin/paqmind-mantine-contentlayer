import {Container, Divider, Navbar, Stack, useMantineTheme} from "@mantine/core"
import * as React from "react"

export type NavbarProps = {
  opened?: boolean
}

export function Sidebar({opened}: NavbarProps) : JSX.Element {
  const theme = useMantineTheme()

  return <>
    <Navbar
      mt="5rem"
      sx={{
        display: opened ? undefined : "none",
        [theme.fn.largerThan("sm")]: {
          display: "none",
        },
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      <Container size="lg" sx={{width: "100%"}}>
        <Stack mt="1rem">
          <span>Home</span>
          <Divider variant="dashed"/>
          <span>Features</span>
          <Divider variant="dashed"/>
          <span>Pricing</span>
        </Stack>
      </Container>
    </Navbar>
  </>
}

import {Box, Container, Footer} from "@mantine/core"
import * as React from "react"

export type AppFooterProps = {
  size: "sm" | "md" | "lg"
}

export function AppFooter({size}: AppFooterProps): JSX.Element {
  return <>
    <Footer height="10rem">
      <Container size={size}>
        <Box mt="1rem">
          &copy; Paqmind Team, 2022
        </Box>
      </Container>
    </Footer>
  </>
}

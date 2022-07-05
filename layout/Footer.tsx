import {Box, Container, Footer} from "@mantine/core"
import * as React from "react"

export function AppFooter() {
  return <>
    <Footer height="10rem">
      <Container size="lg">
        <Box mt="1rem">
          &copy; Paqmind Team, 2022
        </Box>
      </Container>
    </Footer>
  </>
}

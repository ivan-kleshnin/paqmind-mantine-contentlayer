import {Box, Container, Footer, Grid, Title} from "@mantine/core"
import * as React from "react"
import {BrandYoutube, BrandTelegram, BrandLinkedin} from "tabler-icons-react"
import {Link} from "components"

// AppFooter
// export type AppFooterProps = {
//   size: "sm" | "md"
// }

export function AppFooter(/*{size}: AppFooterProps*/): JSX.Element {
  return <>
    <Footer height="auto" py="2rem">
      <Container>
       <Grid justify="space-between">
          <Grid.Col span={4}>
            <Title order={4}>
              &copy; Paqmind Team, 2022
            </Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              {/*<li>Terms of use</li>*/}
              {/*<li>Privacy policy</li>*/}
              {/*<li>Offer</li>*/}
              {/*<li>Thank you</li>*/}
            </Box>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={4}>LEARNING</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>WIP</li>
              {/*<li>Mentors</li>*/}
              {/*<li>Tutorials</li>*/}
              <li>Useful Links</li>
            </Box>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={4}>PROJECT</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li><Link href="/about" asText>About</Link></li>
              <li><Link href="/blog" asText>Blog</Link></li>
              <li>Testimonials</li>
              {/*<li>Feedback</li>*/}
            </Box>
          </Grid.Col>
         <Grid.Col span={2}>
            <Title order={4} sx={{textAlign: "end"}}>COMMUNITY</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li style={{display: "flex", justifyContent: "right"}}><BrandYoutube style={{display: "block"}}/></li>
              {/*<li style={{textAlign: "end"}}><BrandPatreon style={{display: "block"}}/></li>*/}
              <li style={{display: "flex", justifyContent: "right"}}><BrandTelegram style={{display: "block"}}/></li>
              <li style={{display: "flex", justifyContent: "right"}}><BrandLinkedin style={{display: "block"}}/></li>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Footer>
  </>
}


import {Box, Container, Footer, Grid, Text, Title} from "@mantine/core"
import * as React from "react"
import {BrandYoutube, BrandPatreon, BrandTelegram, BrandLinkedin} from "tabler-icons-react"
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
            <Text weight={600} sx={{lineHeight: (1.45 * 18) + "px"}}>
              &copy; Paqmind Team, 2022
            </Text>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Offer</li>
              <li>Thank you</li>
            </Box>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={4}>LEARNING</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Courses</li>
              <li>Mentors</li>
              <li>Tutorials (en)</li>
              <li>Useful Links (en)</li>
            </Box>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={4}>PROJECT</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li><Link href="/about" asText>About</Link></li>
              <li><Link href="/blog" asText>Blog</Link></li>
              <li>Testimonials</li>
              <li>Feedback</li>
            </Box>
          </Grid.Col>
         <Grid.Col span={2}>
            <Title order={4} sx={{textAlign: "end"}}>COMMUNITY</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li style={{textAlign: "end"}}><BrandYoutube/></li>
              <li style={{textAlign: "end"}}><BrandPatreon/></li>
              <li style={{textAlign: "end"}}><BrandTelegram/></li>
              <li style={{textAlign: "end"}}><BrandLinkedin/></li>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Footer>
  </>
}

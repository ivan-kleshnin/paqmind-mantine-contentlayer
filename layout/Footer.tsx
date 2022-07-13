import {Box, Container, Footer, Title} from "@mantine/core"
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
       <Box sx={{
         display: "grid",
         gap: "2rem",
         gridTemplateColumns: "1fr",
         "@media (min-width: 600px)": {
           gridTemplateColumns: "6fr 6fr",
         },
         "@media (min-width: 800px)": {
           gridTemplateColumns: "4fr 3fr 3fr 2fr",
         },
       }}
       >
          <div>
            <Title order={4}>
              &copy; Paqmind Team, 2022
            </Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li><Link asText href="/terms-of-use">Terms of use</Link></li>
              {/*<li>Privacy policy</li>*/}
              {/*<li>Offer</li>*/}
              {/*<li>Thank you</li>*/}
            </Box>
          </div>
          <div>
            <Title order={4}>LEARNING</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>WIP</li>
              {/*<li>Mentors</li>*/}
              {/*<li>Tutorials</li>*/}
              <li><Link asText href="/links">Useful Links</Link></li>
            </Box>
          </div>
          <div>
            <Title order={4}>PROJECT</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li><Link href="/about" asText>About</Link></li>
              <li><Link href="/blog" asText>Blog</Link></li>
              <li>Testimonials</li>
              {/*<li>Feedback</li>*/}
            </Box>
          </div>
          <div>
            <Title order={4}>COMMUNITY</Title>
            <Box component="ul" mt="1.25rem" sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li style={{display: "flex"}}><BrandYoutube style={{display: "block"}}/></li>
              {/*<li style={{textAlign: "end"}}><BrandPatreon style={{display: "block"}}/></li>*/}
              <li style={{display: "flex"}}><BrandTelegram style={{display: "block"}}/></li>
              <li style={{display: "flex"}}><BrandLinkedin style={{display: "block"}}/></li>
            </Box>
          </div>
        </Box>
      </Container>
    </Footer>
  </>
}


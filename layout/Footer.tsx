import {Box, Container, /*Divider,*/ Footer, /*Grid, SimpleGrid,*/ Text, Title} from "@mantine/core"
import * as React from "react"

export type AppFooterProps = {
  size: "sm" | "md" | "lg"
}

export function AppFooter({size}: AppFooterProps): JSX.Element {
  return <>
    <Footer height="auto" py={32}>
      <Container size={size}>
       {/*<Text color="red">Simple Grid (if all columns are equal)</Text>
       <SimpleGrid
          spacing={32}
          breakpoints={[
            {minWidth: "sm", cols: 2},
            {minWidth: "md", cols: 3},
            {minWidth: "lg", cols: 4},
          ]}
        >
          <div>
            <Text weight={700} sx={{lineHeight: (1.4 * 22) + "px"}}>&copy; Paqmind Team, 2022</Text>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Offer</li>
              <li>Thank you</li>
            </Box>
          </div>
          <div>
            <Title order={3}>LEARNING</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Courses</li>
              <li>Mentors</li>
              <li>Tutorials (en)</li>
              <li>Useful Links (en)</li>
            </Box>
          </div>
          <div>
            <Title order={3}>COMMUNITY</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>YouTube</li>
              <li>Patreon</li>
              <li>Telegram</li>
              <li>LinkedIn</li>
            </Box>
          </div>
          <div>
            <Title order={3}>PROJECT</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>About</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Feedback</li>
            </Box>
          </div>
        </SimpleGrid>

        <Divider my={20} variant="dashed"/>

        <Text color="red">Grid (column control)</Text>
        <Grid
          gutter={32}
        >
          <Grid.Col sm={6} md={4} lg={3}>
            <Text weight={700} sx={{lineHeight: (1.4 * 22) + "px"}}>&copy; Paqmind Team, 2022</Text>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Offer</li>
              <li>Thank you</li>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <Title order={3}>LEARNING</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Courses</li>
              <li>Mentors</li>
              <li>Tutorials (en)</li>
              <li>Useful Links (en)</li>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <Title order={3}>COMMUNITY</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>YouTube</li>
              <li>Patreon</li>
              <li>Telegram</li>
              <li>LinkedIn</li>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <Title order={3}>PROJECT</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>About</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Feedback</li>
            </Box>
          </Grid.Col>
        </Grid>

        <Divider my={20} variant="dashed"/>

        <Text color="red">Grid with justify (column control, justify requires some space to remain)</Text>
        <Grid
          gutter={32}
          justify="space-between"
        >
          <Grid.Col sm={6} md={3} lg={3}>
            <Text weight={700} sx={{lineHeight: (1.4 * 22) + "px"}}>&copy; Paqmind Team, 2022</Text>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Offer</li>
              <li>Thank you</li>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6} md={3} lg={2}>
            <Title order={3}>LEARNING</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Courses</li>
              <li>Mentors</li>
              <li>Tutorials (en)</li>
              <li>Useful Links (en)</li>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6} md={3} lg={2}>
            <Title order={3}>COMMUNITY</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>YouTube</li>
              <li>Patreon</li>
              <li>Telegram</li>
              <li>LinkedIn</li>
            </Box>
          </Grid.Col>
          <Grid.Col sm={6} md={3} lg={2}>
            <Title order={3}>PROJECT</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>About</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Feedback</li>
            </Box>
          </Grid.Col>
        </Grid>

        <Divider my={20} variant="dashed"/>*/}

        {/*  sx={{*/}
        {/*    margin: 0,*/}
        {/*    columnGap: 32,*/}
        {/*    rowGap: 32 - 4,*/}
        {/*    "& div": {padding: 0, flexBasis: "auto"},*/}
        {/*  }}*/}

        {/*<Text color="red">Grid with justify and hacked items (almost there)</Text>
        <Grid
          gutter={32}
          justify="space-between"
          sx={{
            "& div": {flexBasis: "auto"},
          }}
        >
          <Grid.Col>
            <Text weight={700} sx={{lineHeight: (1.4 * 22) + "px"}}>&copy; Paqmind Team, 2022</Text>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Offer</li>
              <li>Thank you</li>
            </Box>
          </Grid.Col>
          <Grid.Col>
            <Title order={3}>LEARNING</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Courses</li>
              <li>Mentors</li>
              <li>Tutorials (en)</li>
              <li>Useful Links (en)</li>
            </Box>
          </Grid.Col>
          <Grid.Col>
            <Title order={3}>COMMUNITY</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>YouTube</li>
              <li>Patreon</li>
              <li>Telegram</li>
              <li>LinkedIn</li>
            </Box>
          </Grid.Col>
          <Grid.Col>
            <Title order={3}>PROJECT</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>About</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Feedback</li>
            </Box>
          </Grid.Col>
        </Grid>

        <Divider my={20} variant="dashed"/>*/}

        {/*<Text color="red">Custom Flex (bias to fill the row, container agnostic)</Text>*/}
        <Box sx={{display: "flex", columnGap: 32, rowGap: 32 - 4, justifyContent: "space-between", flexWrap: "wrap"}}>
          <div>
            <Text weight={700} sx={{lineHeight: (1.45 * 18) + "px"}}>&copy; Paqmind Team, 2022</Text>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Offer</li>
              <li>Thank you</li>
            </Box>
          </div>
          <div>
            <Title order={4}>LEARNING</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>Courses</li>
              <li>Mentors</li>
              <li>Tutorials (en)</li>
              <li>Useful Links (en)</li>
            </Box>
          </div>
          <div>
            <Title order={4}>COMMUNITY</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>YouTube</li>
              <li>Patreon</li>
              <li>Telegram</li>
              <li>LinkedIn</li>
            </Box>
          </div>
          <div>
            <Title order={4}>PROJECT</Title>
            <Box component="ul" mt={20} sx={{listStyleType: "none", "& li": {marginTop: 8}}}>
              <li>About</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Feedback</li>
            </Box>
          </div>
        </Box>
      </Container>
    </Footer>
  </>
}

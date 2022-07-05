import {Box, Container, Stack, Title} from "@mantine/core"
import {Carousel, HorizontalCard, Link} from "components"

export default function MantinePage() {
  return <>
    <Background/>
      <Container size="lg">
        <Title order={2} mt={32} mb={24}>Recent Testimonials</Title>
        <Carousel
          items={[
            {
              body: `<p>Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.</p>`,
              createdAt: new Date().toLocaleDateString(),
              author: {
                name: "John Doe",
                image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
              },
            },
            {
              body: `<p>Replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.</p>`,
              createdAt: new Date().toLocaleDateString(),
              author: {
                name: "Jane Doe",
                image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
              },
            }
          ]}
        />

        <Title order={2} mt={32} mb={24}>Recent Posts</Title>
        <Stack spacing={24}>
          <HorizontalCard
            postedAt={new Date(2017, 1, 9).toLocaleDateString()}
            title="Paqmind is back. What changed since 2020?"
            body={`<p>Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.</p>`}
            tags={["react", "typescript"]}
          />

          <HorizontalCard
            postedAt={new Date(2016, 5, 1).toLocaleDateString()}
            title="Second Post"
            body={`<p>Replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.</p>`}
          />

          <HorizontalCard
            postedAt={new Date(2015, 11, 22).toLocaleDateString()}
            title="Oldest Post"
            body={`<p>Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.</p>`}
            tags={["react"]}
          />
        </Stack>
        <p>
          Read more posts on our <Link href="#">Blog</Link> page.
        </p>
      </Container>
  </>
}


function Background() {
  const height = "12rem"
  return <Box mt="5rem" sx={{height}}>
    <Container size="lg">
      <h1 style={{fontSize: "60px", position: "absolute", color: "white"}}>HERO SECTION</h1>
    </Container>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern id="brick" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect fill="#487346" width="200" height="200"/><g fillOpacity="1"><polygon fill="#4c8e43" points="100 57.1 64 93.1 71.5 100.6 100 72.1"/><polygon  fill="#6aac5f" points="100 57.1 100 72.1 128.6 100.6 136.1 93.1"/><polygon  fill="#4c8e43" points="100 163.2 100 178.2 170.7 107.5 170.8 92.4"/><polygon  fill="#6aac5f" points="100 163.2 29.2 92.5 29.2 107.5 100 178.2"/><path  fill="#89CC7C" d="M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z"/><polygon  fill="#768c3a" points="0 157.1 0 172.1 28.6 200.6 36.1 193.1"/><polygon  fill="#96ac58" points="70.7 200 70.8 192.4 63.2 200"/><polygon  fill="#B6CC76" points="27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5"/><polygon  fill="#96ac58" points="200 157.1 164 193.1 171.5 200.6 200 172.1"/><polygon  fill="#768c3a" points="136.7 200 129.2 192.5 129.2 200"/><polygon  fill="#B6CC76" points="172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200"/><polygon  fill="#768c3a" points="129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0"/><polygon  fill="#B6CC76" points="200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2"/><polygon  fill="#96ac58" points="63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0"/><polygon fill="#B6CC76" points="0 63.2 63.2 0 27.8 0 0 27.8"/></g>
        </pattern>
      </defs>
      <rect width="100%" height={height} fill="url(#brick)"></rect>
    </svg>
  </Box>
}

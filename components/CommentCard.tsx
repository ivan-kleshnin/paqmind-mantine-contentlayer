import {
  Avatar, Box, Divider, Paper, Text, Title, TypographyStylesProvider,
  /* useMantineTheme*/
} from "@mantine/core"
import React from "react"
import {Link, Stack} from "components"

type CommentCardProps = {
  postedAt: string
  body: string
  author: {
    name: string
    image: string
  }
}

export function CommentCard({postedAt, body, author}: CommentCardProps) {
  // const theme = useMantineTheme()
  // withBorder

  return <>
    <Paper
      sx={{
        padding: "1.5rem",
      }}
    >
      <Stack
        sx={{
          "@media (min-width: 640px)": {
            flexDirection: "row",
          },
        }}
      >
        <Avatar size={64} src={author.image} alt={author.name} radius="xl"/>
        <div>
          <Title order={3}>{author.name}</Title>
          <Text color="dimmed">
            Fullstack Developer. Posted: {postedAt}
          </Text>
          <TypographyStylesProvider mt=".5rem">
            <Box
              sx={{
                "& > p": {
                  textAlign: "justify",
                  hyphens: "auto",
                },
                "& > p:last-child": {
                  marginBottom: 0,
                },
              }}
              dangerouslySetInnerHTML={{__html: body}}
            />
            <Divider my="1rem" variant="dashed"/>
            <Text size="sm">
              The student finished the <Link href="#">Fullstack Development</Link> course.
              {" "}
              Was mentored by <Link href="#">Ivan Kleshnin</Link>.
            </Text>
          </TypographyStylesProvider>
        </div>
      </Stack>
    </Paper>
  </>
}

import {Group, Paper, Text, Title, useMantineTheme} from "@mantine/core"
import React from "react"
import {Link, Typography} from "components"

interface HorizontalCardProps {
  postedAt: string
  title: string
  intro: string
  tags?: string[]
  url?: string
}

export function HorizontalCard({postedAt, url, title, intro, tags = []}: HorizontalCardProps) {
  const theme = useMantineTheme()

  return <>
    <Paper
      px="1.5rem"
      sx={{
        position: "relative",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 4,
          backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.green[6]),
        },
      }}
    >
      <Title order={3} mt={16}>
        {url ? <Link asText href={url}>{title}</Link> : title}
      </Title>
      <Text color="dimmed" mb={-8}>
        Posted: {new Date(postedAt).toLocaleDateString()}
      </Text>
      <Typography>
        <div dangerouslySetInnerHTML={{__html: intro}}/>
      </Typography>
      {Boolean(tags.length) &&
        <Group mb={20} mt={-8}>
          {
            tags.map((tag, i) =>
              <Link key={i} href="#">
                <strong><code>#{tag}</code></strong>
              </Link>
            )
          }
        </Group>
      }
    </Paper>
  </>
}

// > The following version correctly clamps the content but there're problems with margins as
// > -webkit-box doesn't behave normally and p's margins are ignored. To avoid multiple hacks
// > I've decided to rely on a dedicated `intro` document property.

// <Box className="clamp" sx={{
//   "& div": {
//     overflow: "hidden",
//     display: "-webkit-box",
//     WebkitLineClamp: "3",
//     WebkitBoxOrient: "vertical",
//     marginBottom: 20,
//   }
// }}>
//   <Typography>
//     <MDXContent/>
//   </Typography>
// </Box>

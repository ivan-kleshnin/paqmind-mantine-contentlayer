import {Code, Group, Paper, Text, Title} from "@mantine/core"
import React from "react"
import {Link, Typography} from "components"

interface HorizontalCardProps {
  postedAt: string
  title: string
  intro: string
  tags?: string[]
  url?: string
}

export function HorizontalCard({postedAt, url, title, intro, tags}: HorizontalCardProps) {
  return <>
    <Paper
      px="1.5rem"
      sx={{
        // position: "relative",
        // "&::before": {
        //   content: "''",
        //   position: "absolute",
        //   top: 0,
        //   bottom: 0,
        //   left: 0,
        //   width: 4,
        //   backgroundImage: theme.fn.linearGradient(0, "#eee", "#eee"),
        // },
      }}
    >
      {url
        ? <Link asText href={url}><Title order={3} mt="1.25rem">{title}</Title></Link>
        : <Title order={3} mt="1rem">{title}</Title>
      }
      <Text color="dimmed" mb="-.5rem">
        Posted: {new Date(postedAt).toLocaleDateString()}
      </Text>
      <Typography>
        <div dangerouslySetInnerHTML={{__html: intro}}/>
      </Typography>
      {(tags && Boolean(tags.length)) &&
        <Group mb="1.5rem">
          {
            tags.map((tag, i) =>
              <Link key={i} href="#" asText>
                <strong><Code>#{tag.toLowerCase()}</Code></strong>
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

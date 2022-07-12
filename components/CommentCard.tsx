import {
  Avatar, Box, Paper, Text, Title,
} from "@mantine/core"
import {/*Mail,*/ BrandGithub /*BrandFacebook, BrandLinkedin, BrandSkype, BrandTelegram, BrandTwitter, BrandYoutube*/} from "tabler-icons-react"
import {Account} from "contentlayer/generated"
import React from "react"
import {/*Group,*/ Link, Stack, Typography} from "components"

export type CommentCardProps = {
  body: string
  createdAt: string
  author: Pick<Account, "fullname" | "title" | "avatarUrl" | "contacts">
}

export function CommentCard({body, author}: CommentCardProps) {
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
        <div>
          <Box
            style={{display: "flex", gap: "1rem", alignItems: "flex-start"}}
            sx={{
              "@media (min-width: 640px)": {
                flexDirection: "column",
              },
            }}
          >
            {author.avatarUrl
              ? <Avatar size={64} src={author.avatarUrl} alt={author.fullname} radius="xl"/>
              : null
            }
            {/*<Stack spacing="0.75rem">
              <Group spacing="0.75rem">
                <Mail size="1rem" color="#59F"/>
                <BrandGithub size="1rem" color="#59F"/>
                <BrandFacebook size="1rem" color="#59F"/>
                <BrandLinkedin size="1rem" color="#59F"/>
              </Group>
              <Group spacing="0.75rem">
                <BrandSkype size="1rem" color="#ccc"/>
                <BrandTelegram size="1rem" color="#59F"/>
                <BrandTwitter size="1rem" color="#ccc"/>
                <BrandYoutube size="1rem" color="#59F"/>
              </Group>
            </Stack>*/}
          </Box>
        </div>
        <div>
          <Title order={3}>
            {author.fullname}
            <Text component="span" ml="0.5rem">
              {author.contacts.github
                ? <Link href={`https://github.com/${author.contacts.github}`}>
                    <BrandGithub size="1rem"/>
                  </Link>
                : null
              }
            </Text>
          </Title>
          <Text color="dimmed">
            {author.title}
          </Text>
          <Typography mt=".5rem">
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
          </Typography>
        </div>
      </Stack>
    </Paper>
  </>
}

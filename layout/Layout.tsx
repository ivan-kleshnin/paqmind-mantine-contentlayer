import {AppShell, useMantineTheme} from "@mantine/core"
import Head from "next/head"
import * as React from "react"
import {AppFooter, Sidebar, TopMenu} from "layout"

export type LayoutProps = {
  children?: React.ReactNode
  size?: "sm" | "md" | "lg"
}

export function Layout({children, size = "lg"}: LayoutProps): JSX.Element {
  const theme = useMantineTheme()
  const [opened, toggle] = React.useReducer(x => !x, false)

  const breakpoint = (
    size == "lg" ? "md" :
    size == "md" ? "lg" :
    size == "sm" ? "xl" : "lg"
  )

  return <>
    <Head>
      <title>Paqmind!</title>
    </Head>
    <AppShell
      header={<TopMenu size={size} opened={opened} toggle={toggle}/>}
      navbar={<Sidebar opened={opened} size={size}/>}
      footer={<AppFooter size={size}/>}
      styles={{
        main: {
          display: opened ? "none" : undefined,
          [theme.fn.largerThan(breakpoint)]: {
            display: "block",
          },
          background: theme.colors.gray[0],
          minHeight: "calc(100vh - 5rem)",
          padding: 0,
          marginTop: "5rem",
        },
      }}
    >
      {children}
    </AppShell>
  </>
}

// https://github.com/mantinedev/mantine/discussions/680

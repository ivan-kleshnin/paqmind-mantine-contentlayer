import {AppShell, useMantineTheme} from "@mantine/core"
import Head from "next/head"
import * as React from "react"
import {AppFooter, Sidebar, TopMenu} from "layout"

export type LayoutProps = {
  children?: React.ReactNode
}

export function Layout({children}: LayoutProps): JSX.Element {
  const theme = useMantineTheme()
  const [opened, toggle] = React.useReducer(x => !x, false)

  return <>
    <Head>
      <title>Paqmind!</title>
    </Head>
    <AppShell
      header={<TopMenu opened={opened} toggle={toggle}/>}
      navbar={<Sidebar/>}
      footer={<AppFooter/>}
      styles={{
        main: {
          display: opened ? "none" : undefined,
          [theme.fn.largerThan("sm")]: {
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

import {AppShell} from "@mantine/core"
// import {useWindowScroll} from "@mantine/hooks"
import {useRouter} from "next/router"
import Head from "next/head"
import * as React from "react"
import {AppFooter, Sidebar, TopMenu} from "layout"

export type LayoutProps = {
  children?: React.ReactNode
  size?: "sm" | "md"
}

export function Layout({children, size = "md"}: LayoutProps): JSX.Element {
  const router = useRouter()
  const [opened, setOpened] = React.useState(false)

  React.useEffect(() => {
    function closeSidebar() {
      setOpened(false)
    }
    router.events.on("routeChangeStart", closeSidebar)
    return () => {
      router.events.off("routeChangeStart", closeSidebar)
    }
  }, [])

  const [scroll] = [{y: 0}] // useWindowScroll() -- SSR incompatible
  const headerHeight = (scroll.y > 16 * 8) ? "3.5rem" : "5rem"

  return <>
    <Head>
      <title>Paqmind!</title>
    </Head>
    <AppShell
      header={<TopMenu opened={opened} toggle={() => setOpened(!opened)}/>}
      navbar={<Sidebar opened={opened} size={size}/>}
      footer={<AppFooter/>}
      styles={{
        main: {
          background: "white", // theme.colors.gray[0],
          minHeight: `calc(100vh - ${headerHeight})`,
          padding: 0,
          marginTop: headerHeight,
        },
      }}
    >
      {children}
    </AppShell>
  </>
}

// https://github.com/mantinedev/mantine/discussions/680

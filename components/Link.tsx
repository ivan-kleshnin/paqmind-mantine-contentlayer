import {Anchor, AnchorProps} from "@mantine/core"
import NextLink from "next/link"
import * as React from "react"

export type LinkProps<C> = AnchorProps<C> & {
  asText?: boolean
  children?: React.ReactNode
  href: string
}

export function Link<C = "a">({asText, children, href, ...rest} : LinkProps<C>) : JSX.Element {
  return <NextLink href={href}>
    <Anchor
      {...rest}
      sx={{"&:hover": {textDecoration: "underline"}} as any}
      variant={asText ? "text" : undefined}
    >
      {children}
    </Anchor>
  </NextLink>
}

// import cn from "classnames"
//
// // Link
// export type LinkProps = {
//   // Required
//   children : React.ReactNode
//   href : string
//
//   // Optional
//   asText ?: boolean
//   underline ?: boolean
//   className ?: string
//   disabled ?: boolean
//   onClick ?: (event : React.MouseEvent) => void
//   target ?: string
//   title ?: string
//   rel ?: string
// }
//
// export function Link({
//   // Required
//   children,
//   href,
//
//   // Optional
//   asText = false,
//   underline = false,
//   className,
//   disabled = false,
//   onClick,
//   ...rest
// } : LinkProps) : JSX.Element {
//   return <>
//     <NextLink href={href}>
//       <a
//         {...rest}
//         className={cn(className, {asText, underline, disabled})}
//         onClick={(event) => disabled ? event.preventDefault() : onClick && onClick(event)}
//       >
//         {children}
//       </a>
//     </NextLink>
//   </>
// }

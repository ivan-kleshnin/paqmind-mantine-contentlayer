import * as React from "react"

export * from "./Button"
export * from "./CommentCarousel"
export * from "./CommentCard"
export * from "./HorizontalCard"
export * from "./Link"
export * from "./Tags"
export * from "./Typography"

import * as M from "@mantine/core"

// Group (override)
export type GroupProps = Omit<M.GroupProps, "spacing"> & {
  spacing?: M.MantineNumberSize | string
}

export const Group = M.Group as React.ForwardRefExoticComponent<GroupProps & React.RefAttributes<HTMLDivElement>>

// Stack (override)
export type StackProps = Omit<M.StackProps, "spacing"> & {
  spacing?: M.MantineNumberSize | string
}

export const Stack = M.Stack as React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>

// Grid (override)
export type GridProps = Omit<M.GridProps, "gutter"> & {
  gutter?: M.MantineNumberSize | string
}

export const Grid = M.Grid as M.ForwardRefWithStaticComponents<GridProps, {
  Col: typeof M.Col
}>

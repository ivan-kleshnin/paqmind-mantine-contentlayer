import {Burger} from "@mantine/core"
import * as React from "react"

// BurgerMenu
export type BurgerMenuProps = {
  className?: string
  opened: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function BurgerMenu({className, opened, onClick}: BurgerMenuProps): JSX.Element {
  return <Burger
    className={className}
    opened={opened}
    onClick={onClick}
    size="sm"
    ml="sm"
    mr={-8}
    p="0"
  />
}

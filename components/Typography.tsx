import {Box} from "@mantine/core"
import {DefaultProps, useMantineDefaultProps, createStyles} from "@mantine/styles"
import * as R from "rambda"
import React, {forwardRef} from "react"

export interface TypographyProps extends DefaultProps, React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
}

export const Typography = forwardRef<HTMLDivElement, TypographyProps>((props: TypographyProps, ref) => {
  const {className, ...others} = useMantineDefaultProps("Typography", {}, props)
  const {classes, cx} = useStyles(null as any, {name: "Typography"})
  return <Box className={cx(classes.root, className)} ref={ref} {...others}/>
})

Typography.displayName = "@mantine/core/Typography"

// textAlign: "justify",
// hyphens: "auto",

const useStyles = createStyles((theme) => {
  const headings = R.keys(theme.headings.sizes).reduce((acc, h) => {
    acc[`& ${h}`] = {
      fontFamily: theme.headings.fontFamily,
      fontWeight: theme.headings.fontWeight,
      marginTop: theme.spacing.xl * (theme.headings.sizes[h].lineHeight as number),
      marginBottom: theme.spacing.sm,
      ...theme.headings.sizes[h],
    }

    return acc
  }, {} as Record<string, unknown>)

  return {
    root: {
      ...theme.fn.fontStyles(),

      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
      fontSize: theme.fontSizes.md,

      ...headings,

      "& :first-child": {
        marginTop: 0,
      },

      "& :last-child": {
        marginBottom: 0,
      },

      "& .ql-align-center": {
        textAlign: "center",
      },

      "& .ql-align-right": {
        textAlign: "right",
      },

      "& .ql-align-left": {
        textAlign: "left",
      },

      "& img": {
        maxWidth: "100%",
        // marginTop: theme.spacing.lg,
        // marginBottom: theme.spacing.lg,
      },

      "& p": {
        hyphens: "auto",
        marginTop: theme.spacing.lg,
        marginBottom: theme.spacing.lg,
        textAlign: "justify",
      },

      "& hr": {
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm,
        borderBottom: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: `1px dashed ${theme.colors.gray[theme.colorScheme === "dark" ? 4 : 6]}`,
      },

      "& a": {
        ...theme.fn.focusStyles(),
        color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
        textDecoration: "none",

        "&:hover": {
          textDecoration: "underline",
        },
      },

      "& pre": {
        padding: theme.spacing.xs,
        lineHeight: theme.lineHeight,
        margin: 0,
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.md,
        overflowX: "auto",
        fontFamily: theme.fontFamilyMonospace,
        fontSize: theme.fontSizes.sm,
        borderRadius: theme.radius.sm,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
      },

      "& code": {
        lineHeight: theme.lineHeight,
        padding: `.25rem .5rem`,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[0],
        fontFamily: theme.fontFamilyMonospace,
        fontSize: "14px",
        // border: `1px solid ${
        //   theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[3]
        // }`,
      },

      "& ul, & ol": {
        marginBottom: theme.spacing.lg,
        paddingLeft: theme.spacing.lg * 2,

        "& li": {
          marginTop: theme.spacing.xs,
        },
      },

      "& table": {
        width: "100%",
        borderCollapse: "collapse",
        captionSide: "bottom",
        marginBottom: theme.spacing.md,

        "& caption": {
          marginTop: theme.spacing.xs,
          fontSize: theme.fontSizes.sm,
          color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
        },

        "& th": {
          textAlign: "left",
          fontWeight: "bold",
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
          fontSize: 14,
          padding: "7px 10px", // wtf
        },

        "& thead th": {
          borderBottom: `1px solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        },

        "& tfoot th": {
          borderTop: `1px solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        },

        "& td": {
          padding: "7px 10px", // wtf
          borderBottom: `1px solid ${
            theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
          fontSize: 14,
        },

        "& tr:last-of-type td": {
          borderBottom: "none",
        },
      },

      "& blockquote": {
        ":before": {
          content: "'“'",
          position: "absolute",
          left: "-1.25rem",
          top: "-0.75rem",
          fontSize: "2.5rem",
          color: "#f2e4e4",
          fontStyle: "normal",
        },
        position: "relative",
        backgroundColor: "#F8F0F0",
        borderRadius: "4px",
        // wordBreak: "break-all",
        fontSize: theme.fontSizes.lg,
        fontFamily: "'Source Serif Pro', serif",
        fontStyle: "italic",
        lineHeight: theme.lineHeight,
        margin: `1rem 0`,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        padding: `1rem 1.25rem`,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "& cite": {
          display: "block",
          fontSize: theme.fontSizes.sm,
          marginTop: theme.spacing.xs,
          color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
    },
  }
})

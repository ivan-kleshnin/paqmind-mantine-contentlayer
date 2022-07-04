import * as React from "react"

export type ButtonProps = {
  children: React.ReactNode
}

export function Button({children}: ButtonProps): JSX.Element {
  return <div
    style={{
      padding: 10,
      backgroundColor: "#333",
      color: "#fff",
      display: "inline-block",
      borderRadius: 4
     }}
    onClick={() => alert("Hi")}
  >
    {children}
  </div>
}

import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Hi, This is{" "}
      <Styled.a href="http://github.com/eminvergil">Emin Vergil</Styled.a>
      {` `}
      <br />
      I'm a software developer, game maker.
    </>
  )
}

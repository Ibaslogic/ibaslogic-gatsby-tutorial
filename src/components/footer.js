import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <p>
          Site developed by {data.site.siteMetadata.author} &copy;{" "}
          {new Date().getFullYear().toString()}{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer

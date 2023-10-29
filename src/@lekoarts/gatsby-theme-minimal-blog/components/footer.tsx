/** @jsx jsx */
import { jsx, Link } from "theme-ui"

const Footer = () => {

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
      <Link
          aria-label="Link to the github pull request"
          href="https://github.com/SiboYang/sibo-yang/issues"
        >
          Suggest Changes
        </Link>
      </div>
    </footer>
  )
}

export default Footer

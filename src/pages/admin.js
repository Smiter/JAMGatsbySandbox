import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter12"
          meta={[
            { name: "description", content: "Sample1" },
            { name: "keywords", content: "sample1, something1" },
          ]}
          link={[
              {"rel": "stylesheet", "href": "https://unpkg.com/netlify-cms@~0.4/dist/cms.css"}
          ]}
          script={[
            {"src": "https://unpkg.com/netlify-cms@~0.4/dist/cms.js", "type": "text/javascript"}
          ]}
        />
      </div>
    )
  }
}

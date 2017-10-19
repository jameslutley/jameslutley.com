import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { Flex, Box } from 'grid-emotion'
import t from 'tachyons-js'

import { theme } from '../utils/theme'
import Container from '../components/atoms/container'
import TextBlock from '../components/atoms/text-block'
import Avatar from '../components/molecules/avatar'
import SocialIconsFollow from '../components/molecules/social-icons-follow'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const prev = this.props.pathContext.prev
    const next = this.props.pathContext.next
    const avatar = this.props.data.file.childImageSharp.resolutions
    const siteTitle = this.props.data.site.siteMetadata.title

    const Article = styled.article`
      padding-top: ${theme.spacingExtraExtraExtraLarge};
      padding-bottom: ${theme.spacingExtraExtraExtraLarge};
    `

    const Header = styled.header`
      padding-bottom: ${theme.spacingExtraExtraExtraLarge};
    `

    const Meta = styled.div`
      ${t.ttu};
      font-family: ${theme.code};
      font-size: ${theme.fontSize8};
      line-height: calc(24 / 15);
      letter-spacing: ${theme.tracked};
      color: ${theme.gray};
    `

    const Categories = styled.div`
      ${t.ttu};
      font-family: ${theme.code};
      font-size: ${theme.fontSize8};
      line-height: calc(24 / 15);
      letter-spacing: ${theme.tracked};
      color: ${theme.gray};
    `

    const Category = styled.span`
      padding-right: ${theme.spacingLarge};
    `

    const ReadTime = styled.span`
      padding-left: ${theme.spacingLarge};
    `

    const Title = styled.h1`
      margin-top: ${theme.spacingMediumLarge};
      margin-bottom: ${theme.spacingLarge};
    `

    const AuthorBio = styled.p`
      max-width: calc(${theme.spacingMedium} * 20);
      margin-top: ${theme.spacingLarge};
      margin-bottom: ${theme.spacingLarge};
      font-family: ${theme.serifDisplay};
      font-size: ${theme.fontSizeCopy};
      line-height: calc(32 / 22);
      color: ${theme.darkGray};
    `

    return (
      <main role='main'>
        <Article>
          <Container>
            <Flex mx={`-${theme.spacingMedium}`}>
              <Box width={3/4} px={theme.spacingMedium}>
                <Header>
                  <Meta>
                    <time dateTime={post.frontmatter.rawDate}>{post.frontmatter.date}</time>
                    <ReadTime>{post.timeToRead} min read</ReadTime>
                  </Meta>
                  <Title>
                    {post.frontmatter.title}
                  </Title>
                  <Categories>
                    {post.frontmatter.categories.map(category =>
                      <Category key={category}>{category}</Category>
                    )}
                  </Categories>
                </Header>
              </Box>
            </Flex>
            <Flex mx={`-${theme.spacingMedium}`}>
              <Box is='aside' width={1/4} px={theme.spacingMedium}>
                <Avatar avatar={avatar} siteTitle={siteTitle} />
                <AuthorBio>
                  Hello there, I’m James Lutley, a designer, developer, and maker. Originally from the UK, I’m now living in Da Nang, Vietnam.
                </AuthorBio>
                <SocialIconsFollow />
              </Box>
              <Box width={1/2} px={theme.spacingMedium}>
                <TextBlock>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </TextBlock>

                <div>
                  {prev && (
                    <Link to={prev.fields.slug}>
                      <h4>Previous</h4>
                      <span>
                        {prev.frontmatter.title}
                      </span>
                    </Link>
                  )}
                </div>
                <div>
                  {next && (
                    <Link to={next.fields.slug}>
                      <h4>Next</h4>
                      <span>
                        {next.frontmatter.title}
                      </span>
                    </Link>
                  )}
                </div>
              </Box>
            </Flex>
          </Container>
        </Article>
      </main>
    )
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "images/jameslutley.jpg"}) {
      childImageSharp {
        resolutions(width: 72, height: 72) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "D MMMM, YYYY")
        rawDate: date
        categories
      }
    }
  }
`

export default BlogPostTemplate

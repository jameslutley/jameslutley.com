import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { Flex, Box } from 'grid-emotion'
import t from 'tachyons-js'

import { theme } from '../utils/theme'
import Container from '../components/atoms/container'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const prev = this.props.pathContext.prev
    const next = this.props.pathContext.next

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
      letter-spacing: ${theme.tracked};
      color: ${theme.gray};
    `

    const Categories = styled.div`
      ${t.ttu};
      font-family: ${theme.code};
      letter-spacing: ${theme.tracked};
      color: ${theme.gray};
    `

    const ReadTime = styled.span`
      padding-left: ${theme.spacingLarge};
    `

    const Title = styled.h1`
      margin-top: ${theme.spacingMediumLarge};
      margin-bottom: ${theme.spacingLarge};
    `

    const Content = styled.section`
      font-family: ${theme.serif};
      font-size: ${theme.fontSizeCopy};
      line-height: calc(32 / 22);
      color: ${theme.darkGray};

      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${theme.nearBlack};
      }

      p:first-child {
        ${t.mt0};
        font-family: ${theme.serifDisplay};
        font-size: ${theme.fontSize3};
        line-height: calc(40 / 30);
        color: ${theme.nearBlack};
      }
    `

    return (
      <main>
        <Article>
          <Container>
            <Flex>
              <Box width={3/4}>
                <Header>
                  <Meta>
                    <time dateTime={post.frontmatter.rawDate}>{post.frontmatter.date}</time>
                    <ReadTime>Read time: {post.timeToRead} minutes</ReadTime>
                  </Meta>
                  <Title>
                    {post.frontmatter.title}
                  </Title>
                  <Categories>
                    {post.frontmatter.categories}
                  </Categories>
                </Header>
              </Box>
            </Flex>
            <Flex>
              <Box width={1/4}>
                Author info
              </Box>
              <Box width={1/2}>
                <Content dangerouslySetInnerHTML={{ __html: post.html }} />
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
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
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

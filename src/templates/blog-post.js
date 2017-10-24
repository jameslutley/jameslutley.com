import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import t from 'tachyons-js'

import '../utils/prism-base16-ateliersulphurpool.light.css'
import Container from '../components/atoms/container'
import TextBlock from '../components/atoms/text-block'
import MetaText from '../components/atoms/meta-text'
import CategoryText from '../components/atoms/category-text'
import Button from '../components/atoms/button'
import Avatar from '../components/molecules/avatar'
import SocialIconsFollow from '../components/molecules/social-icons-follow'
import BlogPostPreviewItem from '../components/molecules/blog-post-preview-item'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { allMarkdownRemark } = this.props.data
    const prev = this.props.pathContext.prev
    const next = this.props.pathContext.next
    const avatar = this.props.data.file.childImageSharp.resolutions
    const siteTitle = this.props.data.site.siteMetadata.title

    const Article = styled.article`
      padding-top: ${props => props.theme.spacingExtraLarge};
      padding-bottom: ${props => props.theme.spacingExtraLarge};

      ${props => props.theme.Tablet} {
        ${t.w_80};
        ${t.center};
      }

      ${props => props.theme.Desktop} {
        ${t.w_100};
        padding-top: ${props => props.theme.spacingExtraExtraLarge};
        padding-bottom: ${props => props.theme.spacingExtraExtraLarge};
      }

      ${props => props.theme.VHd} {
        padding-top: ${props => props.theme.spacingExtraExtraExtraLarge};
        padding-bottom: ${props => props.theme.spacingExtraExtraExtraLarge};
      }
    `

    const ArticleBlock = styled.div`
      ${t.flex};
      ${t.flex_wrap};
      margin-left: -${props => props.theme.spacingMedium};
      margin-right: -${props => props.theme.spacingMedium};
    `

    const ArticleHeader = styled.header`
      ${t.w_100};
      ${t.border_box};
      margin-bottom: ${props => props.theme.spacingMediumLarge};
      padding-left: ${props => props.theme.spacingMedium};
      padding-right: ${props => props.theme.spacingMedium};

      ${props => props.theme.Desktop} {
        ${t.w_75};
        margin-bottom: ${props => props.theme.spacingExtraExtraLarge};
      }

      ${props => props.theme.VHd} {
        margin-bottom: ${props => props.theme.spacingExtraExtraExtraLarge};
      }
    `

    const ReadTime = styled.span`
      padding-left: ${props => props.theme.spacingLarge};
    `

    const Title = styled.h1`
      margin-top: ${props => props.theme.spacingMedium};
      margin-bottom: ${props => props.theme.spacingMediumLarge};

      ${props => props.theme.Desktop} {
        margin-top: ${props => props.theme.spacingMediumLarge};
        margin-bottom: ${props => props.theme.spacingLarge};
      }
    `

    const AuthorBio = styled.p`
      margin-top: ${props => props.theme.spacingMediumLarge};
      margin-bottom: ${props => props.theme.spacingMediumLarge};
      font-family: ${props => props.theme.serifDisplay};
      font-size: ${props => props.theme.fontSize5};
      line-height: calc(32 / 20);
      color: ${props => props.theme.darkGray};

      ${props => props.theme.VHd} {
        max-width: calc(${props => props.theme.spacingMedium} * 20);
        margin-top: ${props => props.theme.spacingLarge};
        margin-bottom: ${props => props.theme.spacingLarge};
        font-size: ${props => props.theme.fontSizeCopy};
        line-height: calc(32 / 22);
      }
    `

    const ArticleAside = styled.aside`
      ${t.w_100};
      ${t.border_box};
      margin-bottom: ${props => props.theme.spacingExtraLarge};
      padding-left: ${props => props.theme.spacingMedium};
      padding-right: ${props => props.theme.spacingMedium};

      ${props => props.theme.Desktop} {
        ${t.w_25};
      }
    `

    const ArticleBody = styled.div`
      ${t.w_100};
      ${t.border_box};
      padding-left: ${props => props.theme.spacingMedium};
      padding-right: ${props => props.theme.spacingMedium};

      ${props => props.theme.Desktop} {
        ${t.w_75};
      }

      ${props => props.theme.Hd} {
        ${t.w_50};
      }
    `

    const MoreArticles = styled.section`
      padding-top: ${props => props.theme.spacingLarge};
      background-color: ${props => props.theme.nearWhite};

      ${props => props.theme.Desktop} {
        padding-top: ${props => props.theme.spacingExtraExtraLarge};
        padding-bottom: ${props => props.theme.spacingMedium};
      }

      ${props => props.theme.VHd} {
        padding-top: ${props => props.theme.spacingExtraExtraExtraLarge};
        padding-bottom: ${props => props.theme.spacingExtraLarge};
      }
    `

    const MoreArticlesBlock = styled.div`
      ${t.flex};
      ${t.flex_wrap};
      margin-left: -${props => props.theme.spacingMedium};
      margin-right: -${props => props.theme.spacingMedium};
    `

    const MoreArticlesHeader = styled.header`
      ${t.flex};
      ${t.items_center};
      ${t.flex_wrap};
      margin-bottom: ${props => props.theme.spacingMediumLarge};

      ${props => props.theme.Desktop} {
        margin-bottom: ${props => props.theme.spacingExtraLarge};
      }

      ${props => props.theme.VHd} {
        margin-bottom: ${props => props.theme.spacingExtraExtraLarge};
      }
    `

    const MoreArticlesTitle = styled.h2`
      ${t.mv0};
      ${t.flex_auto};
      font-size: ${props => props.theme.fontSize3};
      line-height: calc(48 / 30);

      ${props => props.theme.Desktop} {
        font-size: ${props => props.theme.fontSize2};
        line-height: calc(64 / 48);
      }
    `

    return (
      <main role='main'>
        <Article>
          <Container>
            <ArticleBlock>
              <ArticleHeader>
                <MetaText>
                  <time dateTime={post.frontmatter.rawDate}>{post.frontmatter.date}</time>
                  <ReadTime>{post.timeToRead} min read</ReadTime>
                </MetaText>
                <Title>
                  {post.frontmatter.title}
                </Title>
                <MetaText>
                  {post.frontmatter.categories.map(category =>
                    <CategoryText key={category}>{category}</CategoryText>
                  )}
                </MetaText>
              </ArticleHeader>
            </ArticleBlock>
            <ArticleBlock>
              <ArticleAside>
                <Avatar avatar={avatar} siteTitle={siteTitle} />
                <AuthorBio>
                  Hello there, I’m James Lutley, a designer, developer, and maker. Originally from the UK, I’m now living in Da Nang, Vietnam.
                </AuthorBio>
                <SocialIconsFollow />
              </ArticleAside>
              <ArticleBody>
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
              </ArticleBody>
            </ArticleBlock>
          </Container>
        </Article>
        <MoreArticles>
          <Container>
            <MoreArticlesHeader>
              <MoreArticlesTitle>
                Read More
              </MoreArticlesTitle>
              <Button linkTo="/blog">
                View all →
              </Button>
            </MoreArticlesHeader>
            <MoreArticlesBlock>
              {allMarkdownRemark.edges.map(({ node }) => (
                <BlogPostPreviewItem
                  post={node}
                  key={node.fields.slug}
                />
              ))}
            </MoreArticlesBlock>
          </Container>
        </MoreArticles>
      </main>
    )
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
}

export default BlogPostTemplate

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
    allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          ...BlogPostPreview_item
        }
      }
    }
  }
`

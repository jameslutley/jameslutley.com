import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'react-emotion'
import t from 'tachyons-js'

import MetaText from '../atoms/meta-text'
import CategoryText from '../atoms/category-text'

class BlogPostPreviewItem extends React.Component {
  render() {
    const post = this.props.post
    const postThumbnail = post.frontmatter.thumbnail.childImageSharp.sizes

    const BlogPostPreviewItemInner = styled.article`
      ${t.tc};
      ${t.w_100};
      ${t.border_box};
      margin-bottom: ${props => props.theme.spacingExtraLarge};
      padding-left: ${props => props.theme.spacingMedium};
      padding-right: ${props => props.theme.spacingMedium};

      ${props => props.theme.Tablet} {
        ${t.w_50};
      }
    `

    const BlogPostPreviewItemLink = styled(Link)`
      ${t.no_underline};
    `

    const BlogPostPreviewItemImg = styled(Img)`
      ${t.grow};
      margin-bottom: ${props => props.theme.spacingLarge};
    `

    const BlogPostPreviewItemTitle = styled.h3`
      ${t.underline};
      margin-top: ${props => props.theme.spacingSmall};
      margin-bottom: ${props => props.theme.spacingMedium};
      font-size: ${props => props.theme.fontSize4};
      line-height: calc(32 / 24);
      text-decoration-color: ${props => props.theme.lightBlue};
      transition: text-decoration-color 0.15s ease-in;

      a:hover &,
      a:focus & {
        text-decoration-color: ${props => props.theme.blue};
      }

      ${props => props.theme.Desktop} {
        font-size: ${props => props.theme.fontSize3};
        line-height: calc(48 / 30);
      }

      ${props => props.theme.Hd} {
        padding-left: ${props => props.theme.spacingExtraExtraLarge};
        padding-right: ${props => props.theme.spacingExtraExtraLarge};
      }
    `

    return (
      <BlogPostPreviewItemInner>
        <BlogPostPreviewItemLink to={post.fields.slug}>
          <BlogPostPreviewItemImg
            sizes={postThumbnail}
            alt={post.frontmatter.title}
            backgroundColor="#fff"
          />
          <MetaText>
            <time dateTime={post.frontmatter.rawDate}>
              {post.frontmatter.date}
            </time>
          </MetaText>
          <BlogPostPreviewItemTitle>
            {post.frontmatter.title}
          </BlogPostPreviewItemTitle>
        </BlogPostPreviewItemLink>
        <MetaText>
          {post.frontmatter.categories.map(category =>
            <CategoryText key={category}>{category}</CategoryText>
          )}
        </MetaText>
      </BlogPostPreviewItemInner>
    )
  }
}

BlogPostPreviewItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default BlogPostPreviewItem

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      path
      date(formatString: "D MMMM, YYYY")
      rawDate: date
      categories
      thumbnail {
        childImageSharp {
          sizes(
            maxWidth: 784
            quality: 80
          ) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`

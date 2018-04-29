import * as React from 'react'
import * as classNames from 'classnames'

interface ContentProps extends React.HTMLProps<HTMLDivElement> {
  // Basics
  tag?: React.ReactType

  // Sizes
  small?: boolean
  medium?: boolean
  large?: boolean
}

interface ContentState {}

class Content extends React.Component<ContentProps, ContentState> {
  render() {
    // Basics
    const { tag: Tag = 'div', ...props1 } = this.props

    // Sizes
    const { small, medium, large, ...props2 } = props1
    const sizesClasses = classNames(small && `is-small`, medium && `is-medium`, large && `is-large`)

    // Classnames
    const { className, ...finalProps } = props2
    const classes = classNames('content', sizesClasses, className)
    return <Tag {...finalProps} className={classes} />
  }
}

export default Content

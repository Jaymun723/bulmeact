import * as React from 'react'
import * as classNames from 'classnames'

interface BoxProps extends React.HTMLProps<HTMLDivElement> {
  tag?: React.ReactType
}

interface BoxState {}

class Box extends React.Component<BoxProps, BoxState> {
  render() {
    const { tag: Tag = 'div', className, ...rest } = this.props
    return <Tag className={classNames('box', className)} {...rest} />
  }
}

export default Box

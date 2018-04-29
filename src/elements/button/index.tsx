import * as React from 'react'
import * as classNames from 'classnames'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  // Basics
  tag?: React.ReactType

  // Colors
  primary?: boolean
  secondary?: boolean
  link?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  color?: string

  // Sizes
  small?: boolean
  medium?: boolean
  large?: boolean

  // Styles
  outlined?: boolean
  inverted?: boolean
  rounded?: boolean

  // States
  loading?: boolean
  static?: boolean
}

interface ButtonState {}

class Button extends React.Component<ButtonProps, ButtonState> {
  render() {
    // TODO: Optimization
    // Basics
    const { tag: Tag = 'button', ...props1 } = this.props

    // Colors
    const { primary, secondary, link, info, success, warning, danger, color, ...props2 } = props1
    const colorsClasses = classNames(
      primary && `is-primary`,
      secondary && `is-secondary`,
      link && `is-link`,
      info && `is-info`,
      success && `is-success`,
      warning && `is-warning`,
      danger && `is-danger`,
      color && `is-${color}`
    )

    // Sizes
    const { small, medium, large, ...props3 } = props2
    const sizesClasses = classNames(small && `is-small`, medium && `is-medium`, large && `is-large`)

    // Styles
    const { outlined, inverted, rounded, ...props4 } = props3
    const stylesClasses = classNames(outlined && `is-outlined`, inverted && `is-inverted`, rounded && `is-rounded`)

    // States
    const { loading, static: sttc, ...props5 } = props4
    const statesClasses = classNames(loading && `is-loading`, sttc && `is-static`)

    // Classnames
    const { className, ...finalProps } = props5
    const classes = classNames('button', colorsClasses, sizesClasses, stylesClasses, statesClasses, className)
    return <Tag {...finalProps} className={classes} />
  }
}

export default Button

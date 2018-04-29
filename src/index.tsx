import './index.scss'
import * as React from 'react'
import { render } from 'react-dom'

import Box from './elements/box'

const fakeCmp = (props: any) => <header {...props} />
const Show = () => (
  <>
    <Box />
    <Box tag={fakeCmp} />
  </>
)

render(<Show />, document.getElementById('root'))

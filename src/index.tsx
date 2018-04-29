import './index.scss'
import * as React from 'react'
import { render } from 'react-dom'

import Button from './elements/button'
import Box from './elements/box'

// const fakeCmp = (props: any) => <header {...props} />
const Show = () => (
  <>
    <Box>Some content goes here</Box>
    <Button primary outlined loading>
      Hello
    </Button>
  </>
)

render(<Show />, document.getElementById('root'))

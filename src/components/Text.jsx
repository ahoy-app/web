import React from 'react'
import PropTypes from 'prop-types'

import { text as textStyle } from '../style'

const Text = {} //Closure atribute
const makeText = (name, Type) => {
  const text = ({ style, children }) => (
    <Type style={{ ...textStyle[name], ...style }}>{children}</Type>
  )
  text.displayName = `Text-${name}`
  text.propTypes = {
    style: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
  }
  Text[name] = text
}

makeText('large_title', 'h1')
makeText('title_1', 'h1')
makeText('title_2', 'h2')
makeText('title_3', 'h3')
makeText('headline', 'h3')
makeText('body', 'p')
makeText('callout', 'p')
makeText('subhead', 'p')
makeText('footnote', 'p')
makeText('caption_1', 'p')
makeText('caption_2', 'p')

export default Text

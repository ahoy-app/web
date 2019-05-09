import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import MessageRow from './MessageRow'

const styles = {
  height: '100%',
  width: '100%',

  overflowY: 'scroll',

  padding: '5px 10px 5px 10px',
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}

const Messages = ({ messages, fetchOldMessages }) => {
  const anchorEl = useRef()
  const boxEl = useRef()

  useEffect(() => {
    anchorEl.current.scrollIntoView({ behavior: 'smooth' })
  }, messages.length)

  const _onScroll = () => {
    if (boxEl.current.scrollTop === 0) {
      console.log(fetchOldMessages())
    }
  }

  return (
    <div style={styles} ref={boxEl} onScroll={_onScroll}>
      {messages.map(message => (
        <MessageRow message={message} key={message.id} />
      ))}
      <div ref={anchorEl} />
    </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  fetchOldMessages: PropTypes.func.isRequired,
}
// export default Radium(Messages)
export default Messages

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import {
  roomSelector,
  fetchRoom,
  messagesSelector,
  fetchMessages,
} from '../redux/chats'

import Input from '../components/Input'
import Messages from '../components/Messages'

import { fetchOldMessages } from '../mocks/messages'
import { color } from '../style'

const styles = {
  background: color.background.light,

  height: '100%',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
}

const Room = ({ match, room, messages, fetchRoom, fetchMessages }) => {
  useEffect(() => {
    if (!room) fetchRoom(roomId)
    if (messages === undefined) fetchMessages(roomId)
  }, [room, messages, roomId])

  const { roomId } = match.params

  if (!room) {
    return <>Loading room info</>
  }
  if (messages === undefined) {
    return <>Loading messages</>
  }

  return (
    <div style={styles}>
      <Messages messages={messages} fetchOldMessages={fetchOldMessages} />
      <Input
        onChange={event => {
          console.log('Updated text:' + event.target.value)
        }}
        onSend={() => {
          console.log('Send click')
        }}
      />
    </div>
  )
}

Room.propTypes = {
  match: PropTypes.object,
  room: PropTypes.object,
  messages: PropTypes.array,
  fetchRoom: PropTypes.func,
  fetchMessages: PropTypes.func,
}

const mapStateToProps = (state, { match }) => ({
  room: roomSelector(state, match.params.roomId),
  messages: messagesSelector(state, match.params.roomId),
})
const mapDispatchToProps = dispatch => ({
  fetchRoom: roomId => dispatch(fetchRoom(roomId)),
  fetchMessages: roomId => dispatch(fetchMessages(roomId)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room)

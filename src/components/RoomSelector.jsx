import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { allRoomsSelector } from '../redux/chats'

import RoomBubble from './RoomBubble'
import UserBubble from './UserBubble'

import { color } from '../style'

const styles = {
  background: color.main.dark,
  height: '100%',
  width: '45px',

  padding: '0px 5px 0px 5px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
}

const RoomSelector = ({ rooms }) => (
  <div style={styles}>
    {rooms.map(room => (
      <div style={{ margin: '5px' }} key={room.id}>
        <RoomBubble room={room} />
      </div>
    ))}
    <div style={{ marginTop: 'auto', marginBottom: '5px' }}>
      <UserBubble />
    </div>
  </div>
)

RoomSelector.propTypes = {
  rooms: PropTypes.array.isRequired,
  fetchRooms: PropTypes.func,
}

const mapStateToProps = state => ({
  rooms: allRoomsSelector(state),
})

export default connect(mapStateToProps)(RoomSelector)

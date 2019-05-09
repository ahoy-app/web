import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { allRoomsSelector, fetchRoomList } from '../redux/chats'

import RoomBubble from './RoomBubble'
import Spacer from './Spacer'

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

const RoomSelector = ({ rooms, fetchRooms }) => {
  useEffect(() => {
    fetchRooms()
  }, [])
  return (
    <div style={styles}>
      {rooms.map(room => (
        <Spacer top={5} bottom={5} key={room.id}>
          <RoomBubble room={room} />
        </Spacer>
      ))}
    </div>
  )
}

RoomSelector.propTypes = {
  rooms: PropTypes.array.isRequired,
  fetchRooms: PropTypes.func,
}

const mapStateToProps = state => ({
  rooms: allRoomsSelector(state),
})
const mapDispatchToProps = dispatch => ({
  fetchRooms: () => dispatch(fetchRoomList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomSelector)

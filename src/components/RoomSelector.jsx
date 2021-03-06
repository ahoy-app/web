import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'

import RoomBubble from './RoomBubble'
import Spacer from './Spacer'

const styles = {
  background: 'linear-gradient(45deg, #045 0%, #9bb 100%)',
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
      <Spacer top={5} bottom={5} key={room}>
        <RoomBubble room={room} />
      </Spacer>
    ))}
  </div>
)

RoomSelector.propTypes = {
  rooms: PropTypes.array.isRequired,
}

export default Radium(RoomSelector)

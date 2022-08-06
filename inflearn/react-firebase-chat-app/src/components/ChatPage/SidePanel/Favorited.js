import React, { Component } from 'react';
import { FaRegSmileBeam } from 'react-icons/fa';
import { connect } from 'react-redux';
import {
  setCurrentChatRoom,
  setPrivateChatRoom
} from '../../../redux/actions/chatRoom_action';
import { dbService } from '../../../fbase';
import { child, off, onChildAdded, onChildRemoved, ref } from 'firebase/database';

export class Favorited extends Component {

  state = {
    favoritedChatRooms: [],
    userRef: ref(dbService, "users"),
    activeChatRoomId: ""
  }

  componentDidMount() {
    if (this.props.user) {
      this.addListeners(this.props.user.uid)
    }
  }
  
  componentWillUnmount() {
    if (this.props.user) {
      this.removeListener(this.props.user.uid);
    }
  }

  removeListener = (userId) => {
    const { userRef } = this.state;
    off(child(userRef, `${userId}/favoried`));
  }

  addListeners = (userId) => {
    const { userRef } = this.state;
    onChildAdded(child(userRef, `${userId}/favorited`), DataSnapshot => {
      const favoritedChatRoom = { id: DataSnapshot.key, ...DataSnapshot.val() }
      this.setState({
        favoritedChatRooms: [...this.state.favoritedChatRooms, favoritedChatRoom]
      })
    })
    onChildRemoved(child(userRef, `${userId}/favorited`), DataSnapshot => {
      const chatRoomToRemove = { id: DataSnapshot.key, ...DataSnapshot.val() };
      const filteredChatRooms = this.state.favoritedChatRooms.filter(chatRoom => {
        return chatRoom.id !== chatRoomToRemove.id;
      })
      this.setState({ favoritedChatRooms: filteredChatRooms })
    })
  }

  changeChatRoom = (room) => {
    this.props.dispatch(setCurrentChatRoom(room));
    this.props.dispatch(setPrivateChatRoom(false));
    this.setState({ activeChatRoomId: room.id })
  }

  renderFavoritedChatRooms = (favoritedChatRooms) =>
    favoritedChatRooms.length > 0 &&
    favoritedChatRooms.map(chatRoom => (
      <li key={chatRoom.id} onClick={() => this.changeChatRoom(chatRoom)} style={{
        backgroundColor: chatRoom.id === this.state.activeChatRoomId && "#ffffff45"
      }}>
        # {chatRoom.name}
      </li>
    ))
  render() {
    const { favoritedChatRooms } = this.state;
    return (
      <div>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <FaRegSmileBeam style={{ marginRignt: '3px' }} />
          RAVORITED (0)
        </span>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {this.renderFavoritedChatRooms(favoritedChatRooms)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.currentUser
  }
}
export default connect(mapStateToProps)(Favorited);

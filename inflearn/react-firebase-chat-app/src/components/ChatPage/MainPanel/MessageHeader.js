import React, { useEffect, useState } from 'react';
import { Col, Container, Form, InputGroup, Row, Image, Accordion, Card } from 'react-bootstrap';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { dbService } from '../../../fbase';
import { child, onValue, ref, remove, update } from 'firebase/database';

function MessageHeader({ handleSearchChange }) {

  const chatRoom = useSelector(state => state.chatRoom.currentChatRoom);
  const isPrivateChatRoom = useSelector(state => state.chatRoom.isPrivateChatRoom);
  const user = useSelector(state => state.user.currentUser);

  const [isFavorited, setIsFavorited] = useState(false);
  const usersRef = ref(dbService, "users");

  useEffect(() => {
    if (chatRoom && user) {
      addFavoriteListener(chatRoom.id, user.uid)
    }
  }, [])

  const addFavoriteListener = (chatRoomId, userId) => {
    onValue(child(usersRef, `${userId}/favorited`), data => {
      if (data.val() !== null) {
        const chatRoomIds = Object.keys(data.val());
        const isAlreadyFavorited = chatRoomIds.includes(chatRoomId);
        setIsFavorited(isAlreadyFavorited);
      }
    })
  }

  const handleFavorite = () => {
    if (isFavorited) {
      setIsFavorited(prev => !prev);
      remove(child(usersRef, `${user.uid}/favorited/${chatRoom.id}`))
    } else {
      setIsFavorited(prev => !prev);
      update(child(usersRef, `${user.uid}/favorited`), {
        [chatRoom.id]: {
          name: chatRoom.name,
          description: chatRoom.description,
          createdBy: {
            name: chatRoom.createdBy.name,
            image: chatRoom.createdBy.image
          }
        }
      })
    }
  }
  return (
    <div style={{
      width: '100%',
      height: '170px',
      border: '.2rem solid #ececec',
      borderRadius: '4px',
      padding: '1rem',
      marginBottom: '1rem'

    }}>
      <Container>
        <Row>
          <Col><h2>
            {isPrivateChatRoom
              ? <FaLock style={{ marginBottom: '10px', marginRight: '4px' }} />
              : <FaLockOpen style={{ marginBottom: '10px', marginRight: '4px' }} />}
            {chatRoom && chatRoom.name}
            {!isPrivateChatRoom &&
              <span style={{ cursor: 'pointer' }} onClick={handleFavorite}>
                {isFavorited
                  ? <MdFavorite style={{ marginBottom: '6px' }} />
                  : <MdFavoriteBorder style={{ marginBottom: '6px' }} />}
              </span>

            }
          </h2></Col>
          <Col><InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><AiOutlineSearch /></InputGroup.Text>
            <Form.Control
              onChange={handleSearchChange}
              placeholder="Search Messages"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup></Col>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p><Image src /> {" "} user name</p>
        </div>
        <Row>
          <Col>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Hi
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Posts Count</Accordion.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Hi
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MessageHeader;
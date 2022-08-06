import { child, push, ref, set } from 'firebase/database';
import { uploadBytesResumable, ref as strRef, getDownloadURL } from 'firebase/storage';
import React, { useRef, useState } from 'react';
import { Col, Form, ProgressBar, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { dbService, storageService } from '../../../fbase';

function MessageForm() {
  const chatRoom = useSelector(state => state.chatRoom.currentChatRoom)
  const user = useSelector(state => state.user.currentUser)
  const isPrivateChatRoom = useSelector(state => state.chatRoom.isPrivateChatRoom)
  const messagesRef = ref(dbService, "messages");
  const inputOpenImageRef = useRef();

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0)

  function guid() {
    function s4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  const createMessage = (fileUrl = null) => {

    const message = {
      timestamp: new Date(),
      messageId: guid(),
      user: {
        id: user.uid,
        name: user.displayName,
        image: user.photoURL
      }
    }

    if (fileUrl !== null) {
      message["image"] = fileUrl;
    } else {
      message["content"] = content;
    }
    return message;
  }

  const handleSubmit = async () => {
    if (!content) {
      setErrors(prev => prev.concat("Type contents first"));
      return;
    }
    setLoading(true);
    try {
      await set(push(child(messagesRef, chatRoom.id)), createMessage());
      setLoading(false);
      setContent("");
      setErrors([]);
    } catch (error) {
      setErrors(prev => prev.concat(error.message));
      setLoading(false);
      setTimeout(() => {
        setErrors([]);
      }, 5000)
    }
  }

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  }

  const getPath = () => {
    if (isPrivateChatRoom) {
      return `/message/private/${chatRoom.id}`
    } else {
      return `/message/public`
    }
  }
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const filePath = `${getPath()}/${file.name}`;
    const metadata = { contentType: file.type };

    try {
      const storageRef = strRef(storageService, filePath);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on("state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercentage(progress);
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              break;
            case 'storage/unknown':
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            set(push(child(messagesRef, chatRoom.id)), createMessage(downloadURL));
            setLoading(false);
          })
        }
      )
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            value={content}
            onChange={(e) => setContent(e.target.value)}
            as="textarea"
            rows={3} />
        </Form.Group>
      </Form>

      {
        !(percentage === 0 || percentage === 100) &&
        <ProgressBar variant="warning" label={`${percentage}%`} now={percentage} />
      }

      <div>
        {errors.map((error) => (
          <p style={{ color: 'red' }} key={error}>{error}</p>
        ))}
      </div>

      <Row>
        <Col>
          <button
            className="message-form-button"
            style={{ width: "100%" }}
            onClick={handleSubmit}
            disabled={loading ? true : false}
          >
            SEND
          </button>
        </Col>
        <Col>
          <button
            onClick={handleOpenImageRef}
            className="message-form-button"
            style={{ width: '100%' }}
            disabled={loading ? true : false}
          >
            UPLOAD
          </button>
        </Col>
      </Row>

      <input
        type="file"
        accept="image/jpeg, image/png"
        ref={inputOpenImageRef}
        style={{ display: "none" }}
        onChange={handleUploadImage}
      />
    </div>
  );
}

export default MessageForm;
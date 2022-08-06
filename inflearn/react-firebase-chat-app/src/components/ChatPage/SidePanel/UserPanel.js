import React, { useRef } from 'react';
import { Dropdown, Image } from 'react-bootstrap';
import { IoIosChatboxes } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { signOut, updateProfile } from 'firebase/auth';
import { authService, dbService, storageService } from '../../../fbase';
import { uploadBytesResumable, ref as strRef, getDownloadURL } from 'firebase/storage';
import { ref, update } from 'firebase/database';
import { setPhotoURL } from '../../../redux/actions/user_action';

function UserPanel() {
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const inputOpenImageRef = useRef();

  const handleLogout = () => {
    signOut(authService).then(() => {

    }).catch((error) => {

    });
  }
  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  }
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    const user = authService.currentUser;
    const metadata = { contentType: file.type };

    try {
      let uploadTask = uploadBytesResumable(strRef(storageService, `user_image/${user.uid}`), file, metadata);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
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
            // 프로필 이미지 수정
            updateProfile(user, {
              photoURL: downloadURL
            })

            dispatch(setPhotoURL(downloadURL))

            //데이터베이스 유저 이미지 수정
            update(ref(dbService, `users/${user.uid}`), { image: downloadURL })
          });
        }
      );
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div>
      <h3 style={{ color: 'white' }}><IoIosChatboxes />{" "} Chat App</h3>

      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <Image
          src={user && user.photoURL}
          style={{ width: '30px', height: '30px', marginTop: '3px' }} roundedCircle
        />
        <input
          type="file"
          accept="image/jpeg, image/png"
          ref={inputOpenImageRef}
          style={{ display: 'none' }}
          onChange={handleUploadImage}
        />
        <Dropdown>
          <Dropdown.Toggle
            style={{ background: 'transparent', border: '0px' }}
            id="dropdown-basic">
            {user && user.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={handleOpenImageRef}>프로필 사진 변경</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default UserPanel;
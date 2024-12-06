import React from 'react';
import { useSelector } from 'react-redux';
import css from './UserPanel.module.css';
import UserBar from '../UserBar/UserBar';
import { selectUserName } from '../../redux/user/selectors';

export default function UserPanel() {
  const userName = useSelector(selectUserName);

  return (
    <div className={css.userPanel}>
      <p>
        Hello, <span className={css.userName}>{userName || 'Guest'}</span>!
      </p>
      <UserBar />
    </div>
  );
}

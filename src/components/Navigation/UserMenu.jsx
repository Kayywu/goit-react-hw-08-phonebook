import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{user ? user.email : null}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;

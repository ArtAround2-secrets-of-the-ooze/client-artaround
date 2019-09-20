import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '../../AuthProvider';
import AuthHeader from './AuthHeader';
import UserForm from './UserForm';
import UserHome from '../home_pages/UserHome';

export default function AuthPage({ userById, currentUser }) {
  const { user: session } = useAuth0();
  const [idForMe, updateId] = useState('');

  const handleIdChange = (x) => updateId(x);

  useEffect(() => {
    if(session) {
      userById(session.sub);
      if(currentUser.userAuth0Id){
        handleIdChange(session.sub);
      }
      handleIdChange(session.sub);
    }

  }, [session]);

  const dataToLoad = () => {
    if(currentUser.userAuth0Id){
      return<UserHome />;
    }
    return<UserForm userAuth0Id={idForMe} getUser={userById} />;
  };
  
  const data = dataToLoad();

  return(
    <>
      <AuthHeader />
      {data}
    </>
  );
}

AuthPage.propTypes = {
  userById: PropTypes.func,
  currentUser: PropTypes.object
};
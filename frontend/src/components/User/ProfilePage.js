import React , { useContext }from 'react';

import { userContext } from '../../App.js';
import BackToHome from '../Fixed/BackToHome.js';

const ProfilePage = () => {
  // Replace this with actual data from your API or context
  const authUser = useContext(userContext)

  return (
    <>
    <BackToHome/>
    <div className="flex justify-center items-center min-h-screen bg-yellow-100">
      <div className="card w-96 bg-white shadow-xl p-5">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="avatar mb-4">
            <div className="w-24 h-24 rounded-full ring ring-yellow-400 ring-offset-2">
              <img src={authUser.profileImage || 'https://placehold.co/400'} alt="Profile" />
            </div>
          </div>

          {/* Username */}
          <h2 className="text-3xl font-semibold text-yellow-600">{authUser.username}</h2>

          {/* Phone Number */}
          <p className="text-lg text-gray-600 mt-2">
            <span className="font-bold">Phone: </span>{authUser.phone}
          </p>

          {/* Button to edit profile */}
          <button className="btn btn-primary mt-4 w-full">Edit Profile</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfilePage;

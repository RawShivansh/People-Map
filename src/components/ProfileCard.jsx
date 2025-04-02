
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="profile-card border rounded p-4 shadow">
      <img 
        src={profile.image} 
        alt={profile.name} 
        className="w-full h-32 object-cover rounded"
        onError={(e) => e.target.src = "https://via.placeholder.com/150"}
      />
      <h2 className="text-xl font-bold">{profile.name}</h2>
      <p>{profile.description}</p>

      {/* View Details Button */}
      {/* <Link 
        to={`/profile/${profile.id}`} 
        className="block mt-2 px-4 py-2 bg-green-500 text-white rounded text-center hover:bg-green-600"
      >
        View Details
      </Link> */}
      <Link to={`/profile/${profile.id}`}>
            <button className="view-details-btn">
                View Details
            </button>
       </Link>

      
      <button 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowMap(!showMap)}
      >
        {showMap ? "Hide Map" : "Summary"}
      </button>

 
      {showMap && (
        <div className="mt-4">
          <MapComponent lat={profile.lat} lng={profile.lng} />
        </div>
      )}
    </div>
  );
};

export default ProfileCard;







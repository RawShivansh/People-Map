import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import MapComponent from "../components/MapComponent";

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const { profiles } = useContext(ProfileContext);
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <p>Profile not found.</p>;

  return (
    <div className="profile-details">
      <img src={profile.image} alt={profile.name} />
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Interests:</strong> {profile.interests.join(", ")}</p>
      
      <MapComponent lat={profile.lat} lng={profile.lng} />

      <button className="go-back-btn" onClick={() => navigate("/")}>
        ← Go Back
      </button>
    </div>
  );
};

export default ProfileDetails;




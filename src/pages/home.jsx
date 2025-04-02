
import React, { useState, useContext } from "react";
import ProfileList from "../components/ProfileList";
import SearchFilter from "../components/SearchFilter";
import { ProfileContext } from "../context/ProfileContext";

const Home = () => {
  const { profiles } = useContext(ProfileContext);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);


  // const handleSearch = (query) => {
  //   const filtered = profiles.filter(profile =>
  //     profile.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredProfiles(filtered);
  // };

  const handleSearch = (query, filterType) => {
    let filtered = profiles;
  
    if (query.trim() !== "") {
      filtered = profiles.filter((profile) => {
        if (filterType === "name") {
          return profile.name.toLowerCase().includes(query.toLowerCase());
        } else if (filterType === "interests") {
          return profile.interests.some(interest => interest.toLowerCase().includes(query.toLowerCase()));
        }
        return false;
      });
    }
  
    setFilteredProfiles(filtered);
  };
  return (
    <div className="container mx-auto p-4">
 
      <SearchFilter onSearch={handleSearch} />

 
      {filteredProfiles.length > 0 ? (
        <ProfileList profiles={filteredProfiles} />
      ) : (
        <p className="text-center text-gray-500 mt-4">No profiles found.</p>
      )}
    </div>
  );
};

export default Home;







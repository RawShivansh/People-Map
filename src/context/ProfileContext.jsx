import { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    // {
    //   id: 1,
    //   name: "John Doe",
    //   image: "https://randomuser.me/api/portraits/men/1.jpg",
    //   description: "Software Engineer at TechCorp",
    //   email: "johndoe@example.com",
    //   phone: "123-456-7890",
    //   interests: ["Coding", "Gaming", "Reading"],
    //   lat: 40.7128,
    //   lng: -74.0060
    // },
    // {
    //   id: 2,
    //   name: "Jane Smith",
    //   image: "https://randomuser.me/api/portraits/women/2.jpg",
    //   description: "Graphic Designer at CreativeWorks",
    //   email: "janesmith@example.com",
    //   phone: "987-654-3210",
    //   interests: ["Design", "Photography", "Traveling"],
    //   lat: 37.7749,
    //   lng: -122.4194
    // }
    {
      id: 1,
      name: "Emily Carter",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      description: "Marketing Manager at Bright Media",
      email: "emily.carter@example.com",
      phone: "+1 (202) 555-0192",
      interests: ["Photography", "Traveling", "Digital Marketing"],
      lat: 40.7128,
      lng: -74.0060
    },
    {
      id: 2,
      name: "Daniel Thompson",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      description: "Software Engineer at InnovateX",
      email: "daniel.thompson@example.com",
      phone: "+1 (415) 555-0215",
      interests: ["Coding", "Chess", "Reading Sci-Fi"],
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 3,
      name: "Sophia Johnson",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      description: "Graphic Designer at PixelCraft",
      email: "sophia.johnson@example.com",
      phone: "+1 (310) 555-0178",
      interests: ["Illustration", "Typography", "Hiking"],
      lat: 34.0522,
      lng: -118.2437
    },
    {
      id: 4,
      name: "Michael Brown",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      description: "Data Scientist at DataLab",
      email: "michael.brown@example.com",
      phone: "+1 (646) 555-0143",
      interests: ["AI Research", "Math", "Cycling"],
      lat: 41.8781,
      lng: -87.6298
    },
    {
      id: 5,
      name: "Olivia Martinez",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      description: "Doctor at MedCare",
      email: "olivia.martinez@example.com",
      phone: "+1 (305) 555-0186",
      interests: ["Healthcare", "Yoga", "Cooking"],
      lat: 25.7617,
      lng: -80.1918
    },
    {
      id: 6,
      name: "James Wilson",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
      description: "Entrepreneur & Startup Mentor",
      email: "james.wilson@example.com",
      phone: "+1 (206) 555-0209",
      interests: ["Startups", "Investing", "Public Speaking"],
      lat: 47.6062,
      lng: -122.3321
    },
    {
      id: 7,
      name: "Ava Hernandez",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      description: "Fashion Designer at Vogue Styles",
      email: "ava.hernandez@example.com",
      phone: "+1 (213) 555-0112",
      interests: ["Fashion", "Sketching", "Modeling"],
      lat: 34.0522,
      lng: -118.2437
    },
    {
      id: 8,
      name: "William Scott",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      description: "Mechanical Engineer at AutoTech",
      email: "william.scott@example.com",
      phone: "+1 (702) 555-0197",
      interests: ["Cars", "Robotics", "Gaming"],
      lat: 36.1699,
      lng: -115.1398
    },
    {
      id: 9,
      name: "Isabella Lopez",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      description: "Chef & Food Blogger",
      email: "isabella.lopez@example.com",
      phone: "+1 (512) 555-0148",
      interests: ["Cooking", "Baking", "Food Photography"],
      lat: 30.2672,
      lng: -97.7431
    },
    {
      id: 10,
      name: "Benjamin Hall",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      description: "Financial Analyst at WallStreet Corp",
      email: "benjamin.hall@example.com",
      phone: "+1 (212) 555-0184",
      interests: ["Stock Market", "Economics", "Reading"],
      lat: 40.7128,
      lng: -74.0060
    },
    {
      id: 11,
      name: "Mia Gonzalez",
      image: "https://randomuser.me/api/portraits/women/60.jpg",
      description: "Biologist at Nature Research Institute",
      email: "mia.gonzalez@example.com",
      phone: "+1 (415) 555-0233",
      interests: ["Wildlife", "Conservation", "Camping"],
      lat: 37.7749,
      lng: -122.4194
    },
    {
      id: 12,
      name: "Alexander Perez",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      description: "Architect at Skyline Designs",
      email: "alexander.perez@example.com",
      phone: "+1 (305) 555-0167",
      interests: ["Architecture", "Urban Planning", "Sketching"],
      lat: 25.7617,
      lng: -80.1918
    },
    {
      id: 13,
      name: "Ella Adams",
      image: "https://randomuser.me/api/portraits/women/70.jpg",
      description: "Fitness Trainer & Influencer",
      email: "ella.adams@example.com",
      phone: "+1 (702) 555-0224",
      interests: ["Fitness", "Running", "Yoga"],
      lat: 36.1699,
      lng: -115.1398
    },
    {
      id: 14,
      name: "Christopher Lewis",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      description: "Cybersecurity Specialist",
      email: "chris.lewis@example.com",
      phone: "+1 (646) 555-0199",
      interests: ["Cybersecurity", "Hacking", "Blockchain"],
      lat: 41.8781,
      lng: -87.6298
    },
    {
      id: 15,
      name: "Grace Turner",
      image: "https://randomuser.me/api/portraits/women/80.jpg",
      description: "Teacher at Inspire Academy",
      email: "grace.turner@example.com",
      phone: "+1 (213) 555-0205",
      interests: ["Education", "Psychology", "Reading"],
      lat: 34.0522,
      lng: -118.2437
    }
  ]);


  const addProfile = (newProfile) => {
    setProfiles([...profiles, { id: Date.now(), ...newProfile }]);
  };


  const editProfile = (updatedProfile) => {
    setProfiles(profiles.map(profile => 
      profile.id === updatedProfile.id ? updatedProfile : profile
    ));
  };


  const deleteProfile = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile, editProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};






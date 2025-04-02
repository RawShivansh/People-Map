import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

const AdminPanel = () => {
  const { profiles, addProfile, editProfile, deleteProfile } = useContext(ProfileContext);
  const [form, setForm] = useState({ name: "", image: "", description: "", lat: "", lng: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editProfile(form);
    } else {
      addProfile(form);
    }
    setForm({ name: "", image: "", description: "", lat: "", lng: "" });
    setIsEditing(false);
  };

  const handleEdit = (profile) => {
    setForm(profile);
    setIsEditing(true);
  };

  return (
    <div className="admin-panel container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Admin Panel</h2>


      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="p-2 border rounded w-full" />
        <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Image URL" required className="p-2 border rounded w-full" />
        <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="p-2 border rounded w-full" />
        <input type="number" name="lat" value={form.lat} onChange={handleChange} placeholder="Latitude" required className="p-2 border rounded w-full" />
        <input type="number" name="lng" value={form.lng} onChange={handleChange} placeholder="Longitude" required className="p-2 border rounded w-full" />
        
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          {isEditing ? "Update Profile" : "Add Profile"}
        </button>
      </form>


      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="mb-3 border p-2 flex justify-between items-center">
            <span>{profile.name}</span>
            <div>
              <button onClick={() => handleEdit(profile)} className="px-3 py-1 bg-blue-500 text-white rounded mr-2">Edit</button>
              <button onClick={() => deleteProfile(profile.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;





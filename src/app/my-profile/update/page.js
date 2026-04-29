"use client";

import { useState } from "react";
import { authClient } from "@better-auth/next/client";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async () => {
    try {
      await authClient.updateUser({
        name,
        image
      });

      toast.success("Profile updated ✅");
    } catch {
      toast.error("Update failed ❌");
    }
  };

  return (
    <div className="p-4">
      <input placeholder="Name" onChange={e => setName(e.target.value)} className="border p-2 mb-2"/>
      <input placeholder="Image URL" onChange={e => setImage(e.target.value)} className="border p-2 mb-2"/>

      <button onClick={handleUpdate} className="bg-blue-500 text-white p-2">
        Update Information
      </button>
    </div>
  );
}
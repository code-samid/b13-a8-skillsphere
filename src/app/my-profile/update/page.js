"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleUpdate = async () => {
    try {
      const res = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, image }),
        credentials: "include",
      });

      if (!res.ok) throw new Error();

      toast.success("Profile updated ✅");

      router.push("/my-profile");
      router.refresh();

    } catch {
      toast.error("Update failed ❌");
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 space-y-3">
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <input
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <button
        onClick={handleUpdate}
        className="bg-green-600 text-white p-2 w-full rounded"
      >
        Update Information
      </button>
    </div>
  );
}
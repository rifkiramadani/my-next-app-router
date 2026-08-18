"use client";

import { useState } from "react";

const AdminProductPage = () => {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      `http://localhost:3000/api/revalidate?tag=products&secret=1234567`,
      {
        method: "POST",
      },
    );
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };

  return (
    <div>
      {status}
      <button
        onClick={() => revalidate()}
        className="bg-gray-300 text-black rounded-md cursor-pointer p-4 w-full h-96 flex justify-center items-center"
      >
        <div className="bg-black rounded-md p-4 text-white">Revalidate</div>
      </button>
    </div>
  );
};

export default AdminProductPage;

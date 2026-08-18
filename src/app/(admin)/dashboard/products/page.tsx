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
        className="bg-black text-white rounded-md cursor-pointer p-4 m-5"
      >
        Revalidate
      </button>
    </div>
  );
};

export default AdminProductPage;

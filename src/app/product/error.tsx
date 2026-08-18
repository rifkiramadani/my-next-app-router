"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something Went Wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-gray-800 text-white p-4 rounded-md"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;

"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export const AddButton = () => {
  const { pending, data, action, method } = useFormStatus();
  console.log("🚀 ~ AddButton ~ method:", method);
  console.log("🚀 ~ AddButton ~ action:", action);
  console.log("🚀 ~ AddButton ~ data:", data);

  return (
    <div className="mt-2">
      <button
        type="submit"
        className="bg-blue-200 text-black py-2 px-4 rounded"
        disabled={pending}
      >
        {pending ? "Adding" : "Add"}
      </button>
      <br />
      {pending && data ? `Đang thêm user: ${data.get("name")}` : null}
    </div>
  );
};

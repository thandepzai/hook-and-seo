import Link from "next/link";
import React from "react";

const DemoHookView = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-8 h-screen bg-[#ffd4db]">
      <Link
        href="/hook/use"
        className="p-4 w-[170px] text-center bg-slate-400 rounded-md text-2xl font-bold opacity-80 hover:opacity-100"
      >
        Demo Use
      </Link>
      <Link
        href="/seo"
        className="p-4 w-[170px] text-center bg-slate-400 rounded-md text-2xl font-bold opacity-80 hover:opacity-100"
      >
        Demo Seo
      </Link>
    </div>
  );
};

export default DemoHookView;

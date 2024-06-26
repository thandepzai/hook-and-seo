import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center p-8 h-screen bg-[#ffd4db]">
      <Link
        href="/hook"
        className="p-4 w-[170px] text-center bg-slate-400 rounded-md text-2xl font-bold opacity-80 hover:opacity-100"
      >
        Demo Hook
      </Link>
      <Link
        href="/seo"
        className="p-4 w-[170px] text-center bg-slate-400 rounded-md text-2xl font-bold opacity-80 hover:opacity-100"
      >
        Demo Seo
      </Link>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="page page-project">
      <div className="topbar">
        <Link className="back" href="/">
          <ArrowLeft />
          <span>Home</span>
        </Link>
      </div>
      <header className="p-header">
        <h1 className="p-title">
          <span>Page not found</span>
        </h1>
        <p className="p-summary">This page doesn&apos;t exist. It may have moved, or the link has a typo.</p>
      </header>
    </main>
  );
}

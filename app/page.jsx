'use client'

import { useEffect } from "react";
import { notFound } from "next/navigation";

export default function Home() {
  return notFound();
  

  useEffect(() => {
    window.location.href = "https://google.com"
  }, [])

  return (
    <>
      <main className="grandCntn">
        <div className="fdicLogoCntn"><a href="https://cdn1.onlineaccess1.com/cdn/depot/3308/4366/8d7a1cb117b7827559a004f16ac35368/assets/images/fdic_logo_large-101554d3eebb7c3c6fedb7d73549127b.png" target="_blank" rel="noopener noreferrer"><img src="https://www.dmayorfitness.com/fdic_logo.png" alt="" /></a></div>
      </main>
    </>
  );
}

"use client";
import Image from "next/image";
import JollyOrpheusClick from "@/components/JollyOrpheusClick";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className={"text-6xl self-center my-10"}>Haxmas Day 1</h1>
          <JollyOrpheusClick onClick={() => {console.log("boop!")}} />
        </div>
      </main>
    </div>
  );
}
"use client";
import Image from "next/image";
import JollyOrpheusClick from "@/components/JollyOrpheusClick";
import {useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0); // useState!
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f472a] to-[#1a5a3a] flex flex-col">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16 bg-linear-to-br from-[#C8102E] to-[#215732]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className={"text-6xl self-center my-10"}>Haxmas Day 1</h1>
          <p className={"text-3xl font-bold"}>times orpheus has been clicked: {count}</p>
          <JollyOrpheusClick onClick={() => {setCount(count + 1)}} />
            <p className={"text-3xl font-bold"}>click the orpheus to be awarded with a JOLLY GIFT.</p>
            <a href="https://github.com/Snowflake6413">made by Snowflake6413</a>
            <img src="https://assets.hackclub.com/flag-orpheus-left.png"></img>
            <a href="https://hackclub.com">click to join the hack club</a>
        </div>
      </main>
    </div>
  );
}
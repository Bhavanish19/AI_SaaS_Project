import type { Metadata } from "next";
import { IBM_Plex_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/home/header";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "@/components/ui/toaster";
// import { ORIGIN_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";
export default function Banner() {
  return (
    <section className="lg:max-w-6xl mx-auto flex flex-col z-0 items-center justify-center py-28 sm:pt-32 transition-all animate-in">
      <h1 className="py-6 text-center">
        Turn your words into{" "}
        <span className="underline underline-offset-8 decoration-dashed decoration-purple-200">
          captivating
        </span>{" "}
        blog posts
      </h1>
      <h2 className=" text-center px-4 lg:px-0 lg:max-w-4xl">
        Convert your video or voice into a Blog Post in seconds with the power
        of AI!
      </h2>

      <Button
        variant={"link"}
        className="mt-6 text-xl rounded-full px-12 py-8 lg:mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold shadow-lg hover:no-underline"
      >
        <Link href="/#pricing" className="flex gap-2 items-center">
          <span className="relative">Get SpeakEasy </span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </section>
  );
}
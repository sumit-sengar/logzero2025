"use client";

import dynamic from "next/dynamic";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const HomePageClient = dynamic(() => import("@/components/HomePageClient"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-10">
      <InfinitySpin width="200" color="#1E8767" />
    </div>
  ),
});

export default function HomePageHydrator() {
  return <HomePageClient />;
}

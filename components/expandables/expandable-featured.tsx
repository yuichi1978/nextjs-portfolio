"use client";

import { featuredData } from "@/data";
import React, { useState } from "react";
import FeaturedCard from "../cards/featured/featured-card";
import { cn } from "@/lib/utils";

export default function ExpandableFeatured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return (
    <div className="grid w-full lg:flex lg:justify-between lg:gap-x-4">
      {featuredData.slice(1).map((featured, index) => (
        <div
          key={index}
          className={cn(
            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in",
            index === hoveredIndex ? "lg:w-[40%]" : "lg:w-[33.33%]"
          )}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <FeaturedCard
            active={index === hoveredIndex }
            title={featured.title}
            tag={featured.tag}
            video={featured.video}
          />
        </div>
      ))}
    </div>
  );
}

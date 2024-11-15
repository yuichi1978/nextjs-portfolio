"use client";

import React, { useState, useEffect } from "react";
import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import FancyButton from "@/components/ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
import FullScreenMenu from "./full-screen-menu/full-screen-menu";
import ToggleButton from "./full-screen-menu/toggle-button";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [showToggle])

  return (
    <div className="w-full flex items-center justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text="Let's talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* Toggle button */}
      {showToggle && <ToggleButton open={open} setOpen={setOpen} />}
      {/* FullScreenMenu */}
      <AnimatePresence mode="wait">
        {open && <FullScreenMenu />}
      </AnimatePresence>
    </div>
  );
}

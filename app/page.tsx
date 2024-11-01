"use client";

import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import Card from "@/components/ui/card";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={3}
      resolution={2048}
    >
      (
        <div className="w-full p-20">
          <div className="max-w-2xl mx-auto">
          <Card title="Ui Components">...</Card>

          </div>
        </div>
      )
    </WaterWaveWrapper>
  );
}

import type { ReactNode } from "react";
import VisionGallery from "./VisionGallery";

export default function VisionLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <VisionGallery />
    </>
  );
}

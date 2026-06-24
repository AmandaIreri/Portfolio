import { useState } from "react";
import { Hero } from "./Hero";
import { Problem } from "./Problem";
import { ApproachResearch } from "./ApproachResearch";
import { DesignProcess } from "./DesignProcess";
import { KeyScreens } from "./KeyScreens";
import { SolutionHighlights } from "./SolutionHighlights";
import { ResultsImpact } from "./ResultsImpact";
import { RoleTools } from "./RoleTools";
import { NextProjects } from "./NextProjects";
import { VideoLightbox, VideoOrientation } from "../../../components/case-study/VideoLightbox";

interface ActiveVideo {
  src: string;
  label: string;
  orientation: VideoOrientation;
}

export function FlockrCaseStudy() {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const openVideo = (src: string, label: string, orientation: VideoOrientation = "landscape") =>
    setActiveVideo({ src, label, orientation });
  const closeVideo = () => setActiveVideo(null);

  return (
    <main>
      <Hero onPlayVideo={openVideo} />
      <Problem />
      <ApproachResearch />
      <DesignProcess />
      <KeyScreens onPlayVideo={openVideo} />
      <SolutionHighlights />
      <ResultsImpact />
      <RoleTools />
      <NextProjects />
      <VideoLightbox
        src={activeVideo?.src ?? null}
        label={activeVideo?.label}
        orientation={activeVideo?.orientation}
        onClose={closeVideo}
      />
    </main>
  );
}
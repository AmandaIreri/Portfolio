import { useState } from "react";
import { Hero } from "./Hero";
import { Challenge } from "./Challenge";
import { DesignProcess } from "./DesignProcess";
import { KeyScreens } from "./KeyScreens";
import { ResultsImpact } from "./ResultsImpact";
import { RoleTools } from "./RoleTools";
import { Reflections } from "./Reflections";
import { NextProjects } from "./NextProjects";
import { VideoLightbox, VideoOrientation } from "../../../components/case-study/VideoLightbox";

interface ActiveVideo {
  src: string;
  label: string;
  orientation: VideoOrientation;
}

export function QaribiaCaseStudy() {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  const openVideo = (src: string, label: string, orientation: VideoOrientation = "landscape") =>
    setActiveVideo({ src, label, orientation });
  const closeVideo = () => setActiveVideo(null);

  return (
    <main>
      <Hero />
      <Challenge />
      <DesignProcess />
      <KeyScreens onPlayVideo={openVideo} />
      <ResultsImpact />
      <RoleTools />
      <Reflections />
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
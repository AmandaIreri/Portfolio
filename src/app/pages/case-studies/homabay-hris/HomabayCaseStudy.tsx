import { Hero } from "./Hero";
import { Problem } from "./Problem";
import { ApproachProcess } from "./ApproachProcess";
import { BeforeAfter } from "./BeforeAfter";
import { KeyScreens } from "./KeyScreens";
import { SolutionHighlights } from "./SolutionHighlights";
import { ResultsImpact } from "./ResultsImpact";
import { RoleTools } from "./RoleTools";
import { Reflections } from "./Reflections";
import { NextProjects } from "./NextProjects";

export function HomabayCaseStudy() {
  return (
    <main>
      <Hero />
      <Problem />
      <ApproachProcess />
      <BeforeAfter />
      <KeyScreens />
      <SolutionHighlights />
      <ResultsImpact />
      <RoleTools />
      <Reflections />
      <NextProjects />
    </main>
  );
}
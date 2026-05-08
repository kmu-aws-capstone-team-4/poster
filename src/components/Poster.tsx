import Header from "./Header";
import HeroBlock from "./HeroBlock";
import TargetBlock from "./TargetBlock";
import FlowBlock from "./FlowBlock";
import ComparisonBlock from "./ComparisonBlock";
import EffectsBlock from "./EffectsBlock";
import FeaturesBlock from "./FeaturesBlock";
import ScreensBlock from "./ScreensBlock";
import ArchitectureBlock from "./ArchitectureBlock";
import TechStackBlock from "./TechStackBlock";
import PipelineDiagram from "./PipelineDiagram";
import Footer from "./Footer";

const sectionCardClass = "rounded-[5mm] border border-border bg-white";
const sectionCardStyle: React.CSSProperties = { padding: "5mm 6mm" };

function SectionCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`${sectionCardClass} flex flex-col`}
      style={{ ...sectionCardStyle, ...style }}
    >
      {children}
    </div>
  );
}

export default function Poster() {
  return (
    <div className="poster-frame">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 12% 6%, rgba(9,145,178,0.06) 0%, transparent 30%), radial-gradient(circle at 90% 0%, rgba(6,182,212,0.05) 0%, transparent 35%)",
        }}
      />

      <div
        className="relative h-full flex flex-col"
        style={{
          padding: "10mm 12mm 8mm",
          gap: "4mm",
        }}
      >
        <Header />

        <HeroBlock />

        <div
          className="grid flex-1"
          style={{
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.05fr)",
            gap: "4mm",
            alignItems: "stretch",
          }}
        >
          <div className="flex flex-col" style={{ gap: "4mm" }}>
            <SectionCard>
              <ScreensBlock />
            </SectionCard>
            <SectionCard>
              <TargetBlock />
            </SectionCard>
            <SectionCard>
              <FlowBlock />
            </SectionCard>
          </div>

          <div className="flex flex-col" style={{ gap: "4mm" }}>
            <SectionCard>
              <ComparisonBlock />
            </SectionCard>
            <SectionCard>
              <EffectsBlock />
            </SectionCard>
            <SectionCard>
              <FeaturesBlock />
            </SectionCard>
            <SectionCard>
              <TechStackBlock />
            </SectionCard>
          </div>

          <div className="flex flex-col" style={{ gap: "4mm" }}>
            <SectionCard style={{ gap: "3.5mm" }}>
              <ArchitectureBlock
                showTitle={true}
                showLayers={true}
                showImage={true}
                imageMaxHeight="none"
              />
              <PipelineDiagram />
            </SectionCard>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

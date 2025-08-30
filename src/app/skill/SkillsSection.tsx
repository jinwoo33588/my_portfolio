// app/(sections)/SkillsTools.tsx
import Section from "@/components/Section";
import IconTile from "@/components/IconTile";
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiShadcnui,
  SiNodedotjs, SiExpress, SiMysql,
  SiGithub, SiVercel, SiFigma, SiNotion,
  SiUnity, SiDotnet,
} from "react-icons/si";

const brand = {
  next: "text-black dark:text-white",
  react: "text-[#61DAFB]",
  ts: "text-[#3178C6]",
  tailwind: "text-[#06B6D4]",
  shadcn: "text-white",
  node: "text-[#339933]",
  express: "text-white",
  mysql: "text-[#4479A1]",
  github: "text-white",
  vercel: "text-white",
  figma: "text-[#F24E1E]",
  notion: "text-white",
  unity: "text-white",
  csharp: "text-[#239120]",
};

export default function SkillsTools() {
  return (
    <Section
      id="skills"
      zebra={["dark","muted"]}
      index={2}
      eyebrow="Skills"
      title="Skill & Tools"
      subtitle="프로젝트와 포트폴리오에서 실제로 사용한 기술 스택"
      showLine
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* FrontEnd */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">FrontEnd</h3>
          <div className="flex flex-wrap gap-3">
            <IconTile title="Next.js"><SiNextdotjs className={`text-2xl ${brand.next}`} /></IconTile>
            <IconTile title="React"><SiReact className={`text-2xl ${brand.react}`} /></IconTile>
            <IconTile title="TypeScript"><SiTypescript className={`text-2xl ${brand.ts}`} /></IconTile>
            <IconTile title="TailwindCSS"><SiTailwindcss className={`text-2xl ${brand.tailwind}`} /></IconTile>
            <IconTile title="shadcn/ui"><SiShadcnui className={`text-2xl ${brand.shadcn}`} /></IconTile>
          </div>
        </div>

        {/* Backend / DB / Tools */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Backend · Tools</h3>
          <div className="flex flex-wrap gap-3">
            <IconTile title="Node.js"><SiNodedotjs className={`text-2xl ${brand.node}`} /></IconTile>
            <IconTile title="Express"><SiExpress className={`text-2xl ${brand.express}`} /></IconTile>
            <IconTile title="MySQL"><SiMysql className={`text-2xl ${brand.mysql}`} /></IconTile>
            <IconTile title="GitHub"><SiGithub className={`text-2xl ${brand.github}`} /></IconTile>
            <IconTile title="Vercel"><SiVercel className={`text-2xl ${brand.vercel}`} /></IconTile>
            <IconTile title="Figma"><SiFigma className={`text-2xl ${brand.figma}`} /></IconTile>
            <IconTile title="Notion"><SiNotion className={`text-2xl ${brand.notion}`} /></IconTile>
          </div>
        </div>

        {/* Game Dev */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Game Dev</h3>
          <div className="flex flex-wrap gap-3">
            <IconTile title="Unity">
              <SiUnity className={`text-2xl ${brand.unity}`} />
            </IconTile>
            {/* C# / .NET 아이콘(Simple Icons) 사용 */}
            <IconTile title="C# / .NET">
              <SiDotnet className={`text-2xl ${brand.csharp}`} />
            </IconTile>
          </div>
          {/* <p className="mt-2 text-sm text-muted-foreground">
            HaginGame — 상태 머신 기반 캐릭터 제어, HP-속도 연동, Dash 스킬, 적 추적 AI(2종)
          </p> */}
        </div>
      </div>
    </Section>
  );
}

import Section from "@/components/Section";
import AboutFull from "./AboutFull";

export default function AboutSection() {
  return (
    <Section
      id="about"
      zebra={["dark","muted"]}
      index={1}
      eyebrow="About"
      title="개발자 소개"
      subtitle="관심사, 타임라인"
      showLine
    >
      <AboutFull />
    </Section>
  );
}

// components/pdf/ResumePDF.tsx
import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";

// ResumeContent 타입이 여기서 필요하면 import 해도 되고, 구조만 맞으면 생략 가능
import type { ResumeContent } from "@/contents/resume"; // 동일 타입을 재사용했다면
// 또는: import type { ResumeContent } from "@/types/content";

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, fontFamily: "Helvetica" },
  h1: { fontSize: 20, fontWeight: 700, marginBottom: 6 },
  sub: { fontSize: 12, color: "#444", marginBottom: 16 },
  section: { marginBottom: 16 },
  h2: { fontSize: 14, fontWeight: 700, marginBottom: 6 },
  p: { fontSize: 11, lineHeight: 1.5, color: "#222" },
  small: { fontSize: 9, color: "#555" },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  badgeWrap: { flexDirection: "row", flexWrap: "wrap", gap: 4, marginTop: 6 },
  badge: { borderWidth: 1, borderColor: "#ccc", paddingHorizontal: 6, paddingVertical: 2, borderRadius: 3, fontSize: 9 },
  hr: { height: 1, backgroundColor: "#eee", marginVertical: 16 },
  groupTitle: { fontSize: 10, color: "#555", marginTop: 6, marginBottom: 4 },
  li: { fontSize: 11, lineHeight: 1.5, color: "#222", marginBottom: 2 },
});

function Line() {
  return <View style={styles.hr} />;
}

export default function ResumePDF({ content }: { content: ResumeContent }) {
  const { header, summary, skills, education, experience, projects } = content;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.h1}>{header.name}</Text>
            {/* 우측 작은 라벨 자리, 필요 없으면 지워도 됨 */}
            <Text style={styles.small}>Resume</Text>
          </View>
          <Text style={styles.sub}>{header.roleLine}</Text>

          <View>
            <Text>이메일: {header.email}</Text>
            {header.githubUrl && <Link src={header.githubUrl}>Github: {header.githubUrl}</Link>}
            {header.portfolioUrl && <Link src={header.portfolioUrl}>Portfolio: {header.portfolioUrl}</Link>}
          </View>
        </View>

        <Line />

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.h2}>요약</Text>
          <Text style={styles.p}>{summary}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.h2}>핵심 기술</Text>
          {skills.map(({ group, items }) => (
            <View key={group}>
              <Text style={styles.groupTitle}>{group}</Text>
              <View style={styles.badgeWrap}>
                {items.map((it) => (
                  <Text key={it} style={styles.badge}>{it}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Career & Education */}
        <View style={styles.section}>
          <Text style={styles.h2}>경력 & 학력</Text>

          {education.map((e) => (
            <View key={`${e.school}-${e.period}`} style={{ marginTop: 6 }}>
              <View style={styles.rowBetween}>
                <Text style={{ fontWeight: 600 }}>
                  {e.school}{e.major ? ` — ${e.major}` : ""}
                </Text>
                <Text style={styles.small}>{e.period}</Text>
              </View>
            </View>
          ))}

          {experience?.map((x) => (
            <View key={`${x.company}-${x.period}`} style={{ marginTop: 6 }}>
              <View style={styles.rowBetween}>
                <Text style={{ fontWeight: 600 }}>
                  {x.company}{x.role ? ` — ${x.role}` : ""}
                </Text>
                <Text style={styles.small}>{x.period}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.h2}>프로젝트</Text>

          {projects.map((p) => (
            <View key={`${p.title}-${p.period}`} style={{ marginTop: 8 }}>
              <View style={styles.rowBetween}>
                <Text style={{ fontWeight: 600 }}>{p.title}</Text>
                <Text style={styles.small}>{p.period}</Text>
              </View>

              <View style={styles.badgeWrap}>
                {p.tags.map((t) => (
                  <Text key={t} style={styles.badge}>{t}</Text>
                ))}
              </View>

              <Text style={[styles.p, { marginTop: 6 }]}>{p.summary}</Text>

              <View style={{ marginTop: 4 }}>
                {p.bullets.map((b, idx) => (
                  <Text key={idx} style={styles.li}>
                    {b.label ? `${b.label}: ` : ""}{b.text}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
// Server Component
function cx(...c:(string|false|null|undefined)[]){return c.filter(Boolean).join(" ");}

type ThemeKey = "paper" | "muted" | "dark" | "brand";

export default function Section({
  id,
  className,
  children,
  // 헤더 옵션
  title, subtitle, eyebrow, align="left", showLine=false,
  // 테마 옵션
  theme="paper",
  zebra,
  index,
  // 레이아웃 옵션
  leftWidthClass = "w-56", // ← 왼쪽 여백 폭 (nav 폭과 동일)
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  showLine?: boolean;
  theme?: ThemeKey;
  zebra?: readonly ThemeKey[];
  index?: number;
  leftWidthClass?: string;
}) {
  const t: ThemeKey =
    zebra && typeof index === "number" ? zebra[index % zebra.length] : theme;

  const isDark = t === "dark" || t === "brand";

  return (
    <section
      id={id}
      data-section-theme={t}
      className={cx(
        "group/section",
        "min-h-screen snap-start flex", // ← 레일 + 콘텐츠
        // 섹션 전체 배경/글자 (토큰)
        "bg-[rgb(var(--section-bg))] text-[rgb(var(--section-fg))]",
        // 안전망: 변수 실패 시 즉시 대비 보장
        "data-[section-theme=dark]:bg-black data-[section-theme=dark]:text-white",
        "data-[section-theme=brand]:text-white",
        isDark && "dark",
        className
      )}
    >
      {/* 왼쪽 레일: 이 섹션 높이만큼만 색이 칠해짐 */}
      <div
        className={cx(
          "hidden md:block shrink-0 border-r",
          leftWidthClass, // 예: w-56
          "border-[rgb(var(--section-line))]",
          // dark 안전망
          "data-[section-theme=dark]:border-white/20"
        )}
        aria-hidden
      />

      {/* 오른쪽 실제 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col justify-center gap-8 py-16">
        {(title || subtitle || eyebrow) && (
          <div className={cx("space-y-3 px-4 sm:px-6 lg:px-8", align === "center" && "text-center")}>
            {eyebrow && (
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                {eyebrow}
              </div>
            )}
            {title && <h2 className="text-3xl sm:text-4xl font-semibold">{title}</h2>}
            {subtitle && (
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl ml-10">
              {subtitle}
              </p>
            )}
            {showLine && <div className="h-px w-full bg-[rgb(var(--section-line))]" />}
          </div>
        )}

        {/* section body */}
        <div className="px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { useScrollReveal } from "../../../components/useScrollReveal";
import { SectionHeader } from "../../../components/case-study/SectionHeader";
import { PhoneFrame } from "../../../components/case-study/PhoneFrame";
import { CaseStudyImage } from "../../../components/case-study/CaseStudyImage";
import { homabayAssets } from "./assets";

const COMPARISONS = [
  {
    category: "Onboarding & Authentication",
    before: homabayAssets.beforeAfter.signIn.before,
    after: homabayAssets.beforeAfter.signIn.after,
    beforeLabel: "SignIn 1.jpeg",
    afterLabel: "SignIn — Redesigned",
    improvements: [
      "Cleaner typography with clear hierarchy",
      "Stronger county branding on welcome screen",
      "Improved form field spacing and labels",
      "Better button hierarchy and touch targets",
    ],
  },
  {
    category: "Dashboard & Today's Status",
    before: homabayAssets.beforeAfter.homepage.before,
    after: homabayAssets.beforeAfter.homepage.after,
    beforeLabel: "Homepage 1.jpeg",
    afterLabel: "Dashboard — Redesigned",
    improvements: [
      "Personalized welcome with user name",
      "Clear quick stats cards at a glance",
      "Glanceable attendance overview section",
      "Consistent iconography and color usage",
    ],
  },
  {
    category: "Attendance Management",
    before: homabayAssets.beforeAfter.attendance.before,
    after: homabayAssets.beforeAfter.attendance.after,
    beforeLabel: "Attendance 1.jpeg",
    afterLabel: "Attendance — Redesigned",
    improvements: [
      "Rich attendance records with statistics",
      "Remote clock-in with live timer",
      "Daily logs with clear status indicators",
      "Better data visualization and spacing",
    ],
  },
  {
    category: "Leave Management",
    before: homabayAssets.beforeAfter.leave.before,
    after: homabayAssets.beforeAfter.leave.after,
    beforeLabel: "Leave 1.jpeg",
    afterLabel: "Leave — Redesigned",
    improvements: [
      "Clear leave balances display",
      "Intuitive application form flow",
      "Filtered history with status tracking",
      "Modern card-based layout",
    ],
  },
];

export function BeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const visible = useScrollReveal(ref);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#F5F8FA", padding: "80px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <SectionHeader
            eyebrow="Transformation"
            heading="Before & After"
            description="Side-by-side comparisons showing the evolution from the original dated interface to the modern, intuitive redesign. Every change was driven by usability, clarity, and county staff needs."
          />
        </div>

        <div style={{ marginTop: 8 }}>
          {COMPARISONS.map((item, i) => (
            <div
              key={item.category}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s`,
                marginBottom: i === COMPARISONS.length - 1 ? 0 : 56,
              }}
            >
              {/* Category label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 3,
                    borderRadius: 2,
                    backgroundColor: "#7EC8E3",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#0B1D2E",
                    opacity: 0.7,
                  }}
                >
                  {item.category}
                </p>
              </div>

              {/* Phones + improvements grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr] gap-8 items-start">
                {/* Before */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#0B1D2E",
                      opacity: 0.4,
                      marginBottom: 10,
                    }}
                  >
                    Before
                  </p>
                  <PhoneFrame tilt={-2}>
                    <CaseStudyImage
                      src={item.before}
                      label={item.beforeLabel}
                      aspectRatio="9/19"
                      alt={`${item.category} — before`}
                    />
                  </PhoneFrame>
                </div>

                {/* After */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#7EC8E3",
                      marginBottom: 10,
                    }}
                  >
                    After
                  </p>
                  <PhoneFrame tilt={2}>
                    <CaseStudyImage
                      src={item.after}
                      label={item.afterLabel}
                      aspectRatio="9/19"
                      alt={`${item.category} — after`}
                    />
                  </PhoneFrame>
                </div>

                {/* Improvements list */}
                <div style={{ paddingTop: 28 }}>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#0B1D2E",
                      opacity: 0.35,
                      marginBottom: 14,
                    }}
                  >
                    Key Improvements
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {item.improvements.map((imp, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          marginBottom: 12,
                          opacity: visible ? 1 : 0,
                          transform: visible ? "translateX(0)" : "translateX(12px)",
                          transition: `opacity 0.4s ease ${0.3 + i * 0.1 + j * 0.06}s, transform 0.4s ease ${0.3 + i * 0.1 + j * 0.06}s`,
                        }}
                      >
                        <span
                          style={{
                            color: "#4ADE80",
                            fontSize: 13,
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: 13.5,
                            color: "#0B1D2E",
                            opacity: 0.7,
                            lineHeight: 1.55,
                          }}
                        >
                          {imp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider between sections */}
              {i < COMPARISONS.length - 1 && (
                <div
                  style={{
                    height: 1,
                    background:
                      "linear-gradient(90deg, transparent, rgba(11,29,46,0.08), transparent)",
                    marginTop: 56,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
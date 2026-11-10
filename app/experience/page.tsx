import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { SocialLinks } from "@/components/SocialLinks";
import { ExperienceList } from "@/components/ExperienceList";
import { ArrowLeft } from "@/components/Icons";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Experience",
  description: `Experience and education of ${site.firstName} ${site.lastName}.`,
};

export default function ExperiencePage() {
  return (
    <main className="page page-project">
      <div className="topbar">
        <Link className="back" href="/">
          <ArrowLeft />
          <span>Home</span>
        </Link>
        <SocialLinks />
      </div>

      <header className="p-header">
        <h1 className="p-title">
          <span>Experience</span>
        </h1>
        <p className="p-summary">Clubs, teams, and work outside of class.</p>
      </header>

      <section className="exp exp-page" aria-label="All experience">
        <ExperienceList items={site.experience} />
      </section>

      <section className="exp" aria-labelledby="edu-title">
        <h2 id="edu-title" className="section-title">
          Education
        </h2>
        <div className="exp-item">
          <div className="exp-logo exp-logo-text" aria-hidden="true">
            UVA
          </div>
          <div className="exp-body">
            <div className="exp-head">
              <h3 className="exp-role">{site.education.school}</h3>
              <span className="exp-dates">{site.education.dates}</span>
            </div>
            <p className="exp-degree">{site.education.degree}</p>
            <p className="exp-detail">{site.education.detail}</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

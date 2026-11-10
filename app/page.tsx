import type { CSSProperties } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Name } from "@/components/Name";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowRight } from "@/components/Icons";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="page">
      <div className="topbar">
        {site.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="avatar" src={site.avatar.src} alt={site.avatar.alt} width={64} height={64} />
        ) : null}
        <SocialLinks />
      </div>

      <header className="intro">
        <Name first={site.firstName} last={site.lastName} />
        <p className="tagline">{site.tagline}</p>
      </header>

      <section className="about" aria-label="About">
        {site.about.map((paragraph, i) => (
          <p key={i} style={{ "--i": i } as CSSProperties}>
            {paragraph}
          </p>
        ))}
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title" className="section-title">
          Projects
        </h2>
        <ul className="proj-list">
          {projects.map((project, i) => (
            <li key={project.slug} className="proj" data-reveal style={{ "--i": i } as CSSProperties}>
              {project.cover ? (
                <div
                  className={`proj-thumb ${project.cover.panel ? "is-panel" : ""}`}
                  style={project.cover.panel ? ({ "--panel": project.cover.panel } as CSSProperties) : undefined}
                  aria-hidden="true"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.cover.src} alt="" loading="lazy" decoding="async" />
                </div>
              ) : null}
              <div className="proj-body">
              <div className="proj-head">
                <h3 className="proj-name">
                  <Link className="proj-link" href={`/projects/${project.slug}/`}>
                    {project.name}
                    <ArrowRight className="proj-arrow" />
                  </Link>
                </h3>
                <span className="proj-status">{project.status}</span>
              </div>
              <p className="proj-summary">{project.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="exp" aria-labelledby="exp-title">
        <h2 id="exp-title" className="section-title">
          Experience
        </h2>
        <ul className="exp-list">
          {site.experience.map((item, i) => (
            <li key={item.role + item.org} className="exp-item" data-reveal style={{ "--i": i } as CSSProperties}>
              <div className="exp-head">
                <h3 className="exp-role">
                  {item.role} <span className="exp-org">· {item.org}</span>
                </h3>
                <span className="exp-dates">{item.dates}</span>
              </div>
              <ul className="exp-points">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="exp" aria-labelledby="edu-title">
        <h2 id="edu-title" className="section-title">
          Education
        </h2>
        <div className="exp-item">
          <div className="exp-head">
            <h3 className="exp-role">{site.education.school}</h3>
            <span className="exp-dates">{site.education.dates}</span>
          </div>
          <p className="exp-degree">{site.education.degree}</p>
          <p className="exp-detail">{site.education.detail}</p>
        </div>
      </section>

      <section className="facts" aria-labelledby="facts-title" data-reveal>
        <h2 id="facts-title" className="section-title">
          Fun facts
        </h2>
        <ul>
          {site.funFacts.map((fact, i) => (
            <li key={fact} style={{ "--i": i } as CSSProperties}>
              {fact}
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}

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
            </li>
          ))}
        </ul>
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

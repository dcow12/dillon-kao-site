import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import { SiteFooter } from "@/components/SiteFooter";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="page page-project">
      <div className="topbar">
        <Link className="back" href="/#projects">
          <ArrowLeft />
          <span>All projects</span>
        </Link>
        <SocialLinks />
      </div>

      <header className="p-header">
        <h1 className="p-title">
          <span>{project.name}</span>
        </h1>
        <p className="p-summary">{project.summary}</p>
        <ul className="p-meta" aria-label="Details">
          <li>{project.status}</li>
          <li>Started {project.started}</li>
          {project.team ? <li>{project.team}</li> : null}
        </ul>
        <p className="p-stack">{project.stack.join(" · ")}</p>
      </header>

      {project.cover ? (
        <figure className="p-cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.cover.src} alt={project.cover.alt} />
        </figure>
      ) : null}

      <section className="p-section" data-reveal aria-labelledby="idea">
        <h2 id="idea">The idea</h2>
        {project.idea.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <section className="p-section" data-reveal aria-labelledby="highlights">
        <h2 id="highlights">Highlights</h2>
        <ul className="notes">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="p-section" data-reveal aria-labelledby="how">
        <h2 id="how">How it works</h2>
        <ol className="flow" aria-label="Pipeline">
          {project.how.flow.map((step, i) => (
            <li key={step}>
              <span className="flow-step">{step}</span>
              {i < project.how.flow.length - 1 ? <ArrowRight className="flow-arrow" /> : null}
            </li>
          ))}
        </ol>
        <ul className="notes">
          {project.how.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      {project.links?.length ? (
        <section className="p-section" aria-labelledby="links">
          <h2 id="links">Links</h2>
          <ul className="p-links">
            {project.links.map((link) => (
              <li key={link.href}>
                <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <nav className="p-next" aria-label="Next project">
        <Link href={`/projects/${next.slug}/`}>
          <span>Next: {next.name}</span>
          <ArrowRight />
        </Link>
      </nav>

      <SiteFooter />
    </main>
  );
}

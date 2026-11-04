import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { CopyEmail } from "./CopyEmail";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "./Icons";

const ICONS = { github: GitHubIcon, linkedin: LinkedInIcon, instagram: InstagramIcon };

// Logo links at the top of every page: GitHub, LinkedIn, Instagram, then email.
export function SocialLinks() {
  return (
    <nav className="social" aria-label="Links and contact">
      {site.links.map((link, i) => {
        const Icon = ICONS[link.icon];
        return (
          <a
            key={link.href}
            className={`social-link social-${link.icon}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            data-label={link.label}
            style={{ "--i": i } as CSSProperties}
          >
            <Icon />
          </a>
        );
      })}
      <CopyEmail email={site.email} index={site.links.length} />
    </nav>
  );
}

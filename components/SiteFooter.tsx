import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <p>
        Want to build something together? <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p className="footer-copy">
        © {new Date().getFullYear()} {site.firstName} {site.lastName}
      </p>
    </footer>
  );
}

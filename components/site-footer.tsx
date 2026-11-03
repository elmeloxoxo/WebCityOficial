import Link from "next/link";

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { navItems, site, whatsappUrl } from "@/lib/site";

const serviceLinks = [
  { href: "/servicios#web", label: "Sitios web" },
  { href: "/servicios#apps", label: "Apps móviles" },
  { href: "/servicios#planes-web", label: "Planes y precios" },
  { href: "/servicios#extras", label: "Servicios extra" },
  { href: "/servicios#faq", label: "Preguntas frecuentes" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href="/" aria-label="WebCity — ir al inicio">
              <Logo />
            </Link>
            <p>
              Estudio digital de Iquitos. Diseñamos sitios web y aplicaciones móviles
              para que los negocios de la Amazonía crezcan en internet.
            </p>
            <div className="site-footer__socials">
              {site.social.map((social) => (
                <a
                  key={social.label}
                  className="social-link"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} en ${social.label}`}
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-labelledby="footer-explorar">
            <h2 id="footer-explorar" className="site-footer__title">
              Explorar
            </h2>
            <ul className="site-footer__list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-servicios">
            <h2 id="footer-servicios" className="site-footer__title">
              Servicios
            </h2>
            <ul className="site-footer__list">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="site-footer__title">Contacto</h2>
            <ul className="site-footer__list">
              <li>
                <a href={`mailto:${site.email}`}>
                  <Icon name="mail" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <span>
                  <Icon name="pin" />
                  {site.addressShort}
                </span>
              </li>
              <li>
                <span>
                  <Icon name="clock" />
                  {site.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {site.name}. Hecho en Iquitos, Perú.
          </p>
          <p>Estudio digital de la FISI · UNAP.</p>
          <div className="site-footer__legal">
            <Link href="/contacto">Trabajemos juntos</Link>
            <a href="#contenido">Volver arriba ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

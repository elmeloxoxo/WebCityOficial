"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, site, whatsappUrl } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container site-header__inner">
          <Link href="/" aria-label="WebCity — ir al inicio">
            <Logo />
          </Link>

          <nav className="nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <ThemeToggle />
            <Link href="/contacto" className="btn btn--primary btn--sm header__cta">
              Hablemos
              <Icon name="arrow" />
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
              <span className="sr-only">
                {open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="menu-movil"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-menu__nav" aria-label="Navegación móvil">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <small>{String(index + 1).padStart(2, "0")}</small>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__foot">
          <a href={`mailto:${site.email}`}>
            <Icon name="mail" />
            {site.email}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" />
            {site.phoneDisplay}
          </a>
          <Link href="/contacto" className="btn btn--primary mobile-menu__cta">
            Cuéntanos tu idea
            <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
}

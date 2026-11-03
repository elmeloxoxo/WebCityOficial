import { clients } from "@/lib/site";

export function ClientMarquee() {
  const loop = [...clients, ...clients];

  return (
    <section className="marquee" aria-label="Negocios que confían en WebCity">
      <p className="marquee__label">Negocios de Iquitos que ya dieron el paso</p>
      <div className="marquee__viewport">
        <div className="marquee__track">
          {loop.map((client, index) => (
            <span
              className="marquee__item"
              key={`${client}-${index}`}
              aria-hidden={index >= clients.length}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

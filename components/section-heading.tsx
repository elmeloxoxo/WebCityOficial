import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  center?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  center = false,
  id,
}: SectionHeadingProps) {
  return (
    <div className={`section-head${center ? " section-head--center" : ""}`}>
      <div className="section-head__intro">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-head__title" id={id}>
          {title}
        </h2>
        {description ? <p className="lede">{description}</p> : null}
      </div>
      {action ? <div className="section-head__action">{action}</div> : null}
    </div>
  );
}

import Image from "next/image";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "logo__mark" }: LogoMarkProps) {
  return (
    <Image
      src="/webcity-mark.webp"
      alt=""
      aria-hidden="true"
      className={className}
      width={1470}
      height={780}
      sizes="64px"
    />
  );
}

export function Logo({
  className = "logo",
}: {
  className?: string;
}) {
  return (
    <span className={className}>
      <LogoMark />
      <span className="logo__text">
        Web<span>City</span>
      </span>
    </span>
  );
}

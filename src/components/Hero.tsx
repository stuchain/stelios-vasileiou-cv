import { bio, profile } from "../data/generated";

export default function Hero() {
  const heroLines = bio.length > 0
    ? bio
    : [profile.tagline ?? "", profile.taglineLine2 ?? ""].filter(Boolean);

  return (
    <div className="section section--first hero">
      <div className="hero-inner">
        <h1 className="hero-name">{profile.name}</h1>
        {heroLines.map((line, index) => (
          <p key={`${line}-${index}`} className={index === 0 ? "hero-tagline" : "hero-meta"}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

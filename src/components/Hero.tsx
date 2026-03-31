import { profile } from "../data/generated";

export default function Hero() {
  return (
    <div className="section section--first hero">
      <div className="hero-inner">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">
          Software Developer, based in Athens, Greece with experience in the Danish banking sector, UI architecture, and enterprise integrations
        </p>
        <p className="hero-meta">
          Bachelor thesis on Ethereum tokenization; built a Solana-based secure channel for decentralized identity verification; developed an IoT Oracle Gateway for connecting IoT telemetry with blockchain-based verification.
        </p>
      </div>
    </div>
  );
}

interface BackToTopProps {
  visible: boolean;
}

export default function BackToTop({ visible }: BackToTopProps) {
  function scrollToTop() {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <a
      href="#hero"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className={`back-to-top${visible ? " back-to-top--visible" : ""}`}
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}

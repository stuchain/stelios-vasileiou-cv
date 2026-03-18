import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'resume', 'skills', 'projects', 'contact'] as const

export function useActiveSection(): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    function update() {
      const trigger = window.scrollY + window.innerHeight * 0.3;
      let current: string | null = null;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) {
          current = id;
        }
      }
      setActiveId(current);
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [])

  return activeId
}

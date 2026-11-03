import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const timer = window.setTimeout(() => setActive(false), 1050);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`route-transition ${active ? "is-active" : ""}`} aria-hidden="true">
      <span className="route-panel route-panel-top" />
      <span className="route-panel route-panel-bottom" />
      <span className="route-transition-line" />
      <span className="route-transition-mark">SI</span>
      <span className="route-transition-copy">Research · Design · Engineering</span>
    </div>
  );
}

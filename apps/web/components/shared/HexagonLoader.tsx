import React from "react";
import "./HexagonLoader.css";

interface HexagonLoaderProps {
  loading?: boolean;
  className?: string;
}

export function HexagonLoader({ loading = true, className = "" }: HexagonLoaderProps) {
  return (
    <div className={`preloader ${loading ? "loading" : ""} ${className}`}>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="slice" />
      ))}
    </div>
  );
}

export default HexagonLoader;

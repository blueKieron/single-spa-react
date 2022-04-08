
import React from "react";
import './button.css'

export default function Button(props) {
  const {
    children,
    disabled = false,
    loading = false,
    className = "",
    ...remainingProps
  } = props;
  const background =
    disabled || loading ? "opacity-50 bg-secondary" : "";
  return (
    <button
      className={`mb-8 font-bold py-2 px-4 rounded ${background} ${className}`}
      disabled={disabled || loading}
      {...remainingProps}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
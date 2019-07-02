import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-dark mt-5 text-center"
        style={{ backgroundColor: "#e3f2fd", padding: "2.5rem" }}
      >
        Copyright &copy; {new Date().getFullYear()} Yemirka Molina
      </footer>
    </div>
  );
}

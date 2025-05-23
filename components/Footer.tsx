import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[#fbb03b] py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center sm:flex-row">
        <span className="text-sm">
          © {currentYear} Pčelarska udruga „Vrisak“ Vrgorac. Sva prava pridržana.
        </span>
      </div>
    </footer>
  );
}
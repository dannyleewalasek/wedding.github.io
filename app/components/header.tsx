import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 64; // height of your fixed header in pixels
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="w-full flex items-center justify-between p-4 bg-white shadow-sm fixed top-0 left-0 z-50">
      <h1 className="text-xl font-semibold">Danny & Robyns Wedding</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-base">
        {["home","schedule","travel","accommodation","important-info","q-and-a"].map((id) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className="hover:opacity-70 transition-opacity"
          >
        {id === "q-and-a" ? "Q & A" : id === "important-info" ? "Important Info" : id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-3 bg-white rounded-full shadow hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl">☰</span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4 md:hidden z-50">
          {["home","schedule","travel","accommodation","important-info","q-and-a"].map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-left hover:opacity-70 transition-opacity"
            >
              {id === "q-and-a" ? "Q & A" : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

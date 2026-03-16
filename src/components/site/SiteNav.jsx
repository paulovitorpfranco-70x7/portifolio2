import { Link } from "react-router-dom";

const items = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function SiteNav() {
  return (
    <div className="flex items-center justify-between text-[0.7rem] font-medium uppercase tracking-[0.22em] text-stone-500">
      <Link to="/" className="transition-colors hover:text-stone-950">
        Home
      </Link>

      <div className="flex items-center gap-5">
        {items.slice(1).map((item) => (
          <Link key={item.label} to={item.to} className="transition-colors hover:text-stone-950">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

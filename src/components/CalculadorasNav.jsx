// src/components/ui/CalculadorasNav.jsx
import { NavLink } from "react-router-dom";

const links = [
  { path: "/calculadora-ahorros", label: "Ahorros" },
  { path: "/calculadora-deudas", label: "Deudas" },
  { path: "/calculadora-intereses", label: "Intereses" },
  { path: "/calculadora-inversiones", label: "Inversiones" },
  { path: "/calculadora-hipoteca", label: "Hipoteca" },
];

const CalculadorasNav = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-4 mb-8 mt-10">
      {links.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `text-sm px-4 py-2 rounded-full border transition ${
              isActive
                ? "bg-[#FB2C36] text-white border-[#FB2C36]"
                : "text-white border-white/30 hover:bg-white/10"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default CalculadorasNav;

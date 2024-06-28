import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  title: string;
  active: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, active, onClick }) => {
  const isRDV = title === "Prendre RDV";

  const rdvButton = isRDV
    ? "bg-blue text-white px-4 rounded-3xl hover:text-white hover:bg-secondary"
    : "";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative block font-medium py-2 rounded text-black  ${rdvButton}`}
    >
      <span className="relative z-10">{title}</span>
      {!isRDV && active && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 mx-1 left-0 right-0 h-1 bg-pink rounded-full"
        />
      )}
    </Link>
  );
};

export default NavLink;

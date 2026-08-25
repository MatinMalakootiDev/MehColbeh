import { NavLink } from "react-router-dom";
import clsx from "clsx";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useSidebar } from "../hooks/useSidebar";

const navLinks = [
  { to: "/dashboard", label: "خانه", icon: HiOutlineHome },
  { to: "/bookings", label: "رزرو ها", icon: HiOutlineCalendarDays },
  { to: "/cabins", label: "کلبه ها", icon: HiOutlineHomeModern },
  { to: "/users", label: "کاربران", icon: HiOutlineUsers },
  { to: "/settings", label: "تنظیمات", icon: HiOutlineCog6Tooth },
];

const MainNav = () => {
  const { closeSidebar } = useSidebar();

  return (
    <nav>
      <ul className="flex flex-col gap-3" onClick={closeSidebar}>
        {navLinks.map(({ to, label, icon: Icon }) => (
          <li key={to} className="group">
            <NavLink
              to={to}
              className={({ isActive }) =>
                clsx("navlink", {
                  "bg-neutral-50 text-neutral-800": isActive,
                  "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800":
                    !isActive,
                })
              }>
              {({ isActive }) => (
                <>
                  <Icon
                    className={clsx("icon", {
                      "text-brand-600": isActive,
                      "text-neutral-400 group-hover:text-brand-600": !isActive,
                    })}
                  />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;

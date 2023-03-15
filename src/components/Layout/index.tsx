import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  // navLinkText,
} from "./layout.module.css";

export interface LayoutProps {
  pageTitle: string;
  children: React.ReactElement;
}

const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Excise",
    path: "/excise",
  },
];

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          {routes.map((item) => (
            <li key={item.path} className={navLinkItem}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

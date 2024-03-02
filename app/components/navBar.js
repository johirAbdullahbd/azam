"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <ul>
          <li>
            <Link href="/">
              <div className={`${styles.text} ${pathname === "/" ? styles.actives : ""}`} onClick={toggleNavbar}>
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className={`${styles.text} ${pathname === "/about" ? styles.actives : ""}`} onClick={toggleNavbar}>
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <div className={`${styles.text} ${pathname === "/projects" ? styles.actives : ""}`} onClick={toggleNavbar}>
                Projects
              </div>
            </Link>
          </li>{" "}
          <li>
            <Link href="/dream">
              <div className={`${styles.text} ${pathname === "/dream" ? styles.actives : ""}`} onClick={toggleNavbar}>
                Dream
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className={`${styles.text} ${pathname === "/contact" ? styles.actives : ""}`} onClick={toggleNavbar}>
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.toggle} onClick={toggleNavbar}>
        <div className={styles.toggleBar}></div>
        <div className={styles.toggleBar}></div>
        <div className={styles.toggleBar}></div>
      </div>
    </nav>
  );
};

export default Navbar;

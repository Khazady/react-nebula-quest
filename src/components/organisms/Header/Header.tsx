import LogoIcon from "@/assets/brand/Logo.svg?react";
import CartIcon from "@/assets/icons/Cart.svg?react";
import CartColoredIcon from "@/assets/icons/CartСolored.svg?react";
import { Link } from "@/components/atoms";
import { BurgerButton, Drawer, NavItems } from "@/components/molecules";
import "./Header.sass";
import { dictionary } from "@/lib/dictionary.ts";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isTabletUp = useMediaQuery("(min-width: 768px)");

  // Ensure drawer closes when switching to desktop layout
  useEffect(() => {
    if (isTabletUp && isDrawerOpen) setIsDrawerOpen(false);
  }, [isTabletUp, isDrawerOpen]);

  const navLinks = [
    ...dictionary.header.nav.map((label) => (
      <Link key={label} href="#">
        {label}
      </Link>
    )),
    <Link key="cart" href="#" className="header__cart">
      <CartIcon className="header__cart-icon header__cart-icon--default" />
      <CartColoredIcon className="header__cart-icon header__cart-icon--hover" />
    </Link>,
  ];

  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <LogoIcon className="header__logo-icon" />
      </Link>
      <BurgerButton
        open={isDrawerOpen}
        onToggle={() => setIsDrawerOpen((o) => !o)}
      />

      {isTabletUp ? (
        <NavItems
          orientation="horizontal"
          className="header__nav header__nav--desktop"
        >
          {navLinks}
        </NavItems>
      ) : (
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <NavItems
            orientation="vertical"
            className="header__nav header__nav--mobile"
          >
            {navLinks}
          </NavItems>
        </Drawer>
      )}
    </header>
  );
};

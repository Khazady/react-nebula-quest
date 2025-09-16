import CartIcon from "@/assets/Cart.svg?react";
import LogoIcon from "@/assets/Logo.svg?react";
import {Link} from "@/components/atoms";
import {BurgerButton, Drawer, NavItems} from "@/components/molecules";
import "./Header.sass";
import {dictionary} from "@/lib/dictionary.ts";
import {useState} from "react";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    ...dictionary.header.nav.map((label) => (
      <Link key={label} href="#">{label}</Link>
    )),
    <Link key="cart" href="#" className="header__cart">
      {/*todo: hover gradient*/}
      <CartIcon className="header__cart-icon"/>
    </Link>
  ];

  return (
    <header className="header">
      <Link href="/" className='header__logo'>
        <LogoIcon className="header__logo-icon"/>
      </Link>
      <BurgerButton open={isDrawerOpen} onToggle={() => setIsDrawerOpen((o) => !o)}/>

      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <NavItems orientation="vertical" className="header__nav header__nav--mobile">
          {navLinks}
        </NavItems>
      </Drawer>

      <NavItems orientation="horizontal" className="header__nav header__nav--desktop">
        {navLinks}
      </NavItems>
    </header>
  );
};

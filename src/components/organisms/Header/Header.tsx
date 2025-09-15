import Cart from "@/assets/Cart.svg?react";
import Logo from "@/assets/Logo.svg?react";
import {Link} from "@/components/atoms";
import {NavItems} from "@/components/molecules";
import "./Header.sass";
import {dictionary} from "@/lib/dictionary.ts";

export const Header = () => {
  const navLinks = [
    ...dictionary.header.nav.map((label) => (
      <Link key={label} href="#">{label}</Link>
    )),
    <Link key="cart" href="#" className="header__cart">
      {/*todo: hover gradient*/}
      <Cart className="header__cart-icon"/>
    </Link>
  ];

  return (
    <header className="header">
      <Link href="/" className='header__logo'>
        <Logo className="header__logo-icon"/>
      </Link>
      <NavItems orientation="vertical" className="header__nav header__nav--mobile">
        {navLinks}
      </NavItems>

      <NavItems orientation="horizontal" className="header__nav header__nav--desktop">
        {navLinks}
      </NavItems>
    </header>
  );
};

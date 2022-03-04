import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <nav>
        <div className="wrapper">
          <ul>
            <li className="home">
              <Link href="/">
                <a className="home__icon">
                  <img src="/images/gem-icon.gif" alt="Gem" className="logo" />
                </a>
              </Link>
              <Link href="/">
                <a className="home__name">Jen Arevalo</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className="menu">
              {/* Technically, this should be a `button`. */}
              <a href="#" onClick={toggleOpen}>
                <i className="zmdi zmdi-menu" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="nav" className={clsx("overlay", { open })}>
        {/* Technically, this should be a `button`. */}
        <a href="#" className="closebtn" onClick={toggleOpen}>
          <i className="zmdi zmdi-close" />
        </a>
        <div className="overlay-content">
          <div className="wrapper">
            <ul>
              <li>
                <a href="/work/boundlessvr">Boundless VR</a>
              </li>
              <li>
                <a href="/work/artfactory">Virginia ArtFactory</a>
              </li>
              <li>
                <a href="/work/jjvision">Prioritize Your Eyes</a>
              </li>
              <li>
                <a href="/work/workshop">Local Board Retreat</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/work/giftsar">wrapping.gifts App</a>
              </li>
              <li>
                <a href="/work/levelup">Level Up</a>
              </li>
              <li>
                <a href="/work/rfm">Ready For More?</a>
              </li>
              <li>
                <a href="/work/doglogapp">DogLog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

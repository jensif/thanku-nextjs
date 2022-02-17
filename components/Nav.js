import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  const toggleMenuOpen = (event) => {
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
              <a href="#" onClick={toggleMenuOpen}>
                <i className="zmdi zmdi-menu" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="nav" className={clsx("overlay", { open })}>
        {/* Technically, this should be a `button`. */}
        <a href="#" className="closebtn" onClick={toggleMenuOpen}>
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
                <a href="/work/tsp">The Skatepark Project</a>
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
                <a href="/work/doglogapp">DogLog App</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

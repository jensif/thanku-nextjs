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
        <Link href="#" passHref className="closebtn" onClick={toggleMenuOpen}>
          <i className="zmdi zmdi-close" />
        </Link>
        <div className="overlay-content">
          <div className="wrapper">
            <ul>
              <li>
                <Link href="/work/boundlessvr" passHref>Boundless VR</Link>
              </li>
              <li>
                <Link href="/work/artfactory" passHref>Virginia ArtFactory</Link>
              </li>
              <li>
                <Link href="/work/jjvision" passHref>Prioritize Your Eyes</Link>
              </li>
              <li>
                <Link href="/work/tsp" passHref>The Skatepark Project</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/work/giftsar" passHref>wrapping.gifts App</Link>
              </li>
              <li>
                <Link href="/work/levelup" passHref>Level Up</Link>
              </li>
              <li>
                <Link href="/work/rfm" passHref>Ready For More?</Link>
              </li>
              <li>
                <Link href="/work/doglogapp" passHref>DogLog App</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

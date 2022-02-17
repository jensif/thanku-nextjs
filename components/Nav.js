import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

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
              <Link href="/" passHref className="home__icon">
                  <Image src="/images/gem-icon.gif" alt="Gem" className="logo" />

              </Link>
              <Link href="/" passHref className="home__name">Jen Arevalo
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/about" passHref>
                About
              </Link>
            </li>
            <li className="menu">
              <Link href="#" passHref onClick={toggleMenuOpen}>
                <i className="zmdi zmdi-menu" />
              </Link>
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

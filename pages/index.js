import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Page from "../components/Page";

import iBoundless from "../public/images/work/boundlessvr-thumb.jpg";
import iArtFactory from "../public/images/work/artfactory-thumb.jpg";
import iJJV from "../public/images/work/jjcampaign-thumb.jpg";
import iTSP from "../public/images/work/tsp-thumb.jpg";
import iGiftsAR from "../public/images/work/giftsar-thumb.jpg";
import iLevelUp from "../public/images/work/levelup-thumb.jpg";
import iReadyForMore from "../public/images/work/rfm-thumb.jpg";
import iDoglog from "../public/images/work/doglog-thumb.jpg";

export default function Home() {
  return (
    <Page>
      <div className="hero">
        <div className="wrapper">
          <h1>ui/x designer & developer</h1>
          <Image
            src="/images/gem.gif"
            alt="gem animation"
            title="Don't be a hard rock when you really are a gem."
            width={1132}
            height={235}
          />
        </div>
      </div>
      <div className="showcase">
        <div className="wrapper">
          <ul className="showcase__gallery">
          <li className="gallery__project">
            <Link href="/work/boundlessvr">
              <a>
                <Image
                  src={iBoundless}
                  placeholder="blur"
                  alt="Boundless Florida VR"
                  title="Boundless Florida VR"
                />
                <figure>
                  <h4>Boundless VR</h4>
                  <h5>UI / UX / Mobile App Design</h5>
                </figure>
              </a>
            </Link>
          </li>
          <li className="gallery__project">
            <Link href="/work/artfactory">
              <a>
                <Image
                  src={iArtFactory}
                  placeholder="blur"
                  title="VA Art Factory"
                  alt="VA Art Factory"
                />
                <figure>
                  <h4>Virginia ArtFactory</h4>
                  <h5>Visual Design / UI / UX</h5>
                </figure>
              </a>
            </Link>
          </li>
          <li className="gallery__project">
            <Link href="/work/jjvision">
              <a>
                <Image
                  src={iJJV}
                  placeholder="blur"
                  title="JJ Vision"
                  alt="JJ Vision"
                />
                <figure>
                  <h4>Prioritize Your Eyes</h4>
                  <h5>Visual Design / Motion Graphics</h5>
                </figure>
              </a>
            </Link>
          </li>
          <li className="gallery__project">
            <Link href="/work/tsp">
              <a>
                <Image
                  src={iTSP}
                  placeholder="blur"
                  title="Tony Hawk Skapteboard Project"
                  alt="Tony Hawk Skapteboard Project"
                />
                <figure>
                  <h4>The Skatepark Project</h4>
                  <h5>Evaluation Design</h5>
                </figure>
              </a>
            </Link>
          </li>
            <li className="gallery__project">
            <Link href="/work/giftsar">
              <a>
                <Image
                  src={iGiftsAR}
                  placeholder="blur"
                  title="wrapping.gifts AR app"
                  alt="wrapping.gifts AR app"
                />
                <figure>
                  <h4>wrapping.gifts app</h4>
                  <h5>ARKit</h5>
                </figure>
              </a>
            </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/levelup">
                <a>
                  <Image
                    src={iLevelUp}
                    placeholder="blur"
                    title="Level Up"
                    alt="Level Up"
                  />
                  <figure>
                    <h4>Level Up</h4>
                    <h5>Visual Design / Front-End</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/rfm">
                <a>
                  <Image
                    src={iReadyForMore}
                    placeholder="blur"
                    title="Ready For More?"
                    alt="Ready For More?"
                  />
                  <figure>
                    <h4>Ready For More?</h4>
                    <h5>Branding / UI / UX / Front-End</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/doglogapp">
                <a>
                  <Image
                    src={iDoglog}
                    placeholder="blur"
                    title="DogLog"
                    alt="DogLog"
                  />
                  <figure>
                    <h4>DogLog App</h4>
                    <h5>UI / UX</h5>
                  </figure>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
}

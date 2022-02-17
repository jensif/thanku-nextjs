import Link from "next/link";
import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/posters-hero.jpg";
import iBiggie from "../../public/images/work/posters-biggie.jpg";
import iBeyonce from "../../public/images/work/posters-beyonce.jpg";
import iCauliflower from "../../public/images/work/posters-cauliflower.jpg";
import iEscapee from "../../public/images/work/posters-escapee.jpg";
import iHoneybear1 from "../../public/images/work/posters-honeybear-1.jpg";
import iHoneybear2 from "../../public/images/work/posters-honeybear-2.jpg";
import iSunModels from "../../public/images/work/posters-sunmodels.jpg";
import iJamiexx from "../../public/images/work/posters-jamiexx.jpg";

export default function Posters() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Posters"
              alt="Posters"
            />
            <div className="photo__flag">
              <p>Creative Direction</p>
              <h3>Posters</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Posters</h1>
            <p>Music posters for annual gallery event</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:{" "}
                <a
                  href="https://www.jacksonville.aiga.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AIGA Jacksonville
                </a>
              </li>
              <li>Role: Creative Direction, Illustration, Print</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              At the tail end of each summer, AIGA Jacksonville hosts the{" "}
              <Link href="/work/alwayssummer">
                <a>Always Summer Poster Show + Mixtape</a>
              </Link>
              . A premiere event for hosting the greater Jacksonville design
              scene, the organization asks designers to participate in the
              gallery event. The past six consecutive years, I've been able to
              submit artwork for the show. I became interested in the event
              because it married my two favorite loves: design and music. Each
              year, I attempt to challenge my artistic boundaries.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            In 2012, I first experimented with low-poly illustrations. Using
            black and white hues for Notorious B.I.G "Party & Bullshit (Ratatat
            Remix)," I found it easier to manipulate the gradients and connect
            each of the polygons to create a futuristic figure with depth. This
            poster measured 24 x 36. It was a biggie! I was pleased with the
            outcome and decided to flex my geometric illustrations again in 2016
            for the Beyoncé track "Sorry".
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iBiggie}
              placeholder="blur"
              title="Party & Bullshit poster"
              alt="Party & Bullshit poster"
            />
          </div>
          <div className="details__split">
            <Image
              src={iBeyonce}
              placeholder="blur"
              title="Sorry poster"
              alt="Sorry poster"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Not only is designing around a song challenging — attempting to pick
            the essential summer song is hard because there are so many great
            ones from past and present. The two songs had been on heavy rotation
            for me everywhere I could plug into. The quintessential feel good
            music. I wanted to pass the emotion along to people checking out the
            posters.
          </p>
          <p>
            I have always had a passion for space and the cosmos, so both
            posters include a space theme. I wanted to keep the poster as simple
            as possible by letting the imagery do most of the talking while you
            listened to the song playing in the gallery.The music should do the
            talking while the posters serving as the visual extension.
            Simplistic yet so stylistic. The poster on the left is Dan le Sac vs
            Scroobius Pip "Cauliflower" (PRDCTV Remix). The poster on the right
            is Architecture In Helsinki "Escapee" (Polish Ambassador Remix).
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iCauliflower}
              placeholder="blur"
              title="Cauliflower poster"
              alt="Cauliflower poster"
            />
          </div>
          <div className="details__split">
            <Image
              src={iEscapee}
              placeholder="blur"
              title="Escapee poster"
              alt="Escapee poster"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            For 2014, I created two posters for one song. Father John Misty
            "Honeybear" reverbs with striking contrasts in the lyrics. The back
            and forth tug of everything being doomed, but everything being fine
            is enough to leave one lost in emotion. The track inspired a
            (functioning) maze with the words embedded into it all leading up to
            the honey bear. The poster was printed on glossy photo paper with
            the sheen of the paper making the yellow color appear gold.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iHoneybear1}
              placeholder="blur"
              title="Honeybear poster white"
              alt="Honeybear poster white"
            />
          </div>
          <div className="details__split">
            <Image
              src={iHoneybear2}
              placeholder="blur"
              title="Honeybear poster black"
              alt="Honeybear poster black"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            On July 5, 2015, I embarked on a trip to Victoria, BC. Loading up my
            iPhone with electronic music for the multiple hikes, I became hooked
            on Odesza and Jamie XX. At the time of my visit to British Columbia,
            fires engulfed most of the forests in Vancouver. It was one of the
            hottest, driest summers. The left poster is for Odesza "Sun Models"
            track. Inspired by the Copernican Model, "the Sun would be the
            embodiment of the eternal, all-powerful, and light and life-giving,"
            powerful enough to cover the mountains of BC in a blanket of smoke.
          </p>
          <p>
            The poster on the right is for Jamie XX's "Good Times". After
            leaving the mountains of Vancouver, I took a ferry to Victoria and
            enjoyed the pristine Canadian waters. Good times were had in
            Victoria.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iSunModels}
              placeholder="blur"
              title="Sun Models poster"
              alt="Sun Models poster"
            />
          </div>
          <div className="details__split">
            <Image
              src={iJamiexx}
              placeholder="blur"
              title="Good Times poster"
              alt="Good Times poster"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

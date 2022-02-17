import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/levelup-hero.jpg";
import iFlow from "../../public/images/work/levelup-flow.jpg";
import iLevels from "../../public/images/work/levelup-levels.jpg";
import iGameplay from "../../public/images/work/levelup-gameplay.jpg";
import iCharacter from "../../public/images/work/levelup-character.jpg";
import iHats from "../../public/images/work/levelup-character-hats.jpg";
import iHeroes from "../../public/images/work/levelup-heroes-sketch.jpg";
import iCondom from "../../public/images/work/levelup-condom.gif";
import iLogoSketch from "../../public/images/work/levelup-logo-sketch.jpg";
import iLogoComps from "../../public/images/work/levelup-logo-comps.jpg";
import iDisplay from "../../public/images/work/levelup-optimized-display.jpg";
import iNycDay from "../../public/images/work/levelup-nyc-day.jpg";
import iNycNight from "../../public/images/work/levelup-nyc-night.jpg";

export default function LevelUp() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Level Up"
              alt="Level Up"
            />
            <div className="photo__flag">
              <p>Visual Design / Front-End</p>
              <h3>Level Up</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Level Up: An Epic Swiping Adventure</h1>
            <p>Reducing teen birth rates in the United States</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:{" "}
                <a href="https://powertodecide.org/" rel="noopener noreferrer">
                  Power to Decide
                </a>
              <li>(originally known as The National Campaign to Prevent Teen Pregnancy)
              </li>
              </li>
              <li>Role: Visual Design, Front-End Development, Branding</li>
            </ul>
            <ul>
              <li>Creative Director: Shane Santiago</li>
              <li>Developers: Jeff Will, Julian Bravard, Husani Oakley</li>
              <li>Illustrations & Animations: Sam Gilbert</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              The National Campaign to Prevent Teen and Unplanned Pregnancy
              created a program dubbed StayTeen with ongoing resources,
              communications and games designed to make sex education and birth
              control awareness fun and engaging.
            </p>
            <p>
              In 2017, StayTeen dedicated an entire month to focus
              communications around the issue, and SJ&P led the development of
              its flagship element, a mobile-focused game called Level Up: An
              Epic Swiping Adventure. The immersive game allows players to
              create a customized character to represent themselves throughout
              the experience in which the levels mimic the cadence of a school
              year, along with customizing their school crush.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            With today’s advancements in contraceptive methods, we now have many
            different ways to help practice sex safely. These methods differ in
            many ways, including condoms, prescription pills, implants, shots
            and more. But they all have one common goal — to prevent pregnancy.
            Through personification, we can identify the differences and
            advantages of each contraception, as they join forces and fight
            against the disruptive impact of teen pregnancy. By treating these
            unique methods as ragtag members of a team of heroes, we can
            highlight each character and their unique qualities in the fight
            against unplanned pregnancy.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iFlow}
            placeholder="blur"
            title="Game flow"
            alt="Game flow"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            This responsive browser-based game pits the player against the
            pressures of being a teen. In the guise of a classic vertical
            shooter (1942, Galaga), the player uses gesture input, by touch or
            mouse, to defeat encroaching pressures. Customizable player avatars
            team up with their trusty birth control sidekicks as they progress
            through “worlds” focused on learning more about each type (á la
            Megaman), and how and in what situations to employ them, unlocking
            them for future use. Successfully progressing through the “condom
            world,” for example, unlocks the use of the “condom shield,” which
            gives the player more hit points, as well as a shareable info card
            detailing its special abilities and stats. Knowing when and how to
            use your sidekicks is important as the levels get more difficult.
            When players reach the final level – prom night, they’re required to
            use all of their previously acquired tactics and unlocks.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iLevels}
              placeholder="blur"
              title="Level Up scenes"
              alt="Level Up scenes"
            />
          </div>
          <div className="details__split">
            <Image
              src={iGameplay}
              placeholder="blur"
              title="Level Up game play"
              alt="Level Up game play"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The gameplay is designed to pit players against all of the pressures
            and challenges teens face today that could sway their judgment and
            knowledge about relationships and sex, including drugs and alcohol,
            peer influence and pressure to have sex. As the pressures advance,
            users vanquish them by swiping in the appropriate shape on their
            screen, earning special powers along the way — represented by
            personified birth control “heroes,” each with educational tips and
            methods of defeating enemies.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iCharacter}
              placeholder="blur"
              title="Level Up character creator"
              alt="Level Up character creator"
            />
          </div>
          <div className="details__split">
            <Image
              src={iHats}
              placeholder="blur"
              title="Level Up unlock hats"
              alt="Level Up unlock hats"
            />
          </div>
          <div className="details__split">
            <Image
              src={iHeroes}
              placeholder="blur"
              title="Level Up heroes sketch"
              alt="Level Up heroes sketch"
            />
          </div>
          <div className="details__split">
            <Image
              src={iCondom}
              title="Level Up heroes"
              alt="Level Up heroes"
            />
          </div>
          <div className="details__split">
            <Image
              src={iLogoSketch}
              placeholder="blur"
              title="Level Up logo sketch"
              alt="Level Up logo sketch"
            />
          </div>
          <div className="details__split">
            <Image
              src={iLogoComps}
              placeholder="blur"
              title="Level Up logo comps"
              alt="Level Up logo comps"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            While the game is optimized for mobile devices, it’s also playable
            on desktops to ensure maximum reach and engagement among its
            audience.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iDisplay}
            placeholder="blur"
            title="Mobile and desktop view"
            alt="Mobile and desktop view"
          />
          <div className="details__button">
            <a href="https://web.archive.org/web/20170825094611/https://stayteen.org/levelup/" rel="noopener noreferrer">
              <button>Play Level Up!</button>
            </a>
          </div>
        </div>
      </div>
      <div className="callout callout--quote">
        <div className="wrapper">
          <p>
            And while the idea of teens fending off liquored advances by the
            objects of their affection may give adult users a twinge of sadness,
            or quite possibly bring back memories, the point is fairly made:
            teens will face these situations in high school or later on, and
            need to know how to protect themselves sooner rather than later.
          </p>
          <cite>Janet Burns, Forbes</cite>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iNycDay}
              placeholder="blur"
              title="Level Up in NYC"
              alt="Level Up in NYC"
            />
          </div>
          <div className="details__split">
            <Image
              src={iNycNight}
              placeholder="blur"
              title="Level Up in NYC"
              alt="Level Up in NYC"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

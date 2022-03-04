import Link from "next/link";
import Image from "next/image";

import Page from "../../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iDeck from "../../public/images/work/workshop-deck.gif";
import iRBT1 from "../../public/images/work/workshop-rbt-1.gif";
import iRBT2 from "../../public/images/work/workshop-rbt-2.jpg";
import iRBT3 from "../../public/images/work/workshop-rbt-3.jpg";
import iRBT4 from "../../public/images/work/workshop-rbt-4.jpg";
import iCalendar from "../../public/images/work/workshop-calendar.jpg";
import iHero from "../../public/images/work/workshop-hero.jpg";
import iFramework from "../../public/images/work/workshop-framework.jpg";
import iAgenda from "../../public/images/work/workshop-agenda.jpg";
import iPlates from "../../public/images/work/workshop-plates.gif";
import iPlated from "../../public/images/work/workshop-plates.jpg";
import iMatrix from "../../public/images/work/workshop-matrix.jpg";
import iMatrix1 from "../../public/images/work/workshop-matrix-1.jpg";
import iMatrix2 from "../../public/images/work/workshop-matrix-2.jpg";
import iMatrix3 from "../../public/images/work/workshop-matrix-3.jpg";
import iMatrix4 from "../../public/images/work/workshop-matrix-4.jpg";
import iStats from "../../public/images/work/workshop-stats.jpg";
import iHuddle from "../../public/images/work/workshop-huddle.jpg";
import iSwag from "../../public/images/work/workshop-swag.jpg";


export default function Workshop() {
  return (
    <Page>
      <div className="hero hero--work" />
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image src={iHero} placeholder="blur" alt="Local Board Retreat" />
            <div className="photo__flag">
              <p>STRATEGY / LEADERSHIP / WORKSHOP FACILITATION</p>
              <h3>Local Board Retreat</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Local Board Retreat</h1>
            <p>MANAGING GROUP DYNAMICS & PROVIDING A FOUNDATION FOR SUCCESS</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:{" "}
                <a href="https://www.jacksonville.aiga.org/" target="_blank">
                  AIGA Jacksonville
                </a>
              </li>
              <li>Role: President, Facilitator, Designer</li>
            </ul>
            </div>
          <div className="summary__description">
            <p>
              During my 3.5 year tenure as AIGA Jacksonville president,
              I was fortunate enough to lead and manage a dynamic team of
              talented directors, chairs, and committees in uniting and
              inspiring the Jacksonville creative community. The chapter
              vision and strategy was to be inclusive and use human-centered
              design principles to identify meaningful initiatives and events
              for the Jacksonville community to engage and thrive. My personal
              mission was to foster a fun environment for my team and empower
              them to grow and be creative — essentially to have fun and get sh*t done.
            </p>
            <p>
            Each year, I would facilitate the annual chapter retreat to help define
            the chapter strategy and goals, in addition to helping set personal
            goals for board members.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The annual retreat benefitted as a strategic think tank and
            team-building exercise as it was the largest block of focused
            time our Jacksonville board shared. It provided us an opportunity
            to educate and orient ourselves to the responsibilities of
            participating on the board and to the organization's
            goals — from a national and local level. The retreat was
            structured around these opportunities and helped set the
            tone for a successful year of programming and events.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iDeck}
            title="Workshop Decks"
            alt="Workshop Decks"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Developing a framework for each retreat would put the team
            in a position to succeed. This exercise was a great way to
            analyze how and where the board could deliver on projects
            and grow their design-thinking skill sets.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iFramework}
              placeholder="blur"
              title="Retreat framework"
              alt="Retreat framework"
            />
          </div>
          <div className="details__split">
            <Image
              src={iAgenda}
              placeholder="blur"
              title="Retreat agenda"
              alt="Retreat agenda"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Rose, bud, thorn set up our member value proposition,
            where the plate exercise was a personal reflection of
            where our time goes every day and if there’s a way to
            squeeze in time to give back to the community. Incorporating
            these small activities would break the monotony of a typical
            workshop. The individual contributions inspired new ideas,
            which would lead to high performance during the workshop,
            and as a plus – helped with public speaking talking to other
            people. The effectiveness of the team’s achievements is evident
            in the membership numbers 2018 - 2020, showing a steady number.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iRBT1}
              title="Rose bud thorn animation"
              alt="Rose bud thorn animation"
            />
          </div>
          <div className="details__split">
            <Image
              src={iRBT2}
              placeholder="blur"
              title="Member value proposition"
              alt="Member value proposition"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iRBT3}
              placeholder="blur"
              title="Rose bud thorn activity"
              alt="Rose bud thorn activity"
            />
          </div>
          <div className="details__split">
            <Image
              src={iRBT4}
              placeholder="blur"
              title="Rose bud thorn activity"
              alt="Rose bud thorn activity"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iPlates}
              title="Spinning plates"
              alt="Spinning plates"
            />
          </div>
          <div className="details__split">
            <Image
              src={iPlated}
              placeholder="blur"
              title="Plate activity"
              alt="Plate activity"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iStats}
            placeholder="blur"
            title="KPI stats"
            alt="KPI stats"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            One of the exercises I was particularly excited to observe
            was our creative matrix activity to establish our 2020 vision.
            Based on a community input survey we distributed to our local
            chapter, this structure would benefit the board in
            understanding our users’ needs and delivering outcomes.
            In the 30-minute block alone, 65 ideas were generated on
            exploring possibilities and driving results.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iMatrix}
            placeholder="blur"
            title="Workshop matrix"
            alt="Workshop matrix"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iMatrix1}
              placeholder="blur"
              title="Workshop matrix"
              alt="Workshop matrix"
            />
          </div>
          <div className="details__split">
            <Image
              src={iMatrix2}
              placeholder="blur"
              title="Workshop matrix"
              alt="Workshop matrix"
            />
          </div>
          <div className="details__split">
            <Image
              src={iMatrix3}
              placeholder="blur"
              title="Workshop matrix"
              alt="Workshop matrix"
            />
          </div>
          <div className="details__split">
            <Image
              src={iMatrix4}
              placeholder="blur"
              title="Workshop matrix"
              alt="Workshop matrix"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            With each annual retreat, board members leave with a tangible
            goal for the chapter and often a shared goal to foster a culture
            of collaboration on the board. As contributors to the greater good,
            past and present board members feel empowered to make the decisions
            needed to see local initiatives and programming come to fruition.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iCalendar}
            placeholder="blur"
            title="Workshop calendar"
            alt="Workshop calendar"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iHuddle}
              placeholder="blur"
              title="Board buddies"
              alt="Board buddies"
            />
          </div>
          <div className="details__split">
            <Image
              src={iSwag}
              placeholder="blur"
              title="Have fun shirt"
              alt="Have fun shirt"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

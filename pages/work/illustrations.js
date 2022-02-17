import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/illustrations-hero.jpg";
import iBowie from "../../public/images/work/illustrations-bowie.gif";
import iClementine from "../../public/images/work/illustrations-clementine.jpg";
import iExplore from "../../public/images/work/illustrations-explore.jpg";
import iTurkey from "../../public/images/work/illustrations-turkey.jpg";
import iPrince from "../../public/images/work/illustrations-prince.gif";
import iRide from "../../public/images/work/illustrations-ride.jpg";
import iHolidays from "../../public/images/work/illustrations-holidays.jpg";
import iAnnouncements from "../../public/images/work/illustrations-announcements.jpg";
import iMaze from "../../public/images/work/illustrations-maze.jpg";
import iConstruction from "../../public/images/work/illustrations-construction.jpg";
import iRubiks from "../../public/images/work/illustrations-rubiks.jpg";
import iMunny from "../../public/images/work/illustrations-munny.jpg";

export default function Illustrations() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Illustrations"
              alt="Illustrations"
            />
            <div className="photo__flag">
              <p>Creative Direction</p>
              <h3>Illustrations</h3>
            </div>
          </div>
          <div className="summary_title">
            <h1>Illustrations</h1>
            <p>Vector / Icons / Animations / Mixed-Media</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>Client: Various</li>
              <li>Role: Creative Direction</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Working on illustrations is a great outlet for creativity, staying
              sharp, and exploring new mediums. The hands-on process encourages
              free thinking without limitations. Some of the illustrations are
              passion projects, and others are customized vector illustrations
              for events, businesses, and keynotes.
            </p>
            <p>
              The hero image above was created for a charitable event. Using
              wooden blocks to create a puzzle, each surface of the block
              illustrated a woodland creature.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            A variety of passion projects stemmed from my love for continued
            learning. Low-poly illustrations pushed me to technical precision by
            connecting geometric shapes and color combinations to create a
            multi-dimensional image. Adding a touch of animation provides
            personality to each piece. Other processes include woodburning,
            painting, and motion graphics.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iBowie}
              title="David Bowie animation"
              alt="David Bowie animation"
            />
          </div>
          <div className="details__split">
            <video
              controls
              loop
              name="media"
              poster="/images/work/illustrations-slightwork.jpg"
            >
              <source
                type="video/mp4"
                src="https://scontent.cdninstagram.com/t50.2886-16/10949670_398204940361833_2092189753_n.mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iClementine}
              placeholder="blur"
              title="vw bus illustration"
              alt="vw bus illustration"
            />
          </div>
          <div className="details__split">
            <Image
              src={iExplore}
              placeholder="blur"
              title="explore pack"
              alt="explore pack"
            />
          </div>
          <div className="details__split">
            <Image
              src={iTurkey}
              placeholder="blur"
              title="turkey illustration"
              alt="turkey illustration"
            />
          </div>
          <div className="details__split">
            <Image
              src={iPrince}
              title="prince animation"
              alt="prince animation"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iRide}
            placeholder="blur"
            title="motorcycle illustration"
            alt="motorcycle illustration"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iHolidays}
              placeholder="blur"
              title="workday icons"
              alt="workday icons"
            />
          </div>
          <div className="details__split">
            <Image
              src={iAnnouncements}
              placeholder="blur"
              title="workday icons"
              alt="workday icons"
            />
          </div>
          <div className="details__split">
            <Image
              src={iMaze}
              placeholder="blur"
              title="keynote illustrations"
              alt="keynote illustrations"
            />
          </div>
          <div className="details__split">
            <Image
              src={iConstruction}
              placeholder="blur"
              title="keynote illustrations"
              alt="keynote illustrations"
            />
          </div>
          <div className="details__split">
            <Image
              src={iRubiks}
              placeholder="blur"
              title="woodburning"
              alt="woodburning"
            />
          </div>
          <div className="details__split">
            <Image
              src={iMunny}
              placeholder="blur"
              title="kale munny"
              alt="kale munny"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

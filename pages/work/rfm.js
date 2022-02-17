import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/rfm-hero.jpg";
import iPilotMobile from "../../public/images/work/rfm-pilot-mobile.jpg";
import iPilotDesktop from "../../public/images/work/rfm-pilot-desktop.jpg";
import iPersonaMom from "../../public/images/work/rfm-persona-mom.jpg";
import iPersonaStudent from "../../public/images/work/rfm-persona-student.jpg";
import iPersonaDirector from "../../public/images/work/rfm-persona-director.jpg";
import iMoodboard from "../../public/images/work/rfm-moodboard.jpg";
import iLogoStacked from "../../public/images/work/rfm-logo-stacked.png";
import iUiKit from "../../public/images/work/rfm-ui-kit.jpg";
import iBrandGuide from "../../public/images/work/rfm-brand-guide.jpg";
import iInfoArch from "../../public/images/work/rfm-ia.jpg";
import iPhase2 from "../../public/images/work/rfm-phase2-desktop.jpg";

export default function ReadyForMore() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Ready For More"
              alt="Ready For More"
            />
            <div className="photo__flag">
              <p>UI/UX / Mobile App Design</p>
              <h3>Ready For More?</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Ready For More?</h1>
            <p>
              Changing perceptions of boarding schools and increasing the number
              of applicants
            </p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:{" "}
                <a
                  href="https://www.boardingschools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Association of Boarding Schools
                </a>
              </li>
              <li>Role: Branding, UI/UX</li>
            </ul>
            <ul>
              <li>Art Directors: Shane Santiago, Kristen Cork</li>
              <li>Developers: Julian Bravard, Joe Casper</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              The Association of Boarding Schools (TABS) created a program
              designed to grow their enrollments in member schools by 2,020
              enrollments by the year 2020. This program – the North American
              Boarding Initiative (NABI) – is driven by a digital focus led by
              SJ&P.
            </p>
            <p>
              We created an empowering and evocative brand platform called
              “Ready For More?” that is both a challenge and a declaration. The
              look and feel is designed with colors to evoke awareness and
              alertness, while driving an explorer brand archetype that invites
              visitors to discover content most relevant to them. The website is
              clean, modular and is anchored by design thinking that drives
              engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Based on in-depth research, the campaign was initially launched with
            a six-week pilot directing to a single landing page, with the goal
            of targeting prospective parents and students separately through
            online and social advertising. SJ&P drew on the strategic insights
            derived from the pilot to build out the full website, which launched
            in October 2017.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iPilotMobile}
              placeholder="blur"
              title="Pilot Mobile View"
              alt="Pilot Mobile View"
            />
            <div className="details__button">
              <a
                href="https://invis.io/UKFA6ET68"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Mobile Prototype</button>
              </a>
            </div>
          </div>
          <div className="details__split">
            <Image
              src={iPilotDesktop}
              placeholder="blur"
              title="Pilot Desktop View"
              alt="Pilot Desktop View"
            />
            <div className="details__button">
              <a
                href="https://invis.io/BHFA6E5D6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Desktop Prototype</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Through our research, we learned how successful boarding school
            students were usually the ones who sought out the experience,
            bringing the idea to their parents. Our insight came once we tested
            this student-parent dynamic: if a student asked their parent, 54%
            would consider boarding school.
          </p>
          <p>
            We developed a two-pronged campaign: one aimed at students aged
            13–16 and other at their parents. For both audiences, campaign
            content had to strike a balance between the academic (superior
            college placement) and emotional well-being (happiness, optimism,
            relationships) advantages offered at boarding schools.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iPersonaMom}
            placeholder="blur"
            title="Persona Parent"
            alt="Persona Parent"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iPersonaStudent}
            placeholder="blur"
            title="Persona Student"
            alt="Persona Student"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iPersonaDirector}
            placeholder="blur"
            title="Persona Director"
            alt="Persona Director"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The resulting campaign, Ready For More?, differentiated boarding
            school from other day, private and public school environments by
            promising more of what students and parents want in an education
            experience: more opportunites to try new things, more time with
            teachers, more adventure in and out of the classroom, more diverse
            friendships, more independence, etc.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iMoodboard}
              placeholder="blur"
              title="Moodboard"
              alt="Moodboard"
            />

            <div className="details__button">
              <a
                href="https://projects.invisionapp.com/boards/3Y37MM07UH259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>InVision Board</button>
              </a>
            </div>
          </div>
          <div className="details__split">
            <Image
              src={iLogoStacked}
              placeholder="blur"
              title="Ready For More logo"
              alt="Ready For More logo"
            />
            <div className="details__button">
              <a
                href="https://brand.readyformore.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Brand Guide</button>
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iUiKit}
              placeholder="blur"
              title="UI Kit"
              alt="UI Kit"
            />
          </div>
          <div className="details__split">
            <Image
              src={iBrandGuide}
              placeholder="blur"
              title="Brand Guide"
              alt="Brand Guide"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            In the first five weeks since launching the site, there were over
            263,000 visits from highly engaged users, with 92 percent visiting
            on a mobile device, and more than 305,000 page views overall. The
            site generated over 304 qualified leads worth up to $48 million in
            tuition revenue.
          </p>
          <p>
            With the success of the pilot, phase 2 sprint featured a
            custom-built school finder for users to discover schools that might
            be a fit for them. User experience, especially on mobile devices,
            was kept top of mind. The school profile used thoughtful design
            elements to organize and prioritize key information so users could
            easily scan the page ensuring the rich content isn’t overwhelming.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iInfoArch}
            placeholder="blur"
            title="Information Architecture"
            alt="Information Architecture"
          />
        </div>
        <div className="wrapper">
          <Image
            src={iPhase2}
            placeholder="blur"
            title="Phase 2"
            alt="Phase 2"
          />
          <div className="details__button">
            <a
              href="https://readyformore.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>READYFORMORE.COM</button>
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}

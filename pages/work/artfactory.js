import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/artfactory-hero.jpg";
import iArchetype from "../../public/images/work/artfactory-archetype.jpg";
import iResearch from "../../public/images/work/artfactory-research.jpg";
import iSketches from "../../public/images/work/artfactory-sketches.jpg";
import iPalette from "../../public/images/work/artfactory-palette.jpg";
import iType from "../../public/images/work/artfactory-type.jpg";
import iWeb from "../../public/images/work/artfactory-web.jpg";
import iFinal from "../../public/images/work/artfactory-final.jpg";
import iPattern from "../../public/images/work/artfactory-pattern.jpg";
import iQA from "../../public/images/work/artfactory-qa.jpg";

export default function ArtFactory() {
  return (
    <Page>
      <div className="hero hero--work" />
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Virginia ArtFactory"
              alt="Virginia ArtFactory"
            />
            <div className="photo__flag">
            <p>Visual Design / UI / UX</p>
            <h3>Virginia ArtFactory</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Virginia ArtFactory</h1>
            <p>
              Make Art, See Art, Be Art
            </p>
          </div>
          <div className="summary__credits">
          <ul>
            <li>Client: {" "}
              <a href="https://www.virginiaartfactory.org/" rel="noopener noreferrer">
              Virginia ArtFactory
              </a>
            </li>
              <li>Creative Director: Shane Santiago,  {" "}
                <a href="https://www.bravelycreated.com/" rel="noopener noreferrer">Bravely</a> </li>
                </ul>
                <ul>
            <li>Role: Visual Design, UI/UX, Front-end</li>
            <li>
              Front/Back-end Dev: Jeff Will
          </li>
          </ul>
          </div>
          <div className="summary__description">
          <p>
          The Center for the Arts is a local, non-profit arts center located in Manassas, VA
          that serves the community by offering art, drama and dance instruction; theatrical
          productions, art exhibits; and a variety of programs for all ages.
          The Center for the Arts aims to unite the greater Manassas/Prince William County
          community while providing a safe haven for people of all ages to explore the arts.
          </p>
            <p>
            As part of a huge re-branding and website redesign effort, Bravely was tapped
by the Center for the Arts (CFA) at the Candy Factory for an overhaul of how they
communicated their brand both strategically and visually. In close partnership, Bravely
developed a new name for the organization, soon-to-be known as the ARTfactory,
when they publicly launch in spring 2020. Bravely’s goal was to create a whimsical
brand that communicated the wide-ranging and diverse offerings from art or dance
classes to ticketed theater shows. Additionally, the organization hoped to modernize
their brand to appeal to the new generation of art-seekers and become a pillar of the
creative community for young and old.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
        <p>Through interviews and discussions, we conducted a brand
archetype exercise in which the specific characteristics of
the CFA brand were mapped to one of twelve identities. Based on the present and desired
brand personality, the archetype that best identifies CFA is “The Creator,” with
elements of &lsquo;The Caregiver&lsquo; and &lsquo;The Innocent.&lsquo; Expressive, original, and imaginative, but very optimistic,
compassionate, nurturing and caring: “We’re helping raise
kids (enrich the kids in all of us) and change lives as much
as we’re teaching art.”
        </p>
        <p>
        The goal in creating a new logo was to create something with meaning and enduring value (art,
people, and community). Conducting a brand archetype analysis determined the traits as creative, imaginative,
artistic, inventive, non-conformist — similar to creative brands; Crayola, (Old School) Lego, Disney, Pinterest,
Etsy, and Adobe. Sketches were developed to portray the new look and feel of the non-profit.</p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iArchetype}
            placeholder="blur"
            title="Creator Archetype"
            alt="Creator Archetype"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iResearch}
              placeholder="blur"
              title="Competitor Logos"
              alt="Competitor Logos"
            />
          </div>
          <div className="details__split">
            <Image
              src={iSketches}
              placeholder="blur"
              title="CFA Sketches"
              alt="CFA Sketches"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iPalette}
              placeholder="blur"
              title="Palette Exploration"
              alt="Palette Exploration"
            />
          </div>
          <div className="details__split">
            <Image
              src={iType}
              placeholder="blur"
              title="Creator Type"
              alt="Creator Type"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
          CFA’s existing website was antiquated and lacked a digital focus, so Bravely needed
          to right the ship because much of the traffic would be directed to
          the site for calendar of events, ticket sales, and workshops. We would
          design mobile, tablet, and desktop verions of the site with WordPress as the publishing tool for the content management
          system. Bravely built custom templates for the nonprofit to use in
          modifying the content. The team also leveraged various plugins
          to enhance the experience. To assist Jeff in development, a UI kit (pattern library)
          was developed to be able to compile any additional/outlier templates.</p>
                </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
          src={iWeb}
          title="ArtFactory Wires"
          alt="ArtFactory Wires"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
          src={iFinal}
          title="ArtFactory Final"
          alt="ArtFactory Final"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
          src={iPattern}
          title="ArtFactory Pattern Library"
          alt="ArtFactory Pattern Library"
          />
        <div className="details__button">
            <a href="../files/cfa_library.pdf" target="_blank">
              <button>Pattern Library</button>
            </a>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
          As Jeff and I wrapped up front-end styles for the template development and integrated the CMS,
          the team set up a training to help the CFA staff understand how to be hands-on with the site
          and migrate the content for the site. Jeff, Shane, and myself QA’d to ensure
          the site was rendering properly.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
          src={iQA}
          title="GitHub Labels"
          alt="GitHub Labels"
          />
          </div>
      </div>
    </Page>
  );
}

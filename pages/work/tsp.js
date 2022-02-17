import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/tsp-hero.jpg";
import iThemes from "../../public/images/work/tsp-themes.jpg";
import iData from "../../public/images/work/tsp-data.jpg";
import iProcess from "../../public/images/work/tsp-process.jpg";
import iLayout from "../../public/images/work/tsp-layout.jpg";


export default function TSP() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Skateboard Project"
              alt="Skateboard Project"
            />
            <div className="photo__flag">
              <p>Evaluation Design</p>
              <h3>The Skatepark Project</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>The Skatepark Project</h1>
            <p>
              Provide stakeholder insights on the impact of TSP’s National Grantmaking Program
            </p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:

                  The Skateboard Project

              </li>
              <li>Role: Visual Design</li>
            </ul>
            <ul>
              <li>Researchers: Alisha Greenberg & Kathy Babiak, Ph.D.</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              The mission of The Skatepark Project (TSP) is to help underserved
              communities create safe and inclusive public skateparks for youth,
              with the goal of supporting thriving, healthy and sustainable
              communities where young people have equitable access to safe
              outdoor spaces for creative expression, physical activity
              and a sense of belonging.
            </p>
            <p>
              TSP has been working with municipalities
              and community groups to help them realize their dream of a
              quality public skatepark in their community. For Tony Hawk, the
              organization’s Founder, skateboarding was a healthy outlet
              and a recreational challenge, and it provided a social group of
              creative, like-minded individuals. It’s also a sport that
              helped him build confidence, taught him to persevere, and
              through his mentoring of younger skaters helped him develop
              leadership skills. The Skatepark Project works every day to
              be able to bring these same lessons to youth around the world.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
          At a critical juncture in the foundation’s evolution,
          after almost 20 years of operation and following a new organization title
          from The Tony Hawk Foundation to ‘The Skatepark Project’,
          TSP approached Bravely with a creative brief to translate a comprehensive evaluation
            report that would generate excitement, inspire, and tell a story through
            the rich data.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
        <Image
          src={iProcess}
          placeholder="blur"
          title="TSP Process"
          alt="TSP Process"
        />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
          Bravely teamed up with Alisha and Kathy, the evaluation team, to help brainstorm,
          design, and execute a report that began as a complex, 30-page data heavy document.
          It was vital to be strategic with our messaging as the report would catch
          the eye of donors and stakeholders of TSPs grantmaking program.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
        <Image
          src={iData}
          placeholder="blur"
          title="TSP Data"
          alt="TSP Data"
        />
        </div>
      </div>
          <div className="callout">
        <div className="wrapper">
          <p>
            We were inspired by  {" "}
              <a href="https://kstatic.googleusercontent.com/files/25badfc6b6d1b33f3b87372ff7545d79261520d821e6ee9a82c4ab2de42a01216be2156bc5a60ae3337ffe7176d90b8b2b3000891ac6e516a650ecebf0e3f866" rel="noopener noreferrer">
            Google&apos;s Diversity Annual Report {" "}</a>
             and <a
              href="http://s2.q4cdn.com/447711729/files/doc_financials/2020/ar/CVSHealth_2020AR_FINAL.pdf"
              rel="noopener noreferrer"
            >CVS Health</a> as way to visually build a story of how TSP
            is is making sustained impact on communities and youth, while still
            maintaining the creative edge of skateboard brands like Birdhouse, Vans,
            DC, and Thrasher.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iThemes}
            placeholder="blur"
            title="TSP Themes"
            alt="TSP Themes"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
        <p>
          Having received a Masters in Communication with a concentration in
          Applied Research, this particular project appealed to me as it sat at the
          intersection of design and science. You can view an additional evaluation report
          from my graduate days <a
           href="../files/cfa_library.pdf"
           rel="noopener noreferrer"
         >on global warming</a>.
        </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iLayout}
            placeholder="blur"
            title="TSP Layout"
            alt="SP Layout"
          />
        </div>
      </div>
    </Page>
  );
}

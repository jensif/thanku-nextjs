import Image from "next/image";
import Link from "next/link";

import Page from "../components/Page";

function About() {
  return (
    <Page title="Jen Arevalo UI/X Designer + Developer">
      <div className="hero hero--compact" />
      <div className="profile">
        <div className="wrapper">
          <div className="info__split">
            <div className="profile__photo">
              <Image
                src="/images/about/headshot.png"
                title="Jen"
                alt="Jen"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="info__split">
            <h2>
              Hello! I&apos;m Jen{" "}
              <span title="(ar-eh-vah-lo)">Arevalo</span>, mononymously known as
              Homey, and I&apos;m a ui/x designer + developer.
            </h2>
            <p>
              I&apos;m fiercely passionate about building user-centric solutions via web and
              mobile apps with companies big and small that deliver on strategy and
              delight audiences.
            </p>
            <p>
              In addition to designing digital products, I also serve on the advisory board for
              AIGA Jacksonville — a local chapter of the nation&apos;s largest community of design
              advocates, and volunteer my time as an organizer for AIGA Unidos to {" "}
              <Link href="https://www.youtube.com/watch?v=ZyVku61QSlo&ab_channel=AIGAUnidos">
                empower Latin and Hispanic creatives.
              </Link>
            </p>
            <p>
              When I&apos;m not designing, you can find me cycling, checking out live music (pre-pandemic), or flexing my mental muscle
              at trivia night. </p>
            <h1>A few of my favorite things:</h1>
            <p>
              Design Thinking / Experience Mapping /
              Insights and Research / Facilitating Workshops / Internet of Things / {" "}
              <Link href="/work/illustrations">
                <a>Illustrating</a>
              </Link>{" "}
              / {" "}
              <Link href="/work/lettering">
                <a>Lettering </a>
              </Link>{" "}
              / {" "}
              <Link href="/work/posters">
                <a>Poster Design</a>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <div className="callout__companies">
            <h1>In great company!</h1>
            <p>A collective of stellar people and teams I&apos;ve connected with and learned from along the way.</p>
              <Image
                src="/images/about/companies.png"
                alt="companies"
                width={2100}
                height={927}
              />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default About;

import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import Page from "../../components/Page";

import iHero from "../../public/images/work/jjvision-hero.jpg";
import iColoring from "../../public/images/work/jjvision-coloring.gif";
import iMaze from "../../public/images/work/jjvision-maze.jpg";
import iEye from "../../public/images/work/jjvision-eye.jpg";
import iPlaybook from "../../public/images/work/jjvision-playbook.jpg";

export default function JJVision() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="JJ Vision"
              alt="JJ Vision"
            />
            <div className="photo__flag">
              <p>Visual Design / Motion Graphics</p>
              <h3>Prioritize Your Eyes</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Prioritize Your Eyes</h1>
            <p>Encouraging people to prioritize their eyes and get an eye exam—the most important first step in proactively taking care of your health.</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>Client:{" "}
              <a href="https://www.jjvision.com/prioritizeyoureyes" target="_blank"> Johnson & Johnson Vision</a></li>
              <li>Creative Director: Shane Santiago</li>
              <li>Role: Visual Design / Motion Graphics</li>
              <li>
                Achievements:{" "}
                <a href="https://winners.webbyawards.com/2021/social/social-content-series-campaigns/health-fitness-series-campaigns/176114/prioritize-your-eyes" target="_blank">
                Webby Nominee Nominee for Social
  Health & Fitness (Series & Campaigns) 2021
                </a>, Gold & Silver W3 Award, Silver ADDY Award, and a Silver Anvil Award.
              </li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
            Johnson & Johnson Vision (JJV) launched the 2020 Global Eye Health Initiative — a multichannel global campaign targeting
            customers, consumers, and employees on optimal eye health. As the largest healthcare company in the world and a leader in eye health, JJV
            held an even greater responsibility once COVID-19 was declared as a global pandemic. With an increase of
            communities isolating and social distancing to reduce the spread of the virus, it became apparant for JJV
            to focus their efforts and raise awareness about the
            connection of eye health to overall health.</p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
          Prioritize Your Eyes is a global campaign encouraging everyone, to take the single-most important
          step to protect their eyes—getting an eye exam. It would address the impact of increased screen time / digital device
          usage and quick actions that can be taken. The video talks about the connection of eye health to overall health,
          importance of an eye exam, and ways to “Prioritize Your Eyes” at home
          until the viewer feels comfortable going back to the eye doctor for a comprehensive eye exam.
          Although you may not be able to
          get an eye exam right now, your vision care doesn't need to go overlooked.

          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
        <ReactPlayer
        url={"https://www.youtube.com/watch?v=SK--i5-g5Ec"}
        width={1170}
        height={660}
        />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
          With the shift of parents working from home and students moving to online learning, JJV sought
          to combine education and eye health to provide a resource for teachers and parents alike to
          share with their kids. An activity book was created to allow the youngest patients to grow, play,
          and learn.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iMaze}
              placeholder="blur"
              title="activity maze"
              alt="activity maze"
            />
          </div>
          <div className="details__split">
            <Image
              src={iEye}
              placeholder="blur"
              title="eye activity"
              alt="eye activity"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
        <Image
          src={iColoring}
          title="coloring book"
          alt="coloring book"
          />
        </div>
        <div className="details__button">
          <a href="https://www.jjvision.com/sites/default/files/inline-files/J&J%20Vision%20PYE%20Kids%20Activity%20Book.pdf" target="_blank">
            <button>Download Activity Book</button>
          </a>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            JJV remains committed to changing the trajectory of eye health worldwide by helping people
            see better, connect better, live better – especially when times are changing in the
            blink of an eye. A comprehensive toolkit for their employees was created with the
            resources and pieces needed to
            effectively develop contextual creative (by audience, market, etc.) consistent
            with the tone and messaging of Prioritize Your Eyes.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
        <Image
          src={iPlaybook}
          title="Employee Playbook"
          alt="Employee Playbook"
          />
        </div>
      </div>
    </Page>
  );
}

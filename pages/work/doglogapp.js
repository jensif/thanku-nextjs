import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/doglog-hero.jpg";
import iScreens from "../../public/images/work/doglog-screens.jpg";
import iPersonas1 from "../../public/images/work/doglog-personas-1.jpg";
import iPersonas2 from "../../public/images/work/doglog-personas-2.jpg";
import iEmpathy1 from "../../public/images/work/doglog-empathy-1.jpg";
import iEmpathy2 from "../../public/images/work/doglog-empathy-2.jpg";
import iIdeation1 from "../../public/images/work/doglog-ideation-1.jpg";
import iIdeation2 from "../../public/images/work/doglog-ideation-2.jpg";
import iWireframes from "../../public/images/work/doglog-wireframes.jpg";

export default function DogLogApp() {
  return (
    <Page>
      <div className="hero hero--work" />
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image src={iHero} placeholder="blur" title="DogLog" alt="DogLog" />
            <div className="photo__flag">
              <p>Visual Design / UI / UX</p>
              <h3>DogLog App</h3>
            </div>
            <div className="summary__title">
              <h1>DogLog App</h1>
              <p>Human-centered prototype app</p>
            </div>
            <div className="summary__credits">
              <ul>
                <li>
                  Client:{" "}
                  <a href="https://www.k9sforwarriors.org/" target="_blank">
                    K9s For Warriors
                  </a>
                </li>
                <li>Role: User Research, UI/UX</li>
              </ul>
              <ul>
                <li>
                  Team:{" "}
                  <a href="http://cronfu.com/" target="_blank">
                    Jimmy Thai
                  </a>
                  , Olivia Whitt
                </li>
                <li>Photography: Sade Malloy</li>
              </ul>
            </div>
            <div className="summary_description">
              <p>
                DogLog App is a prototype application for K9s For Warriors based on
                a human-centered design to help warriors and their new K9
                guardians stay connected after the rescued dogs graduate from
                training camp.
              </p>
              <p>
                The application solves K9s For Warriors post-graduation
                communications by providing a journaling platform to help the
                trainers accomplish high-touch continued outreach with veterans
                and their dogs.
              </p>
              <a href="https://invis.io/JM9ITTS82" target="_blank">
                Check out the first prototype.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The design for the app was a throwback to the uniforms to keep a
            level of comfort. Fellow veterans using DogLog could read other
            stories and offer words of encouragement if a veteran was feeling a
            bit down. The veterans can also rate their feelings. If the rating
            was 1 out of 5, the trainer can be notified to check in and make
            sure the veteran was in a focused state of mind.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iScreens}
            placeholder="blur"
            title="DogLog iphone screens"
            alt="DogLog iphone screens"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            By developing personas, we found out veterans were more likely to
            detail their thoughts through writing and sharing photos as it was
            reminiscent to the camaraderie they had in the service. Trainers
            would be able to access the logs and keep tabs on the veteran and
            the dog. The main concern for the trainers was knowing how well the
            dogs were doing and if there was any benefit in having the dog with
            the veteran.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iPersonas1}
              placeholder="blur"
              title="DogLog persona veteran"
              alt="DogLog persona veteran"
            />
          </div>
          <div className="details__split">
            <Image
              src={iPersonas2}
              placeholder="blur"
              title="DogLog persona trainer"
              alt="DogLog persona trainer"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Exploring multiple dimensions of the veteran and trainer offered a
            quick way to have a comprehensive and integrated view of their role
            for this app. What do they say or need to say to others? How do they
            likely express themselves? What are their expectations and
            reactions, as well as their actions, and values?
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iEmpathy1}
              placeholder="blur"
              title="DogLog empahty veteran"
              alt="DogLog empahty veteran"
            />
          </div>
          <div className="details__split">
            <Image
              src={iEmpathy2}
              placeholder="blur"
              title="DogLog empathy trainer"
              alt="DogLog empathy trainer"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iIdeation1}
              placeholder="blur"
              title="DogLog veteran"
              alt="DogLog veteran"
            />
          </div>
          <div className="details__split">
            <Image
              src={iIdeation2}
              placeholder="blur"
              title="DogLog trainer"
              alt="DogLog trainer"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iWireframes}
            placeholder="blur"
            title="DogLog wireframes"
            alt="DogLog wireframes"
          />
        </div>
      </div>
    </Page>
  );
}

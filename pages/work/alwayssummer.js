import Link from "next/link";
import Image from "next/image";

import Page from "../../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iEmail1 from "../../public/images/work/alwayssummer-email-1.gif";
import iEmail2 from "../../public/images/work/alwayssummer-email-2.gif";
import iEvent1 from "../../public/images/work/alwayssummer-event-1.jpg";
import iEvent2 from "../../public/images/work/alwayssummer-event-2.jpg";
import iEvent3 from "../../public/images/work/alwayssummer-event-3.jpg";
import iEvent4 from "../../public/images/work/alwayssummer-event-4.jpg";
import iEvent5 from "../../public/images/work/alwayssummer-event-5.jpg";
import iEvent6 from "../../public/images/work/alwayssummer-event-6.jpg";
import iFolio from "../../public/images/work/alwayssummer-folio.jpg";
import iHero from "../../public/images/work/alwayssummer-hero.jpg";
import iSocial1 from "../../public/images/work/alwayssummer-social-1.gif";
import iSocial2 from "../../public/images/work/alwayssummer-social-2.gif";
import iSocial3 from "../../public/images/work/alwayssummer-social-3.gif";
import iSpeaker1 from "../../public/images/work/alwayssummer-speaker-1.jpg";
import iSpeaker2 from "../../public/images/work/alwayssummer-speaker-2.jpg";
import iSpeaker3 from "../../public/images/work/alwayssummer-speaker-3.jpg";
import iSpeaker4 from "../../public/images/work/alwayssummer-speaker-4.jpg";

export default function AlwaysSummer() {
  return (
    <Page>
      <div className="hero hero--work" />
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image src={iHero} placeholder="blur" alt="Always Summer" />
            <div className="photo__flag">
              <p>Creative Direction</p>
              <h3>Always Summer</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Always Summer</h1>
            <p>Annual Fall Membership Drive & Gallery Event</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:{" "}
                <a href="https://www.jacksonville.aiga.org/" target="_blank">
                  AIGA Jacksonville
                </a>
              </li>
              <li>Role: Creative Direction, Illustration, PR, Content</li>
            </ul>
            <ul>
              <li>
                Countdown video:{" "}
                <a href="http://www.andygattis.com/" target="_blank">
                  Andy Gattis
                </a>
              </li>
              <li>
                Front-End Developer:{" "}
                <a href="http://www.jasonkellum.com/" target="_blank">
                  Jason Kellum
                </a>
              </li>
              <li>Photography: Kurt Hudson</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Since 2008, AIGA Jacksonville, a local chapter of the AIGA
              professional association of design, has been hosting the "Always
              Summer Poster Show + Mixtape." Hailed as one of the most
              anticipated events of the year, Always Summer has been successful
              in connecting the design community and increasing awareness. Guest
              speakers, The Bubble Process, were invited to speak, inspire, and
              experience Always Summer weekend.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Over 100 posters were submitted and 200 people in attendance to
            celebrate the Jacksonville creative community along with all the
            summer jams from past and present. By gathering a holy trinity of
            photographers, motion designers, and social media experts, the
            two-day jubilee continues to transfuse event goers with energy,
            creativity, and new friends.
          </p>
          <p>
            The sights and sounds of summer were exquisitely blended with the
            help of our local DJs who set the tone for the event by playing a
            mixtape of each poster entry.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iEvent1}
            placeholder="blur"
            title="Always Summer gallery event"
            alt="Always Summer Gallery event"
          />
          <Image
            src={iEvent2}
            placeholder="blur"
            title="Always Summer gallery event"
            alt="Always Summer Gallery event"
          />
          <div className="details__split">
            <Image
              src={iEvent5}
              placeholder="blur"
              title="Always Summer gallery event"
              alt="Always Summer Gallery event"
            />
          </div>
          <div className="details__split">
            <Image
              src={iEvent6}
              placeholder="blur"
              title="Always Summer gallery event"
              alt="Always Summer Gallery event"
            />
          </div>
          <Image
            src={iEvent3}
            placeholder="blur"
            title="Always Summer gallery event"
            alt="Always Summer Gallery event"
          />
          <Image
            src={iEvent4}
            placeholder="blur"
            title="Always Summer gallery event"
            alt="Always Summer Gallery event"
          />
          <div className="details__button">
            <Link
              href="https://www.flickr.com/photos/aigajacksonville/albums/72157673221761550/page1"
              target="_blank"
            >
              <a>
                <button>Always Summer Gallery</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            With 60% of our audience ranging from 25–35, the event was heavily
            promoted through social media where a Snapchat geofilter was
            developed and countdown video reminders were spread through
            followers' newsfeeds.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <video controls loop name="media">
              <source
                src="https://scontent.cdninstagram.com/t50.2886-16/13966049_1666488330339379_1812396670_n.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div
            className="details__split"
            poster="/images/work/alwayssummer-video.jpg"
          >
            <video controls loop name="media">
              <source
                src="https://scontent.cdninstagram.com/t50.2886-16/13960062_1083347618408475_2019280685_n.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <Image
            src={iSocial3}
            title="Always Summer social posts"
            alt="Always Summer Gallery event"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iSocial1}
              title="Always Summer Countdown"
              alt="Always Summer Countdown"
            />
          </div>
          <div className="details__split">
            <Image
              src={iSocial2}
              title="Always Summer Final Countdown"
              alt="Always Summer Final Countdown"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Sending out a press release for the event proved to be a benefit in
            reaching our 36–45-year-old designers. It also introduced Always
            Summer to a broader audience. The event was featured in the
            September 2016 edition of Folio Weekly in one of the editor's picks,
            "Reasons To Leave The House This Week."
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iFolio}
            placeholder="blur"
            title="Folio Weekly feature"
            alt="Folio Weekly feature"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            To accompany the gallery event, the organization invites a guest
            speaker, who is well-versed in poster design, to lecture and ignite
            the passion of print. Speakers provide a fresh outlook on the design
            industry, and tips & tricks on what makes their art unique to their
            name
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iSpeaker1}
              placeholder="blur"
              title="Speaker event"
              alt="Speaker event"
            />
          </div>
          <div className="details__split">
            <Image
              src={iSpeaker2}
              placeholder="blur"
              title="Speaker mingle"
              alt="Speaker mingle"
            />
          </div>
          <div className="details__split">
            <Image
              src={iSpeaker3}
              placeholder="blur"
              title="Speaker merch"
              alt="Speaker merch"
            />
          </div>
          <div className="details__split">
            <Image
              src={iSpeaker4}
              placeholder="blur"
              title="Speaker engagement"
              alt="Speaker engagement"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The double header event was featured in the monthly AIGA
            Jacksonville newsletter and encouraged designers to participate by
            creating a poster and sharing their process through a hashtag. The
            newsletter was an excellent opportunity to spotlight our sponsors.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iEmail1}
              title="Always Summer is Back email"
              alt="Always Summer is Back email"
            />
          </div>
          <div className="details__split">
            <Image src={iEmail2} title="Speaker email" alt="Speaker email" />
          </div>
        </div>
      </div>
    </Page>
  );
}

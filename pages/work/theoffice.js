import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/theoffice-hero.jpg";
import iProcess1 from "../../public/images/work/theoffice-process-1.jpg";
import iProcess2 from "../../public/images/work/theoffice-process-2.jpg";
import iProcess3 from "../../public/images/work/theoffice-process-3.jpg";
import iProcess4 from "../../public/images/work/theoffice-process-4.jpg";

export default function TheOffice() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="The Office"
              alt="The Office"
            />
            <div className="photo__flag">
              <p>Video Production</p>
              <h3>The Office</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>The Office</h1>
            <p>Mural Timelapse</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>Client: Shepherd</li>
              <li>Role: Video Production, Photography</li>
            </ul>
            <ul>
              <li>
                Team:{" "}
                <a
                  href="http://www.nick-v.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nick V.
                </a>{" "}
                Mitchell Kelly
              </li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Documenting a two-day mural process by Nick V. for Shepherd, an
              advertising agency's wall, to inspire creativity upon their
              designers and clients. The completion of the project proved to be
              laborious and incorporated a lot of pizza. The days were recorded
              and condensed into a time lapse video and edited in Adobe
              Premiere.
            </p>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iProcess1}
              placeholder="blur"
              title="polaroids"
              alt="polaroids"
            />
          </div>
          <div className="details__split">
            <Image
              src={iProcess2}
              placeholder="blur"
              title="blank canvas"
              alt="blank canvas"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iProcess3}
            placeholder="blur"
            title="color blocks"
            alt="color blocks"
          />
          <Image src={iProcess4} placeholder="blur" title="lines" alt="lines" />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <video controls loop name="media">
              <source
                type="video/mp4"
                src="https://scontent.cdninstagram.com/t50.2886-16/10827107_574657332680714_1874644354_n.mp4"
              />
            </video>
          </div>
          <div className="details__split">
            <video controls loop name="media">
              <source
                type="video/mp4"
                src="https://scontent.cdninstagram.com/t50.2886-16/10820537_382888358536070_1037757005_n.mp4"
              />
            </video>
          </div>
          <div className="details__button">
            <a
              href="https://vimeo.com/157325969"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Extended Video</button>
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}

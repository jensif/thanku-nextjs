import Image from "next/image";

import Page from "../../components/Page";

import iHero from "../../public/images/work/lettering-hero.jpg";
import iParty from "../../public/images/work/lettering-party.jpg";
import iEmbrace from "../../public/images/work/lettering-embrace.jpg";
import iExpress from "../../public/images/work/lettering-express.jpg";
import iTogether from "../../public/images/work/lettering-together.jpg";
import iJrsr from "../../public/images/work/lettering-jrsr.jpg";
import iXmas from "../../public/images/work/lettering-xmas.jpg";
import iWedding from "../../public/images/work/lettering-wedding.jpg";
import iBallot from "../../public/images/work/lettering-ballot.jpg";

export default function Lettering() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Lettering"
              alt="Lettering"
            />
            <div className="photo__flag">
              <p>Art Direction</p>
              <h3>Lettering</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Lettering</h1>
            <p>Because you can never find a perfect typeface</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>Client: Various</li>
              <li>Role: Lettering</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Lettering projects spanning from
              motivational posters, shirts, weddings, Christmas card and getting
              awareness out about the next political candidate.
            </p>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iParty}
            placeholder="blur"
            title="It's not a party if it happens every night"
            alt="It's not a party if it happens every night"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iEmbrace}
              placeholder="blur"
              title="Embrace the good"
              alt="Embrace the good"
            />
          </div>
          <div className="details__split">
            <Image
              src={iExpress}
              placeholder="blur"
              title="Express yourself"
              alt="Express yourself"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iTogether}
            placeholder="blur"
            title="Together shirt"
            alt="Together shirt"
          />
          <Image
            src={iJrsr}
            placeholder="blur"
            title="Move Your Feet poster"
            alt="Move Your Feet poster"
          />
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iXmas}
              placeholder="blur"
              title="Merry Christmas ya filthy animal"
              alt="Merry Christmas ya filthy animal"
            />
          </div>
          <div className="details__split">
            <Image
              src={iWedding}
              placeholder="blur"
              title="Wedding invite"
              alt="Wedding invite"
            />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iBallot}
            placeholder="blur"
            title="Ballots and Brews"
            alt="Ballots and Brews"
          />
        </div>
      </div>
    </Page>
  );
}

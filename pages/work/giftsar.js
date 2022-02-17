import Link from "next/link";
import Image from "next/image";

import Page from "../../components/Page";

import iXcode from "../../public/images/work/gifts-xcode.jpg";
import iHero from "../../public/images/work/gifts-hero.jpg";
import iProto from "../../public/images/work/gifts-proto.jpg";

export default function GiftsAR() {
  return (
    <Page>
      <div className="hero hero--work" />
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
          <Image
            src="/images/work/gifts-hero.jpg"
            alt="WrappingGifts"
            width={1170}
            height={779}
          />
          <div className="photo__flag">
            <p>ARKit, iOS app</p>
            <h3>wrapping.gifts App</h3>
          </div>
        </div>
        <div className="summary__title">
          <h1>wrapping.gifts App</h1>
          <p>Measure Once, Cut Once</p>
        </div>
        <div className="summary__credits">
          <ul>
            <li>Role: Mobile Development, Strategy, Visual Design</li>
          </ul>
        </div>
        <div className="summary__description">
          <p>
            Forget the hassle of having to figure out how much
            paper you need to wrap for that special someone — wrapping your
            Christmas presents and birthday gifts has never been
            easier. wrapping.gifts takes the frustration out of well...wrapping gifts,
            and sparks joy for you and the recipient. Originally concepted in 2017,
            wrapping.gifts is a measuring app built
            for the socially conscious papersaver, and those who find polished edges
            oddly satisfying.
          </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Powered by Apple's ARKit framework, by positioning your camera over the object,
            the app automatically genarates the approximate measurements, then provides the
            length and width of the material needed to cover your gift.
          </p>
          <p>
            More than a measuring tool, wrapping.gifts also provides the option to turn on
            crease lines to let you know where to make the appropriate folds.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iXcode}
            placeholder="blur"
            title="XCode"
            alt="XCode"
          />
        </div>
        <div className="details">
          <div className="wrapper">
          <Image
            src={iProto}
            placeholder="blur"
            title="AR Prototype"
            alt="XCode"
          />
          </div>
          </div>
      </div>
    </Page>
  );
}

import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Maintenance from "../components/Home/Maintenance/Maintenance";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  // userData state that will be used to get usr location
  const [userData, setUserData] = useState(null);

  // check if user from Black List
  const [isBlackListed, setIsBlackListed] = useState(false);

  // check if NEXT_PUBLC_BLACKLIST_COUNTRIES is empty
  const [IsBlackListEmpty, setIsBlackListEmpty] = useState(
    process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES === "" ? true : false
  );


useEffect(() => {
    // remove the interval Cookie timer setter when
    // clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }
    // setTimeout(() => {
      setShowElement(true);
    // }, 4500);


    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    // setTimeout(() => {
      // setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    // }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Asadullah khan - Software Engineer",
    description: `I've been working on Software development for 4 years straight. Get in touch with me to know more.`,
    image: "/titofCercle.png",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://asadullahkhan.vercel.app`} />
        <link rel="canonical" href={`https://asadullahkhan.vercel.app`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
          {/* {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>} */}

          <Header finishedLoading={true} sectionsRef={homeRef} />
          <MyName finishedLoading={true} />
          <SocialMediaArround finishedLoading={true} />
          {true ? <AboutMe ref={aboutRef} /> : <></>}
          {true ? <WhereIHaveWorked /> : <></>}
          {true ? <SomethingIveBuilt /> : <></>}
          {true ? <GetInTouch /> : <></>}
          {true ? (
            <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} />
          ) : (
            <></>
          )}
          {!isProd && <ScreenSizeDetector />}
        </div>
    </>
  );
}

import React from "react";
import "./howToAdd.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "SAFE MONEY ON YOUR MOBILE DATA EXPENSES BY USING THE EXTETSION",
    desc: "When you use your mobile data to watch YouTube, it consumes a large amount of data because there are numerous advertisements that appear during the videos. But with the adblocker for Google Chrome, you won't waste any data on advertising. You can enjoy watching your favorite show without any interruptions in adblocker google chrome.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading:
      "SPEED UP YOUR BROWSING EXPERIENCE BY USING THE AD BLOCKER CHROME EXTENTION",
    desc: "Ads and pop-ups not only create disturbance but also slow down your internet connection. If you want to maintain top speed and enjoy faster loading of your favorite websites without unwanted ads, use the adblock plus chrome extension. As, ad blocker chrome extension prevents all the harmful adverts from your browser.",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "BLOCK DANGEROUS WEBSITE WITH ADBLOCK PLUS CHROME",
    desc: "Don't worry about phishing, malicious websites, and malware anymore. With youtube adblock firefox, you won't accidentally visit dangerous websites as it instantly blocks your access and prevents any potential attacks.",
  },
];

const HowToAdd = () => {
  return (
    <div className="how-to-add">
      <Image src="/howToadd-bg.svg" width={2091.29} height={1195.05} className="bg"/>
      <div className="top-container">
        <div className="top">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <Image
                src={item.icon}
                alt={item.heading}
                width={67}
                height={67}
              />
              <h3>{item.heading}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="middle">
          <h2>IT'S A FREE EXTENTION TO BLOCK YOUTUBE ADS FIREFOX AND CHROME</h2>
          <p>
            When you visit a YouTube page on Firefox or in Chrome, the youtube
            ads blocker firefox scans the webpage and identifies the elements
            associated with ads. It then prevents them from loading or
            displaying on the page. This effectively removes or hides the ads
            from your view, and lets you enjoy the video content without
            interruptions.
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-container-top">
          <div className="top">
            <div className="left">
              <h3>HOW TO TAKE CONTROL ON YOUTUBE BROWSER EXTENSION</h3>
            </div>
            <div className="right">
              <button>Install Extention</button>
            </div>
          </div>
        </div>

        <div className="bottom-container-bottom">
          <div className="left">
            <Image src="/firefox.svg" alt="firefox" fill className="img"/>
            <h2>FOR YOUTUBE ADS FIREFOX</h2>
            <p>
              Adjust the settings by going to the browser's menu, selecting
              "Add-ons," and customizing the adblolck for youtube firefox
              options.
            </p>
            <p>
              In this extension, you will get an option that will automatically
              block ads. You can also customize your favorite showtime
              experience on<span> Youtube without ads </span> and enjoy
              uninterrupted entertainment.
            </p>
          </div>
          <div className="right">
            <Image src="/chrome.svg" alt="firefox" layout="fill" className="img"/>
            <h2>FOR YOUTUBE ADS CHROME</h2>
            <p>
              Install the adblocker extension from the free ad blocker chrome
              Web Store.
            </p>
            <p>
              Right-click on the extension icon in the toolbar and choose
              "Options" or "Settings" to configure its settings.
            </p>
            <p>
              By following these steps, you can have control over the extension
              on both Firefox and Chrome browsers and watch ad free youtube
              movies and series.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToAdd;

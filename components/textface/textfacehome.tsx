"use client"
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Ads from "@/components/ads";
import Categories from "@/components/categories";
import Facelist from "@/components/textface/facelist";
import SaveInput from "@/components/textface/saveinput";
import TextFaceContainer from "@/components/textface/textfacecontainer";
import { faceData } from "@/libs/faces";
import { notFound } from "next/navigation";
import Share from "../share";
import { UseArtCollectionContext } from "@/context";

export async function generateMetadata() {
  const firstObject = faceData[0];

  return {
    title:
      `${firstObject?.name} Lenny Faces - ${firstObject?.data.slice(
        0,
        5
      )}` || "Lenny Face ( ͡° ͜ʖ ͡°) - All Text Faces Copy and Paste [Updated]",
    description: `${
      firstObject?.name
    } Lenny Faces Copy and Paste ${firstObject?.data.slice(0, 7)}`,
  };
}

export default function Page() {
    const { artCollection, setArtCollection } = UseArtCollectionContext();
  const [displayedData, setDisplayedData] = useState([faceData[0]]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const loadMoreData = () => {
        setDisplayedData((prevData) => {
          const nextIndex = prevData.length;
          if (nextIndex < faceData.length) {
            return [...prevData, faceData[nextIndex]];
          }
          return prevData;
        });
      };

      const timeoutId = setTimeout(loadMoreData, 1300); // 2 second delay

      return () => clearTimeout(timeoutId); // Clear timeout if effect dependencies change
    }
  }, [inView]);

  return (
    <main className=" !bg-[#eef2ff] !text-neutral-50 ">
      <div className="mx-4 xl:max-w-7xl xl:mx-auto">
        <Categories currentFace={displayedData[0].name} arrayData={faceData} path="text-faces" />
        <SaveInput />
        <Share text={artCollection} />
        <Ads />
        {displayedData.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl text-neutral-900 font-bold mt-4 text-center capitalize">{section.name.replaceAll("-", " ")}</h2>
            <TextFaceContainer TextFaces={section.data} />
          </div>
        ))}
        {displayedData.length < faceData.length && (
          <div ref={ref} className="text-neutral-700 text-center">
          <svg
            className="animate-spin mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width="50"
            height="50"
            style={{
              shapeRendering: "auto",
              display: "block",
              background: "transparent",
            }}
          >
            <g data-idx="1">
              <circle
                fill="none"
                strokeWidth="10"
                stroke="#fafafa"
                r="30"
                cy="50"
                cx="50"
                data-idx="2"
              ></circle>
              <circle
                fill="none"
                strokeLinecap="round"
                strokeWidth="8"
                stroke="#ba0ce9"
                r="30"
                cy="50"
                cx="50"
                data-idx="3"
                transform="matrix(-0.12535141161279867,-0.9921124047237182,0.9921124047237182,-0.12535141161279867,6.66195034445402,105.87319081682585)"
                strokeDasharray="32.4214px, 156.074px"
              ></circle>
            </g>
            <text
              data-watermark="true"
              textAnchor="middle"
              dominantBaseline="middle"
              strokeOpacity="0.1"
              fill="black"
              fillOpacity="0.1"
              stroke="white"
              strokeWidth="1"
              fontSize="5.0"
              x="50"
              y="50"
              data-idx="7"
              style={{ opacity: 1 }}
            >
              LOADING.IO
            </text>
          </svg>
        </div>
        )}
        <Facelist />
        <Ads />
        <article className="prose bg-neutral-50 px-3 py-4 rounded-xl my-3 md:max-w-7xl md:mx-auto">
        <h1>Does Text Face Look Good? 7 Ways To Use Text Face Art</h1>
          <p>Lenny Faces or Text Face Art uses a format that allows these emojis to be copied and pasted on every digital platform. The most common uses for these are as follows:</p>
        
          <h2>Social Media Posts</h2>
          <p>Social Media like Twitter relies on sharp opinions and a good sense of humor. Even on platforms like Instagram and Pinterest, if you want to build a strong following of people who understand you, you must be bold and straightforward with your feelings. Text-face emojis can help you do this!</p>
        
          <h2>Username And Profile</h2>
          <p>Most social media and gaming platforms require you to maintain a static profile that you can update to show your friends, family, and strangers more about your personality in the virtual world. On platforms like Slack and LinkedIn, your profile might even be seen by potential employers and supervisors! Choose your text face carefully to display the right emotions.</p>
        
          <h2>Personal Blogs</h2>
          <p>Spice up your blog, journal, or diary by keeping yourself up to date with the latest trending text face emojis that work efficiently on all devices, including IOS and Windows systems. Personal blogs reflect more and can also help you gain income streams when they generate enough viewership. Catch your reader's attention by adding some complex and intricate text face designs.</p>
        
          <h2>Text Messages and Email</h2>
          <p>Hands down, the best way to use Kawaii faces is by incorporating them into your daily conversations with friends, clients, or your partner. Indeed, you can also use these cute and attractive art symbols to spice up your dating profile or create a memorable first impression on the person of your dreams! Please don't shy away from expressing your emotions, and use these bold text face symbols to make it happen!</p>
        
          <h2>Gaming</h2>
          <p>Respond with Kawaii faces and Kaomoji faces and stun everyone in your gaming group chat! Help your team stand out and draw new members with the help of these simple but expressive text face emojis. You can also use them to communicate as fictional characters in a variety of RPG interfaces or express your ideas in the new craft/painting games that you play with your friends or family.</p>
        
          <h2>Cards And Posters</h2>
          <p>You can also copy and paste Kawaii faces on any software of your choice, including Word documents, PowerPoint, Photoshop, etc. These can add a personal touch to posters, birthday cards, and even professional content when appropriate. When you paste your text face on this software, it becomes easy to change the font style, size, and alignment according to your needs.</p>
        
          <h2>Step-by-step Guide - Find Unique Text Faces</h2>
          <ul>
            <li>All keyboards come with simple symbols and creative text face emojis. However, most of the time, these are old-fashioned and do not convey expressions. Keep up with your friends and social media trends - by finding unique Lenny faces on our website within seconds.</li>
            <li>Scroll down the homepage to look at the most popular Kawaii faces. Each text face will have a category written below it. For example, a Kaomoji face that shows a smiling character (〵(^ o ^)〴) will have ‘Happy’ written right underneath!</li>
            <li>You can also go on Google and type the exact emotion you want to convey using your text face. Add the name of our website to your search for the best results. You will be directed to our regularly updated category for your desired emotion!</li>
            <li>Scrolling downward, you will find categories like ‘Angry Text Faces,’ ‘Cry Text Faces,’ and ‘Love Text Faces’. Each category contains numerous variations from which you can choose the one that best expresses your situation.</li>
            <li>With this website, we have brought to you the widest collection of text faces when it comes to variety and applicability. Whatever emotions are situations you are looking for including kissing, eating, blushing, and hugging, there will be a category dedicated to it on our website!</li>
            <li>You will also find text face art with writing such as ‘Happy Birthday,’ ‘Merry Christmas,’ ‘Good Morning,’ and ‘Congratulations’ on the list. Music, sword fighting, and sports are also popular categories that users look for here. NSFW content is also available!</li>
            <li>On the top of the website's screen, you will see several categories. These are ‘Text Art,’ ‘Aesthetic Symbols,’ ‘Symbols,’ ‘Emoji,’ ‘Accented Letters,’ ‘Stylish Letters,’ and ‘Emoticons.’ These will help you narrow down your search!</li>
          </ul>
        
          <h2>How to Copy and Paste Unique Text Face Art?</h2>
          <p>We have aimed to make the process of copying and pasting Lenny faces as simple as possible!</p>
          <ul>
            <li>Go through the Kawaii faces in your required category and choose the one you want to copy.</li>
            <li>Every text face emoji is surrounded by a button-like white area. Select the button and press on it.</li>
            <li>The button will turn green, and a notification will tell you that the text face has been copied to the clipboard of your keyboard.</li>
            <li>Now go to the social media page, text message, or email where you want to paste the text face emoji.</li>
            <li>Hold the cursor or right-click on that area. Select ‘Paste’.</li>
            <li>The trendy text face art will appear in the desired area. Now proceed with your message, profile setup, or post!</li>
          </ul>
        
          <h2>Now Make Your Kawaii Face Instantly!</h2>
          <p>You can create your text Kaomoji face using a simple keyboard and ASCII text characters. You can copy and paste the Kawaii face from our website on any blank, text-based software and add punctuation marks or numbers to make your text face emoji. If you feel proud, you can donate your creation on this website! For more complex designs, you can use a text editor or an ASCII emoji generator to get hold of new emoji art. These days, the most generated AI-inspired technology ensures that whatever you create is accurate, brand new, and suitable to your custom needs. What are you waiting for? Jump on this notable trend, bring forward your inner child, and validate your edgy finds!</p>
        </article>
      </div>
    </main>
  );
}

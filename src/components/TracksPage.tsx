import React, { ReactNode } from "react";

interface TrackBoxProps {
  number: number;
  title: string;
  children: ReactNode;
}

const TracksPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-white pt-20">
        Sumbit your idea on any of these topics!
      </h1>
      <div
        className=" text-white pt-6 flex justify-center items-center "
        id="tracks"
      >
        <div className="relative flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0">
          <TrackBox number={1} title="SOFTWARE TRACK">
            <ul className="list-disc pl-5 space-y-2">
              <li className="whitespace-nowrap">WEB AND MOBILE APPLICATIONS</li>
              <li className="whitespace-nowrap">SECURITY AND PRIVACY</li>
              <li className="whitespace-nowrap">INTELLIGENT SYSTEMS</li>
              <li className="whitespace-nowrap">DATA SCIENCE AND ANALYTICS</li>
              <li className="whitespace-nowrap">
                COLLABORATION AND PRODUCTIVITY TOOLS
              </li>
              <li className="whitespace-nowrap">BLOCKCHAIN</li>
              <li className="whitespace-nowrap">AI</li>
            </ul>
          </TrackBox>
          <TrackBox number={2} title="HARDWARE TRACK">
            <ul className="list-disc pl-5 space-y-2">
              <li className="list-none">&nbsp;</li> {/* Empty column */}
              <li className="whitespace-nowrap">EMBEDDED SYSTEMS AND IOT</li>
              <li className="whitespace-nowrap">WEARABLE TECHNOLOGY</li>
              <li className="whitespace-nowrap">ROBOTICS AND AUTOMATION</li>
              <li className="whitespace-nowrap">DRONE TECHNOLOGY</li>
              <li className="whitespace-nowrap">
                ELECTRONICS AND CIRCUIT DESIGN
              </li>
              <li className="list-none">&nbsp;</li> {/* Empty column */}
            </ul>
          </TrackBox>
        </div>
      </div>
    </div>
  );
};

const TrackBox: React.FC<TrackBoxProps> = ({ number, title, children }) => {
  return (
    <div className="relative border-2 border-black rounded-lg p-4 w-full max-w-md">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold bg-pink-700 border-2 border-black  text-white">
          {number}
        </div>
        <h2 className="ml-4 text-lg md:text-xl font-bold text-white">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};

export default TracksPage;

import React, { ReactNode } from 'react';


interface TrackBoxProps {
    number: number;
    title: string;
    children: ReactNode;
    titleBgColor: string;
}

const TracksPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white p-8 flex justify-center items-center">
      <div className="relative">
        <div className="w-40 h-40 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold ml-[-500px] ring-4 ring-offset-20 ring-offset-purple-900 ring-white">
          TRACKS
        </div>
        {/* Adjusted arrow position to visually rise from the circle */}
        <span className="absolute left-[calc(100%-20rem)] top-[60%] -translate-y-1/2 transform text-white text-[25rem] rotate-[20deg]">
  →
</span>
        <span className="absolute left-[calc(100%-22rem)] top-[-20%] -translate-y-1/2 transform text-white text-[25rem] rotate-[-22deg]">
          →
        </span>
        <div className="absolute top-1/2 left-full ml-4 -translate-y-1/2 flex flex-col space-y-4">
          <TrackBox number={1} title="SOFTWARE TRACK" titleBgColor="bg-yellow-500">
            <ul className="list-disc pl-5 space-y-2">
              <li className="whitespace-nowrap">WEB AND MOBILE APPLICATIONS</li>
              <li className="whitespace-nowrap">SECURITY AND PRIVACY</li>
              <li className="whitespace-nowrap">INTELLIGENT SYSTEMS</li>
              <li className="whitespace-nowrap">DATA SCIENCE AND ANALYTICS</li>
              <li className="whitespace-nowrap">COLLABORATION AND PRODUCTIVITY TOOLS</li>
            </ul>
          </TrackBox>
          <TrackBox number={2} title="HARDWARE TRACK" titleBgColor="bg-yellow-500">
            <ul className="list-disc pl-5 space-y-2">
              <li className="whitespace-nowrap">EMBEDDED SYSTEMS AND IOT</li>
              <li className="whitespace-nowrap">WEARABLE TECHNOLOGY</li>
              <li className="whitespace-nowrap">ROBOTICS AND AUTOMATION</li>
              <li className="whitespace-nowrap">DRONE TECHNOLOGY</li>
              <li className="whitespace-nowrap">ELECTRONICS AND CIRCUIT DESIGN</li>
            </ul>
          </TrackBox>
        </div>
      </div>
    </div>
  );
};
const TrackBox: React.FC<TrackBoxProps> = ({ number, title, titleBgColor, children }) => {
    return (
      <div className="relative border-2 border-yellow-500 rounded-lg">
        <div className="rounded-lg p-4 ">
          <div className="flex items-center mb-2">
            <div className="w-12 h-10 mr-2 rounded-full flex items-center justify-center text-xl font-bold bg-black text-white">
              {number}
            </div>
            {/* Adjust the width of the title's background here */}
            <div className={`${titleBgColor} rounded-lg w-full`}> {/* Adjusted to w-full for full width */}
              <h2 className="text-xl font-bold text-black">{title}</h2>
            </div>
          </div>
          {children}
        </div>
      </div>
    );
};

export default TracksPage;
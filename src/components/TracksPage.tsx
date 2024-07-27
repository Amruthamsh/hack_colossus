import RegisterButton from "./RegisterButton";

const TracksPage = () => {
  const tracks = [
    {
      number: 1,
      title: "SOFTWARE TRACK",
      description: ["BLOCKCHAIN", "AI & ML"],
    },
    {
      number: 2,
      title: "HARDWARE TRACK",
      description: ["ROBOTICS", "IoT"],
    },
    {
      number: 3,
      title: "OPEN INNOVATION",
      description: [
        "Integrating diverse technologies.",
        "Solve real world problems!",
      ],
    },
  ];

  return (
    <div id="tracks" className="pt-24">
      <h1 className="text-center text-4xl font-bold text-white mb-12">
        Submit your idea!
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative border-2 border-green-300/50 rounded-lg p-4 bg-gray-400/10 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-800/40"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold bg-purple-700 border-2 border-black text-white">
                    {track.number}
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">
                    {track.title}
                  </h2>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {track.description.map((desc, i) => (
                  <li key={i} className="text-lg text-white whitespace-nowrap">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <RegisterButton name="Register and submit your idea!" />
        </div>
      </div>
    </div>
  );
};

export default TracksPage;

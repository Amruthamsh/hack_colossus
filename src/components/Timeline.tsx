const Timeline = () => {
  const events = [
    {
      title: "Ideathon",
      description: [
        "Submit your exciting idea by 15th August!",
        "Finalists will be announced on 23rd August.",
      ],
      iconColor: "bg-green-500",
    },
    {
      title: "Registration and Opening Ceremony - 30th August",
      description: [
        "8:30 AM : Reporting Time and Check-in",
        "9:00 AM : Official Start of Hackathon and Opening Remarks",
      ],
      iconColor: "bg-green-500",
    },
    {
      title: "Planning and Initial Development",
      description: [
        "Idea Validation and Project Planning",
        "Initial Coding and Prototype Development",
      ],
      iconColor: "bg-yellow-500",
    },
    {
      title: "Lunch Break and Midpoint Check-in",
      description: "1:00 PM - 3:00 PM : Lunch Break and Informal Check-ins",
      iconColor: "bg-yellow-500",
    },
    {
      title: "Focused Development",
      description: "3:00 PM - 7:00 PM : Intensive Coding and Development",
      iconColor: "bg-yellow-500",
    },
    {
      title: "Dinner Break and Continued Development",
      description: "7:00 PM - 8:00 PM : Dinner Break",
      iconColor: "bg-yellow-500",
    },
    {
      title: "Night Shift",
      description: "8:00 PM - 7:00 AM : Continued Development and Debugging",
      iconColor: "bg-yellow-500",
    },
    {
      title: "Final Stretch and Presentation Preparation",
      description: [
        "7:00 AM - 8:00 AM : Breakfast and Final Preparations",
        "8:00 AM - 9:00 AM : Project Submission and Setup for Presentations",
      ],
      iconColor: "bg-yellow-500",
    },
    {
      title: "Presentations and Judging",
      description: [
        "9:00 AM - 10:30 AM : Project Presentations and Demos",
        "10:30 AM - 11:00 AM : Judging and Awards Ceremony",
      ],
      iconColor: "bg-yellow-500",
    },
  ];

  return (
    <div
      className="flex flex-col items-center pt-20 sm:p-10 sm:pt-20"
      id="timeline"
    >
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 pt-8">
        TIMELINE
      </h1>
      <div className="w-full max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-100/10 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-800/40"
          >
            <div
              className={`w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-xl mb-4`}
            >
              {index + 1}
            </div>
            <h2 className="text-lg sm:text-xl text-green-400 font-semibold mb-2">
              {event.title}
            </h2>
            {Array.isArray(event.description) ? (
              event.description.map((desc, i) => (
                <p key={i} className="text-sm text-white mb-1">
                  {desc}
                </p>
              ))
            ) : (
              <p className="text-sm text-white">{event.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

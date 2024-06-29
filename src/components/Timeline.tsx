
const Timeline = () => {
    const events = [
      {
        title: 'Registration and Opening Ceremony',
        description: [
          '8:30 AM : Reporting Time and Check-in',
          '9:00 AM : Official Start of Hackathon and Opening Remarks'
        ],
        iconColor: 'bg-yellow-400',
      },
      {
        title: 'Planning and Initial Development',
        description: ['Idea Validation and Project Planning', 'Initial Coding and Prototype Development'],
        iconColor: 'bg-orange-400',
      },
      {
        title: 'Lunch Break and Midpoint Check-in',
        description: '1:00 PM - 3:00 PM : Lunch Break and Informal Check-ins',
        iconColor: 'bg-pink-400',
      },
      {
        title: 'Focused Development',
        description: '3:00 PM - 7:00 PM : Intensive Coding and Development',
        iconColor: 'bg-red-400',
      },
      {
        title: 'Dinner Break and Continued Development',
        description: '7:00 PM - 8:00 PM : Dinner Break',
        iconColor: 'bg-purple-400',
      },
      {
        title: 'Night Shift',
        description: '8:00 PM - 7:00 AM : Continued Development and Debugging',
        iconColor: 'bg-blue-400',
      },
      {
        title: 'Final Stretch and Presentation Preparation',
        description: ['7:00 AM - 8:00 AM : Breakfast and Final Preparations','8:00 AM - 9:00 AM : Project Submission and Setup for Presentations'],
        iconColor: 'bg-green-400',
      },
      {
        title: 'Presentations and Judging',
        description: ['9:00 AM - 10:30 AM : Project Presentations and Demos','10:30 AM - 11:00 AM :Judging and Awards Ceremony'],
        iconColor: 'bg-lime-400',
      },
    ];

    return (
        <div className="bg-gradient-to-b min-h-screen flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-2xl">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-yellow-200 mb-6 sm:mb-8">Timeline</h1>
            <div className="relative">
              {events.map((event, index) => (
                <div key={index} className="mb-6 sm:mb-8 flex items-start">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${event.iconColor} flex-shrink-0 flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div className="ml-4 text-white">
                    <h2 className="text-lg sm:text-xl text-yellow-300 font-semibold">{event.title}</h2>
                    {Array.isArray(event.description) ? (
                      event.description.map((desc, i) => (
                        <p key={i} className="text-xs sm:text-sm text-white">{desc}</p>
                      ))
                    ) : (
                      <p className="text-xs sm:text-sm text-white">{event.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default Timeline;

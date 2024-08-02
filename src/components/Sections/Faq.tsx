import RegisterButton from ".././RegisterButton";

const Faq = () => {
  const faqs = [
    {
      question:
        "Are there any restrictions on the types of technologies or frameworks we can use?",
      answer: "No, you can use any technology or framework you want.",
    },
    {
      question: "What are the tracks for the hackathon?",
      answer:
        "We have only two tracks, one for Hardware and one for Software. You can choose any of the tracks to participate in the hackathon.",
    },
    {
      question:
        "Can we use external hardware like IoT devices or VR headsets in our project?",
      answer:
        "Participants are allowed to use any hardware they want in their projects. However, they must bring their own hardware to the hackathon. We will not be providing any hardware to the participants.",
    },
  ];

  return (
    <div id="faq">
      <div className="flex items-center justify-center p-6 pt-24 ">
        <div className="w-full max-w-5xl text-white">
          <h1 className="text-center text-4xl font-bold mb-8">FAQs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/70 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-xl hover:bg-purple-500/30 transition-transform transition-shadow duration-300"
              >
                <div className="p-6 flex items-center justify-center overflow-auto">
                  <h2 className="text-lg sm:text-xl font-semibold text-green-400 text-left">
                    {faq.question}
                  </h2>
                </div>
                <div className="p-6 text-white flex items-start justify-center flex-1 overflow-auto">
                  <p className="text-sm sm:text-base text-left">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <RegisterButton name="Participate now!" />
      </div>
    </div>
  );
};

export default Faq;

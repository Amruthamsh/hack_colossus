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
    <div
      className="flex items-center justify-center p-6 pt-24 sm:p-10 sm:pt-24 bg-gray-900 m-10 rounded-3xl"
      id="faq"
    >
      <div className="w-full max-w-5xl text-white">
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8 text-white">
          FAQs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-purple-500/20 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 flex items-center justify-center overflow-auto">
                <h2 className="text-lg sm:text-xl font-semibold sm:h-20 text-green-400 text-left">
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
  );
};

export default Faq;

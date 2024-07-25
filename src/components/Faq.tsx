const Faq = () => {
    const faqs = [
      {
        question: 'Are there any restrictions on the types of technologies or frameworks we can use?',
        answer: 'No, you can use any technology or framework you want.',  
      },
      {
        question: 'What are the tracks for the hackathon?',
        answer: 'We have only two tracks, one for Hardware and one for Software. You can choose any of the tracks to participate in the hackathon.',
      },
      {
        question: 'Can we use external hardware like IoT devices or VR headsets in our project?',
        answer: 'Participants are allowed to use any hardware they want in their projects. However, they must bring their own hardware to the hackathon. We will not be providing any hardware to the participants.',
      },
    ];
  
    return (
      <div
        className="bg-gradient-to-b min-h-screen flex items-center justify-center p-6 sm:p-10"
        id="faq"
      >
        <div className="w-full max-w-5xl text-white">
          <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8">
            FAQs
          </h1>
          <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full sm:w-1/3 h-80"
              >
                <div className="bg-pink-200 p-4 h-1/2 flex items-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h2>
                </div>
                <div className="p-4 h-1/2 bg-white text-black flex items-center">
                  <p className="text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Faq;
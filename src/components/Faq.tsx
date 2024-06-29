const Faq = () => {
    const faqs = [
      {
        question: 'What is the advantage of hiring a consultant instead of doing it in-house?',
        answer: 'Having an FAQ section is a great way to present information about your product or service. Using the question-and-answer format makes it more relatable to your users.',
      },
      {
        question: 'What kind of deliverables are to be expected?',
        answer: 'Having an FAQ section is a great way to present information about your product or service. Using the question-and-answer format makes it more relatable to your users.',
      },
      {
        question: 'How long will the project take and how long until results can be measured?',
        answer: 'Having an FAQ section is a great way to present information about your product or service. Using the question-and-answer format makes it more relatable to your users.',
      },
    ];
  
    return (
      <div className="bg-gradient-to-b min-h-screen flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-5xl text-white">
          <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8">FAQs</h1>
          <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0 sm:space-x-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full sm:w-1/3 h-80">
                <div className="bg-gray-300 p-4 h-1/2 flex items-center">
                  <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
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
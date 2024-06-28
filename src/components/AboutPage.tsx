

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">ABOUT US</h1>

      <div className="flex justify-between mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">150+</h2>
          <p className="text-sm">ON-CAMPUS PARTICIPANTS</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">1560+</h2>
          <p className="text-sm">APPLICATION RECEIVED</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">1000+</h2>
          <p className="text-sm">REACH ON SOCIAL MEDIA</p>
        </div>
      </div>

      <p className="mb-8 text-center max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <div className="bg-white w-full h-64 flex items-center justify-center">
        <span className="text-gray-400">Image Placeholder</span>
      </div>
    </div>
  );
};

export default AboutPage;
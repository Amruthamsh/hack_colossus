const RegisterButton = () => {
  return (
    <button
      className="mt-4 mx-2 px-6 py-2 mb-4 hover:bg-pink-700 text-xl text-white font-bold rounded bg-purple-900 transition duration-300"
      onClick={() =>
        window.open(
          "https://pages.razorpay.com/pl_OYZI7SwKgNEH4z/view",
          "_blank"
        )
      }
    >
      Register Now
    </button>
  );
};

export default RegisterButton;

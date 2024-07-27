const RegisterButton = ({ name }: { name: string }) => {
  return (
    <button
      className="m-4 px-6 py-2 hover:bg-pink-700 text-xl text-white font-bold rounded bg-purple-900 transition duration-300"
      onClick={() =>
        window.open(
          "https://pages.razorpay.com/pl_OYZI7SwKgNEH4z/view",
          "_blank"
        )
      }
    >
      {name}
    </button>
  );
};

export default RegisterButton;

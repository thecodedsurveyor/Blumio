const Hero = () => {
  return (
    <main className="mt-8 flex flex-col-reverse items-center gap-4 p-8 lg:mt-16 lg:grid lg:grid-cols-2 xl:gap-12 xl:px-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-xl font-bold leading-snug text-black xl:text-left xl:text-5xl 2xl:text-6xl">
          Transform Your Team&apos;s Productivity with Tasker
        </h1>
        <p className="my-0 text-center text-xl xl:my-12 xl:text-left">
          The all-in-one task management platform that brings your team,
          projects, and goals together in one powerful workspace.
        </p>

        <form className="flex flex-col items-center gap-4 xl:flex-row xl:gap-8">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-7/12 rounded-md border border-blue-300 px-8 py-4 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-block rounded-md bg-blue-500 px-6 py-4 font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Start Free Trial
          </button>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600 xl:text-left">
          Free 14-day trial • No credit card required • Cancel anytime
        </p>
      </div>
      <div>
        <img
          src="./images/hero-img.svg"
          className="w-[600px]"
          alt="Tasker dashboard illustration"
        />
      </div>
    </main>
  );
};

export default Hero;

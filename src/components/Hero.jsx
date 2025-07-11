const Hero = () => {
  return (
    <main className="mt-8 flex flex-col-reverse items-center gap-4 p-8 lg:mt-36 lg:grid lg:grid-cols-2 xl:gap-12 xl:px-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-xl font-bold leading-snug text-black xl:text-left xl:text-5xl 2xl:text-6xl">
          Tasker brings all your tasks teams & tools together
        </h1>
        <p className="my-0 text-center text-xl xl:my-12 xl:text-left">
          Keep everything in the same place-even if your team isn`t.
        </p>

        <form className="flex flex-col items-center gap-4 xl:flex-row xl:gap-8">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-7/12 rounded-md border border-green-700 px-8 py-4"
          />
          <a
            href="#"
            className="inline-block rounded-md bg-blue-500 px-6 py-4 text-white"
          >
            Sign Up its free
          </a>
        </form>
      </div>
      <div>
        <img src="./images/hero-img.svg" className="w-[600px]" alt="hero" />
      </div>
    </main>
  );
};

export default Hero;

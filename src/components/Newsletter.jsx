const Newsletter = () => {
  return (
    <section className="relative -top-4 -z-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-blue-500 p-4 text-white xl:rounded-3xl xl:p-20">
      <img
        src="./images/arrow.svg"
        className="absolute -top-28 left-36 hidden translate-x-2/4 translate-y-2/4 xl:block"
        alt="Arrow"
      />
      <img
        src="./images/message-paper.svg"
        className="absolute -top-16 left-[36%] hidden translate-x-2/4 translate-y-2/4 xl:block"
        alt="Arrow"
      />
      <h3>Get Latest Updates</h3>
      <h2 className="text-xl font-bold xl:text-4xl">
        Subscribe To Our Newsletter
      </h2>
      <p className="text-center xl:w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illum
        fugiat, quibusdam deserunt.
      </p>

      <form className="mt-8 flex flex-col gap-4 xl:flex-row">
        <input
          type="text"
          className="w-full rounded-md border border-white bg-blue-500 p-2 placeholder:text-white focus:outline-white  xl:w-[20rem]"
          placeholder="Email"
        />
        <button className="rounded-md border-none bg-white p-2 font-semibold text-black">
          Subscribe Now
        </button>
      </form>
    </section>
  );
};

export default Newsletter;

const Features = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between px-8 py-10 xl:flex-row xl:px-20">
        <div className="flex flex-col items-start justify-start gap-4 xl:w-1/3 xl:items-start xl:justify-start">
          <p className="text-md text-blue-500">Learn about Features</p>
          <h3 className="text-xl font-bold text-black xl:text-4xl">
            Our Top Features
          </h3>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            quos vero adipisci laudantium explicabo voluptatibus fuga at.
            Suscipit, quos id!
          </p>

          <a
            href="#"
            className="inline-block rounded-md bg-blue-500 px-8 py-2 text-white"
          >
            Get Started
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 px-2 xl:mt-0 xl:flex xl:w-2/4 xl:px-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 rounded-xl border border-green-700 bg-white p-4">
              <div className=" self-baseline rounded-lg bg-red-500 p-2">
                <img src="./images/tasks.svg" alt="task-icon" />
              </div>
              <p className="text-2xl font-bold text-black">Tasks</p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates itaque et asperiores.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-green-700 bg-white p-4">
              <div className="self-baseline rounded-lg bg-green-500 p-2">
                <img src="./images/dna.svg" alt="task-icon" />
              </div>
              <p className="text-2xl font-bold text-black">Onboarding</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates itaque et asperiores.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="mt-4 flex flex-col gap-2 rounded-xl border border-green-700 bg-white p-4">
              <div className=" self-baseline rounded-lg bg-blue-500 p-2">
                <img src="./images/clock.svg" alt="task-icon" />
              </div>
              <p className="text-2xl font-bold text-black">Time slots</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates itaque et asperiores.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2 rounded-xl border border-green-700 bg-white p-4">
              <div className="self-baseline rounded-lg bg-yellow-500 p-2">
                <img src="./images/chat.svg" alt="task-icon" />
              </div>
              <p className="text-2xl font-bold text-black">Collaboration</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates itaque et asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between bg-white px-8 py-16 xl:flex-row xl:px-20">
        <div>
          <img
            src="./images/lady-hat.svg"
            alt="hat"
            className="w-3/4 xl:w-full"
          />
        </div>

        <div className="mt-8 flex flex-col items-start justify-start gap-4 xl:mt-0 xl:w-2/5">
          <p className="text-md text-blue-500">Perform Your All Tasks</p>
          <h3 className="text-xl font-bold text-black xl:text-4xl">
            Perform Your All Tasks At One Place
          </h3>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            quos vero adipisci laudantium explicabo voluptatibus fuga at.
            Suscipit, quos id!
          </p>

          <a
            href="#"
            className="inline-block rounded-md bg-blue-500 px-8 py-2 text-white"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-between bg-white px-8 py-8 xl:flex-row xl:px-20 xl:py-16">
        <div className="flex flex-col items-start justify-start gap-4 xl:w-2/5">
          <p className="text-md text-blue-500"> Boost Your Productivity</p>
          <h3 className="text-xl font-bold text-black xl:text-4xl">
            Boost Your Productivity and Management
          </h3>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            quos vero adipisci laudantium explicabo voluptatibus fuga at.
            Suscipit, quos id!
          </p>

          <a
            href="#"
            className="inline-block rounded-md bg-blue-500 px-8 py-2 text-white"
          >
            Get Started
          </a>
        </div>

        <div>
          <img
            src="./images/rocket-man.svg"
            alt="hat"
            className="w-3/4 xl:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

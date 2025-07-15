const TrustedBy = () => {
  const companies = [
    {
      name: "Microsoft",
      logo: "https://images.pexels.com/photos/5428261/pexels-photo-5428261.jpeg?auto=compress&cs=tinysrgb&w=100&h=60",
    },
    {
      name: "Google",
      logo: "https://images.pexels.com/photos/5428261/pexels-photo-5428261.jpeg?auto=compress&cs=tinysrgb&w=100&h=60",
    },
    {
      name: "Apple",
      logo: "https://images.pexels.com/photos/5428261/pexels-photo-5428261.jpeg?auto=compress&cs=tinysrgb&w=100&h=60",
    },
    {
      name: "Meta",
      logo: "https://images.pexels.com/photos/5428261/pexels-photo-5428261.jpeg?auto=compress&cs=tinysrgb&w=100&h=60",
    },
    {
      name: "Tesla",
      logo: "https://images.pexels.com/photos/5428261/pexels-photo-5428261.jpeg?auto=compress&cs=tinysrgb&w=100&h=60",
    },
    {
      name: "Netflix",
      logo: "https://images.pexels.com/photos/5428261/pexels-photo-5428261.jpeg?auto=compress&cs=tinysrgb&w=100&h=60",
    },
  ];

  return (
    <section className="border-b border-gray-100 bg-white py-16">
      <div className="mx-auto w-[80%] max-w-none px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Trusted by industry leaders
          </h3>
        </div>

        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex transform items-center justify-center opacity-60 transition-opacity duration-300 hover:scale-105 hover:opacity-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 p-4">
                <span className="text-xs font-semibold text-gray-600">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;

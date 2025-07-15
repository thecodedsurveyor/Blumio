import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "Blumio has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity by 300%.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Engineering Lead",
      company: "DevCorp",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "The automation features in Blumio are game-changing. We have reduced manual work by 80% and can focus on what really matters - building great products.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Creative Director",
      company: "Design Studio",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
      content:
        "Beautiful design meets powerful functionality. Blumio helps us manage complex creative projects with ease and keeps our entire team aligned.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-emerald-50 py-20">
      <div className="mx-auto w-[80%] max-w-none px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Loved by teams
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              worldwide
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            See what our customers have to say about their experience with
            Blumio
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="transform rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="mb-6 flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 italic leading-relaxed text-gray-700">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/login"
            className="transform rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Join thousands of happy customers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

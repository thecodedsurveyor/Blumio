import {
  FaUsers,
  FaRocket,
  FaHeart,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaAward,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "100,000+", label: "Active Teams", icon: <FaUsers /> },
    { number: "50M+", label: "Tasks Completed", icon: <FaRocket /> },
    { number: "150+", label: "Countries", icon: <FaGlobe /> },
    { number: "99.9%", label: "Uptime", icon: <FaAward /> },
  ];

  const values = [
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Innovation",
      description:
        "We continuously push the boundaries of what's possible in productivity software, always seeking better ways to help teams succeed.",
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-500" />,
      title: "Collaboration",
      description:
        "We believe the best results come from great teamwork, both within our company and among the teams that use our products.",
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Customer Success",
      description:
        "Your success is our success. We're committed to providing exceptional support and continuously improving based on your feedback.",
    },
    {
      icon: <FaRocket className="text-4xl text-purple-500" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from product development to customer service, always raising the bar.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "/images/team/sarah.jpg",
      bio: "Former product manager at Google with 10+ years in enterprise software.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "/images/team/michael.jpg",
      bio: "Ex-engineering lead at Spotify, passionate about scalable architecture.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      image: "/images/team/emily.jpg",
      bio: "Product strategist with experience at Slack and Atlassian.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "/images/team/david.jpg",
      bio: "Former principal engineer at Uber, focused on building reliable systems.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description:
        "Tasker was founded with the mission to simplify project management for teams of all sizes.",
    },
    {
      year: "2020",
      title: "First 1,000 Users",
      description:
        "Reached our first milestone of 1,000 active users and launched our mobile apps.",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description:
        "Raised $15M in Series A funding to accelerate product development and team growth.",
    },
    {
      year: "2022",
      title: "Enterprise Launch",
      description:
        "Launched Tasker Enterprise with advanced security and compliance features.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description:
        "Opened offices in London and Singapore, serving customers in 150+ countries.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description:
        "Integrated AI-powered features to help teams work smarter and more efficiently.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">About Tasker</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
            We're on a mission to help teams around the world work better
            together and achieve extraordinary results.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center text-3xl text-blue-600">
                  {stat.icon}
                </div>
                <div className="mb-2 text-4xl font-bold text-gray-800">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-800">
                Our Story
              </h2>
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  Founded in 2019 by Sarah Johnson and Michael Chen, Tasker was
                  born out of frustration with existing project management tools
                  that were either too complex for small teams or too simplistic
                  for growing organizations.
                </p>
                <p>
                  Having worked at companies like Google, Spotify, and Slack,
                  our founders understood the importance of effective
                  collaboration tools. They set out to create a platform that
                  would scale with teams, from startups to enterprises.
                </p>
                <p>
                  Today, Tasker serves over 100,000 teams across 150+ countries,
                  helping them manage millions of tasks and projects. We're
                  proud to be trusted by organizations ranging from innovative
                  startups to Fortune 500 companies.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
              <img
                src="/images/team-collaboration.svg"
                alt="Team collaboration illustration"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              These core values guide everything we do and shape how we build
              products and serve our customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-8 text-center shadow-lg"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform team productivity.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="w-24 flex-shrink-0 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 rounded-xl bg-gray-50 p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-800">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate leaders driving Tasker's vision and growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 text-center shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mb-1 text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <div className="mb-3 font-semibold text-blue-600">
                  {member.role}
                </div>
                <p className="mb-4 text-sm text-gray-600">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <FaLinkedin />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-blue-400 hover:text-blue-500"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-gray-800 hover:text-gray-900"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Join Our Mission</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            We're always looking for talented individuals who share our passion
            for building great products and helping teams succeed.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-8 py-4 font-semibold text-green-600 transition-colors hover:bg-gray-100">
              View Open Positions
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-green-600">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

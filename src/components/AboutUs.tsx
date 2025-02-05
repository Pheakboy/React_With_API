import { useState, useEffect } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface AboutUsDataType {
  title: string;
  description: string;
  mission: string;
  vision: string;
  contactUs: ContactInfo;
  team: TeamMember[];
}

const aboutUsData = {
  aboutUs: {
    title: "About Us",
    description:
      "Welcome to TodayApp! Our mission is to help you stay organized and manage your daily tasks efficiently.",
    mission: "To empower individuals with effective task management solutions.",
    vision: "To be the leading app for daily organization and productivity.",
    contactUs: {
      phone: "+1234567890",
      email: "support@todayapp.com",
      address: "123 Productivity Lane, Task City, OrganizeLand",
    },
    team: [
      {
        name: "John Doe",
        role: "Founder & CEO",
        bio: "John is passionate about productivity tools and has over 10 years of experience in app development.",
      },
      {
        name: "Jane Smith",
        role: "Lead Developer",
        bio: "Jane specializes in creating user-friendly mobile applications with a focus on design and performance.",
      },
      {
        name: "Emily Johnson",
        role: "Marketing Manager",
        bio: "Emily connects with users to understand their needs and promote our app effectively.",
      },
    ],
  },
};

const AboutUs = () => {
  const [data, setData] = useState<AboutUsDataType | null>(null);

  useEffect(() => {
    setData(aboutUsData.aboutUs);
  }, []);

  if (!data) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">{data.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{data.description}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Mission</h2>
        <p className="text-lg text-gray-700">{data.mission}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Vision</h2>
        <p className="text-lg text-gray-700">{data.vision}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
        <ul className="list-none text-lg text-gray-700">
          <li><strong>Phone:</strong> {data.contactUs.phone}</li>
          <li><strong>Email:</strong> {data.contactUs.email}</li>
          <li><strong>Address:</strong> {data.contactUs.address}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="space-y-6">
          {data.team.map((member, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-md text-gray-600">{member.role}</p>
              <p className="text-lg text-gray-700 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

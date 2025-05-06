import React from 'react';

const leadershipTeam = [
  {
    name: "Maginga Mwenge",
    title: "Chief Executive Officer",
    bio: "John leads the company with a vision for financial inclusion and sustainable growth."
  },
  {
    name: "Mary",
    title: "Manager",
    bio: "Jane oversees daily operations and ensures smooth service delivery."
  },
  {
    name: "Asha Abdallah",
    title: "Human Resource",
    bio: "Mary manages our most valuable asset: our people."
  },
  {
    name: "James",
    title: "Chief Accountant",
    bio: "Michael ensures our finances are healthy and transparent."
  },
  {
    name: "Magdalena",
    title: "Assistant Accountant",
    bio: "Alice supports the accounting team with dedication and precision."
  },
  {
    name: "Elia Mganga",
    title: "Chief Loan Officer",
    bio: "Peter helps clients access the financial support they need."
  },
  {
    name: "Paulina",
    title: "Secretary",
    bio: "Susan keeps our office organized and our clients welcomed."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              S
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About SIONG'O Microfinance</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We are committed to empowering communities through accessible financial solutions
            that drive sustainable growth and economic development.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2024, SIONG'O Microfinance started with a mission to bridge the financial gap in underserved 
              communities.It started with a single branch and then grew to 11 branches. We identified that many hardworking individuals and small business owners lacked access to 
              formal financial services, preventing them from achieving economic stability and growth.
            </p>
            <p className="text-gray-600 mb-6">
              Within a year, we have expanded our reach and services while maintaining our core commitment to 
              financial inclusion, ethical practices, and community development. Today, we serve thousands of 
              clients across the region with personalized financial solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-green-700 mb-2">1000+</p>
                <p className="text-gray-700">Clients Served</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-green-700 mb-2">11</p>
                <p className="text-gray-700">Local Branches</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/money-plant.jpg" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white text-xl font-bold">Growing Financially</p>
                <p className="text-white/80">Our commitment to community development</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-32 w-32 bg-green-600 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-green-600/30 rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600 hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <span className="text-2xl text-green-700">👥</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Community First</h4>
              <p className="text-gray-600">
                We prioritize the needs of the communities we serve and ensure that our services 
                contribute positively to their development and well-being.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600 hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <span className="text-2xl text-green-700">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Integrity & Transparency</h4>
              <p className="text-gray-600">
                We operate with the highest ethical standards, ensuring transparency in all our 
                transactions and building relationships based on trust and honesty.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600 hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <span className="text-2xl text-green-700">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Financial Inclusion</h4>
              <p className="text-gray-600">
                We believe that everyone deserves access to financial services, regardless of their 
                economic status. We strive to make financial services accessible to all.
              </p>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Our Founders</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* John Siong'o */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
                <div className="relative">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/mr01.jpg"
                      alt="Founder of SIONG'O Microfinance" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Mr.Maginga Mwenge</h4>
                  <p className="text-green-600 font-semibold mb-4">Founder</p>
                  <p className="text-gray-600">
                    With great experience in the financial sector, Maginga Mwenge founded SIONG'O Microfinance 
                    with a vision to transform lives through financial empowerment.
                  </p>
                </div>
              </div>
            </div>
            {/* Mrs.maginga mwenge*/}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
                <div className="relative">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="/mrs.jpg" // Replace with actual image
                      alt="Co-Founder of SIONG'O Microfinance" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Mrs. Adelina Maginga</h4>
                  <p className="text-green-600 font-semibold mb-4">Co-Founder</p>
                  <p className="text-gray-600">
                    A passionate advocate for women's financial empowerment, Mrs. Siong'o brings valuable 
                    expertise in community development and sustainable microfinance practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h4>
                <p className="text-green-600 font-semibold mb-2">{leader.title}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Branches Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Our Branches</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Main Branch</h4>
              <p className="text-gray-600">Mirongo, Nyamagana-Mwanza</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Morogoro Branch</h4>
              <p className="text-gray-600">Morogoro, Tanzania</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Ifakara Branch</h4>
              <p className="text-gray-600">Ifakara, Tanzania</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Shinyanga Branch</h4>
              <p className="text-gray-600">Shinyanga, Tanzania</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Mbeya Branch</h4>
              <p className="text-gray-600">Mbeya, Tanzania</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Mpanda Branch</h4>
              <p className="text-gray-600">Mpanda, Tanzania</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Tabora Branch</h4>
              <p className="text-gray-600">Tabora, Tanzania</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Lango Branch</h4>
              <p className="text-gray-600">Mwanza, Tanzania</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Mkuyuni Branch</h4>
              <p className="text-gray-600">Mwanza, Tanzania</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
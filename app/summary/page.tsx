import Link from "next/link";
import Image from "next/image";
import Footer from '../components/footer';

export default function Summary() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-green-900 text-white overflow-hidden">
  {/* Pattern Background */}
  <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Summary Information
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          An overview of Aram Group's divisions and their core services
        </p>
      </div>
    </section>


      {/* Summary Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aram Group */}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="relative w-full md:h-full h-96" // Ensure the container takes full width and adjusts its height correctly
                style={{
                  backgroundImage: "url('/images/background.jpg')", // Ensure the image path is correct
                  backgroundPosition: "center", // Align image to the center
                  backgroundSize: "cover", // Ensure the image covers the full height and width
                  height: "100%" // Ensure it spans the full height of its parent
                }}
              >
                {/* Background image applied directly */}
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-[250px] h-[250px] bg-white flex items-center justify-center rounded-lg shadow-md">
                    <Image
                      src="/images/aram_transparent.png"
                      alt="Aram Group Logo"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Group</h2>
                <p className="text-gray-700 mb-6">
                  We are committed to integrity, performance, and value. Our success is built on long-term partnerships and client satisfaction.
                </p>
                <p className="text-gray-700">
                  We maintain the highest standards in contracting and construction, ensuring quality and excellence in every project. We are more than just a trading company. We are a comprehensive solution provider across multiple sectors.
                </p>
              </div>
            </div>
          </div>



          {/* Aram Construction */}
          <div id="aram-construction" className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-full order-1 md:order-2">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/images/sum-info-aram-const.png')",
                    backgroundPosition: "center", // Align image to center horizontally
                    backgroundSize: "cover", // Ensure the image covers the full height and width
                    height: "100%", // Ensure it spans the full height of its parent
                  }}
                ></div>
              </div>
              <div className="p-8 order-2 md:order-1">
                <div className="flex justify-center mb-6">
                  <div className="w-[250px] h-[250px] bg-white flex items-center justify-center rounded-lg shadow-md">
                    <Image
                      src="/assets/logo/ARAM.logo.jpg"
                      alt="Aram Group Logo"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Construction</h2>
                <p className="text-gray-700 mb-6">
                  Civil & Structural Construction – Specializing in building construction, repairs, maintenance, and renovations.
                </p>
                <p className="text-gray-700">
                  Our civil and structural construction services cover a wide range of essential infrastructure and building solutions. We specialize in creating durable, safe, and efficient structures—from foundations to full-scale systems—serving both public and private sector projects across the UAE.
                </p>
              </div>
            </div>
          </div>


          {/* Aram Golden Line General Trading */}
          <div id="aram-general-trading" className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-full">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/images/general-trading.jpeg')",
                    backgroundPosition: "center", // Align image to center horizontally
                    backgroundSize: "cover", // Ensure the image covers the full height and width
                    height: "100%", // Ensure it spans the full height of its parent
                  }}
                ></div>
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-[250px] h-[250px] bg-white flex items-center justify-center rounded-lg shadow-md">
                    <Image
                      src="/assets/logo/aram-golden.png"
                      alt="Aram Group Logo"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Golden Line General Trading</h2>
                <p className="text-gray-700 mb-6">
                  General Trading – Delivering quality products and tailored solutions across diverse industries, building trusted connections and ensuring reliable service every step of the way.
                </p>
                <p className="text-gray-700">
                  Our trading division connects markets and delivers value to clients across various sectors. We source high-quality products and provide tailored solutions to meet the specific needs of our clients, ensuring reliable service and building long-term partnerships.
                </p>
              </div>
            </div>
          </div>



          {/* Golden Aram Building Contracting */}
          <div id="aram-building-contracting" className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-full order-1 md:order-2">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/images/sum-info-aram-contracting.jpeg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "100%",
                  }}
                ></div>
              </div>
              <div className="p-8 order-2 md:order-1">
                <div className="flex justify-center mb-6">
                  <div className="w-[300px] h-[300px] bg-white flex items-center justify-center rounded-lg shadow-md">
                    <Image
                      src="/assets/logo/Golden Aram Building Contracting.png"
                      alt="Aram Group Logo"
                      width={300}
                      height={300}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Golden Aram Building Contracting</h2>
                <p className="text-gray-700 mb-6">
                  Building Contracting – Expertly managing construction, renovation, and maintenance projects with a focus on quality, efficiency, and long-term value to ensure complete client satisfaction.
                </p>
                <p className="text-gray-700">
                  At Golden Aram Building Contracting, we provide expert contracting services focused on project supervision, efficient management, and above all, client satisfaction. We ensure every stage of the project is handled with precision, transparency, and professionalism.
                </p>
              </div>
            </div>
          </div>



          {/* Aram Golden Line Agricultural Services */}
          <div id="aram-agricultural-services" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-full"> {/* Adjust height for smaller screens */}
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/images/agricultrual.jpeg')",
                    backgroundPosition: "center", // Align the image to center horizontally
                    backgroundSize: "cover", // Ensure the image covers the full height and width
                    height: "100%", // Ensure it spans the full height of its parent container
                  }}
                ></div>
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-[250px] h-[250px] bg-white flex items-center justify-center rounded-lg shadow-md">
                    <Image
                      src="/assets/logo/Ararm Golden Line Agricutural.png"
                      alt="Aram Group Logo"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Aram Golden Line Agricultural Services</h2>
                <p className="text-gray-700 mb-6">
                  Agricultural Services – Providing reliable support and innovative solutions for farming and agribusiness, focused on productivity, sustainability, and complete client satisfaction.
                </p>
                <p className="text-gray-700">
                  Our agricultural services division is dedicated to enhancing outdoor environments through sustainable landscaping, expert plant care, and creative floral solutions. We deliver tailored green space solutions for both commercial and residential projects with a focus on aesthetics, function, and long-term care.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-green-900 text-white overflow-hidden">
  {/* Pattern Background */}
  <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-6">
      Explore Our Services
    </h2>
    <p className="text-xl mb-8 max-w-3xl mx-auto">
      Learn more about our comprehensive range of services and how we can help with your next project.
    </p>
    <Link
      href="/business"
      className="inline-block bg-white text-green-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
    >
      View Our Business & Expertise
    </Link>
  </div>
</section>


      {/* Footer */}
      <Footer />

    </div>
  );
} 
const About = () => {
    return (
        <div className="bg-gray-100 py-16 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#10375C] mb-4">About Foodies Point</h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to <span className="text-blue-500 font-bold">Foodies Point</span>, your ultimate destination for exploring and ordering food from top-rated restaurants near you! We make it easy to find your favorite dishes and try new cuisines, all from the comfort of your home.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-[#10375C] mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  At Foodies Point, our mission is to connect food lovers with the best dining options in their area. We aim to deliver convenience, quality, and a wide variety of cuisines right to your doorstep.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-[#10375C] mb-3">Why Choose Us?</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>🍔 Access to top-rated restaurants</li>
                  <li>🚀 Fast and reliable delivery services</li>
                  <li>🌟 User-friendly platform for browsing and ordering</li>
                  <li>💳 Secure and flexible payment options</li>
                </ul>
              </div>
            </div>
            <p className="text-[#10375C] mt-8 font-medium">
              Whether you're craving a quick snack or planning a feast, Foodies Point has got you covered!
            </p>
          </div>
        </div>
      );
}
export default About;
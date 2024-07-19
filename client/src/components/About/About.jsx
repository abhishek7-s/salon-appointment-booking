import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/3993309/pexels-photo-3993309.jpeg?auto=compress&cs=tinysrgb&w=600b"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Our Mission:
                      <p className='mt-8 text-sm text-gray-900'> At Hair Salon Academy,
                         our mission is to provide top-notch
                         grooming services tailored to the uniqu
                         needs of every client. We combine the latest
                         trends with timeless techniques to ensure you 
                         walk out feeling confident and refreshed.</p>
                      </h2>
                      <br/>
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Our Team:
                      <p className="mt-6 text-sm text-gray-900">
                     Our team of skilled barbers and stylists are passionate
                     about their craft. With years of experience and continuous 
                     training, they are dedicated to delivering precision cuts, 
                     flawless shaves, and personalized advice to help you look your best.    
                      </p>
                      </h2>
                      <br/>
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Our Services:
                      <p className="mt-4 text-sm text-gray-900">
                     From classic cuts and beard trims to contemporary
                     styles and hair treatments, we offer a full range of grooming 
                     services designed for men. Whether you're preparing for a big event
                     or just need a routine touch-up, we've got you covered.
                      </p>
                      </h2>
                  </div>
              </div>
          </div>
      </div>
  );
}
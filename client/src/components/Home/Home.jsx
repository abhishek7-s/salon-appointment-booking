import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
    return (
        <div className="container mx-auto w-full max-w-7xl p-0">
            <aside className="relative overflow-hidden text-black rounded-lg flex flex-col-reverse sm:flex-row">
                <div className="relative z-10 max-w-screen-xl px-2 pb-10 pt-10 sm:py-24 mx-auto sm:px-2 lg:px-8 sm:w-1/2">
                    <div className="max-w-xl sm:mt-1 mt-8 space-y-8 text-center sm:text-left sm:ml-auto">
                        <h2 className="shiny-text px-1" >Welcome to our Hair Salon Academy</h2>
                        <span className="hidden sm:block text-4xl fade-in">Experience the best in men's grooming.</span>
                        <p className="text-lg">
                            At our salon, we offer top-notch services tailored to your grooming needs. Our experienced barbers ensure you leave looking sharp and feeling confident.
                        </p>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/Book-Appointment"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg> Book Appointment
                        </Link>
                    </div>
                </div>

                <div className="relative w-full sm:my-20 sm:pt-1 pt-12 h-full flex  sm:w-1/2">
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src="https://img.freepik.com/free-photo/hairdresser-barber-shop-styling-hair-client_1303-20981.jpg?w=996&t=st=1721592422~exp=1721593022~hmac=a1b3c9b457d21a5fec0600c03d35148b5e4e1e49285e987e6a7b1a86f0fa4077"
                        alt="Men's Hair Salon Interior"
                    />
                </div>
            </aside>

            <div className="mx-auto max-w-screen-xl py-8 px-2 sm:px-4 lg:px-8">
                <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            className="w-full h-56 object-cover"
                            src="https://images.pexels.com/photos/4952620/pexels-photo-4952620.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Haircut Service"
                        />
                        <div className="p-6">
                            <h4 className="text-xl font-bold mb-2">Haircuts</h4>
                            <p className="text-gray-700">Precision haircuts to give you a sharp and modern look.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            className="w-full h-56 object-cover"
                            src="https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Beard Trim Service"
                        />
                        <div className="p-6">
                            <h4 className="text-xl font-bold mb-2">Beard Trims</h4>
                            <p className="text-gray-700">Expert beard grooming to keep your beard looking its best.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            className="w-full h-56 object-cover"
                            src="https://images.pexels.com/photos/4952625/pexels-photo-4952625.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Hair Styling Service"
                        />
                        <div className="p-6">
                            <h4 className="text-xl font-bold mb-2">Hair Styling</h4>
                            <p className="text-gray-700">Professional styling for any occasion.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

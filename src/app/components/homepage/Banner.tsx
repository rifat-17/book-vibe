
import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="px-4 py-8 md:py-12">
            <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-100 shadow-sm">
                <div className="grid items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-12 lg:px-16 lg:py-16">

                    {/* Left Side */}
                    <div className="space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                            📚 Discover Your Next Favorite Book
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                            Books to freshen up{" "}
                            <span className="text-emerald-600">
                                your bookshelf
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                            Explore a carefully curated collection of books,
                            discover new stories, and find your next favorite
                            read.
                        </p>

                        {/* Button */}
                        <div className="flex flex-wrap gap-4">
                            <button className="btn rounded-xl bg-emerald-600 px-6 text-white hover:bg-emerald-700">
                                Explore Books →
                            </button>

                            <button className="btn btn-outline rounded-xl border-emerald-600 px-6 text-emerald-700 hover:bg-emerald-600 hover:text-white">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Decorative background */}
                            <div className="absolute -inset-3 rounded-3xl bg-emerald-200/50 blur-2xl"></div>

                            {/* Image */}
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src={BannerImg}
                                    alt="Books on a bookshelf"
                                    className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;


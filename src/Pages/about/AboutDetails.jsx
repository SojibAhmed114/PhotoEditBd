import React from 'react'
import { stats } from '../../Utils/Stats'

const AboutDetails = () => {
  return (
    <section className="pb-20">
      <h1 className=" text-gray-800  mb-6 text-3xl text-center  mt-5 md:text-4xl font-medium pb-1 lg:leading-14 font-subHeader rounded-2xl">
        About Us
      </h1>
      <div className="grid grid-cols-1 pt-10 lg:grid-cols-2 items-center gap-5 md:gap-10 mx-4">
        {/* text section */}
        <div className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-4">
          <article className="py-4">
            <h1 className="text-2xl md:text-3xl font-semibold underline underline-offset-8 decoration-1">
              Who We Are
            </h1>
            <p className="mt-2 text-base md:text-lg text-gray-700">
              We are a team of professional photo editors providing high-quality
              image editing services for clients worldwide.
            </p>
          </article>

          <article className="py-4 rounded-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold underline underline-offset-8 decoration-1">
              Our Mission
            </h1>
            <p className="mt-2 text-base md:text-lg text-gray-700">
              To make your photos flawless, attractive, and ready for branding —
              with precision and creative editing.
            </p>
          </article>

          <article className="py-4 rounded-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold underline underline-offset-8 decoration-1">
              Who We Work With
            </h1>
            <p className="mt-2 text-base md:text-lg text-gray-700">
              Photographers, eCommerce businesses, digital agencies,
              freelancers, and everyone else.
            </p>
          </article>
        </div>
        {/* card section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-purple-700">
                  {stat.title}
                </h3>
                <p className="mt-2 text-lg text-gray-700">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDetails
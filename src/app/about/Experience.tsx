import React from 'react'

export default function Experience() {
  return (
    <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Experience
        </h2>

        <div className="space-y-6">

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg"> Cosmoshop </h3>
            <p className="text-gray-600 mt-2">
              Building responsive user interfaces using React, Next.js, and
              modern CSS frameworks like Tailwind.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg"> Henderson Nuttal Jewelers </h3>
            <p className="text-gray-600 mt-2">
              Creating a website for a local Jeweler with clean architecture and
              modern development practices.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg"> Mcdonalds Crew Member </h3>
            <p className="text-gray-600 mt-2">
              Learnt how to flip burger patties
            </p>
          </div>

        </div>
      </section>
    )
}
import React from 'react'
import { FaPython } from 'react-icons/fa' // Import Python icon from react-icons

export type LeetcodeProps = {
  problemName: string
  programmingLanguage: string
}

function LeetcodeCard({ problemName, programmingLanguage }: LeetcodeProps) {
  return (
    <article
      className="
        group
        w-full
        max-w-lg
        rounded-xl
        border border-gray-200
        bg-white
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        mb-6
        mx-auto
        sm:max-w-xl
        lg:max-w-2xl
      "
    >
      <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {problemName}
      </h2>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">Solved with</span>

        <div className="flex items-center space-x-2">
          {/* Use FaPython icon if the language is Python */}
          {programmingLanguage.toLowerCase() === 'python' && (
            <FaPython className="text-2xl text-indigo-700" />
          )}
          <span
            className="
              rounded-full
              bg-indigo-100
              px-4
              py-1.5
              text-xs
              font-medium
              text-indigo-700
              shadow-md
              flex items-center space-x-2
            "
          >
            <span>{programmingLanguage}</span>
          </span>
        </div>
      </div>
    </article>
  )
}

export default LeetcodeCard
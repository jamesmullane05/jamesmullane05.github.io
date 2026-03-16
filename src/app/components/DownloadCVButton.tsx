import React from 'react'

function DownloadCVButton() {
  return (
    <button className="mt-8 rounded bg-white px-6 py-3 text-black border-black border-1 hover:bg-gray-50 ">
        <a href="/cv.pdf" download="cv.pdf">Click Here to Download My CV</a>
    </button>
  )
}

export default DownloadCVButton
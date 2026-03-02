import React from 'react'

function DownloadCVButton() {
  return (
    <button className="mt-8 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        <a href="/cv.pdf" download="cv.pdf">Click Here to Download My CV</a>
    </button>
  )
}

export default DownloadCVButton
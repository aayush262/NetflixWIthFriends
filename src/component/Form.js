import React from "react";
import { Field, reduxForm } from 'redux-form'

const Form = () => {


    return <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <div className="relative px-6 py-10 overflow-hidden shadow-xl rounded-3xl bg-cool-indigo-600 sm:px-12 sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
      >
        <svg
          className="absolute inset-0 w-full h-full" style={{backgroundColor:"#e50914"}}
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1463 360"
        >
          <path
            className="text-cool-indigo-500 text-opacity-40"
            fill="currentColor"
            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
          />
          <path
            className="text-cool-indigo-700 text-opacity-40"
            fill="currentColor"
            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
          />
        </svg>
      </div>
      <div className="relative">
        <div className="mb-12 sm:text-center">
          <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-4.5xl font-display">
          Unlimited movies, TV shows, and more.
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-cool-indigo-100 text-white">
          Watch anywhere with your friends <br />
            Ready to watch? Enter your email to get started
            
          </p>
        </div>
        <form>
        <div className="relative w-full max-w-xl mx-auto bg-white rounded-full h-14 lg:max-w-none">
          <Field 
            name="email"
            component = 'input'
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            className="rounded-full w-full h-14 bg-transparent py-0 sm:pl-6 pl-5 pr-16 sm:pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-cool-indigo-200 focus:border-cool-indigo-200"
          />
        </div>
        </form>
      </div>
    </div>
  </div>
}

export default reduxForm({
    form:'myForm'
})(Form);
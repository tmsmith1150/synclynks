import React from 'react'
import HeroImg from '@/assets/images/cover-hero.png'
import Image from 'next/image';

const Hero = () => {
  const myStyle = {
    height: "650px",
    width: "100%",
    marginTop: "-100px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1a3027"
  }
  const mySectionStyle = {
    width: "100%",
    backgroundColor: "#1a3027"
  }
  const myButtonStyle = {
    backgroundColor: "#91433c"
  }


  return (
    // <!-- Hero -->

    <section className="bg-blue-800 py-20 mb-4" style={mySectionStyle}>
      <Image style={myStyle}
        src={HeroImg}
        alt="SyncLynks"
      />
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="font-medium text-slate-400"
          >
            Customize your peace of mind
          </h1>

        </div>
        <form
          className="mt--20 max-w-xl w-full flex flex-col md:flex-row items-center"
        >

          <div className="w-full md:w-2/5 md:pl-2">
            <label htmlFor="property-type" className="sr-only">Product Type</label>
            <select
              id="property-type"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="All">All</option>
              <option value="Apartment">Necklaces</option>
              <option value="Studio">Braclelts</option>
              <option value="Condo">Rings</option>
              <option value="House">Earrings</option>
              <option value="Cabin Or Cottage">Charms</option>
              <option value="Loft">Other</option>
            </select>
          </div>
          <button
            type="submit"
            style={myButtonStyle}
            className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg text-white hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import Navbar from './addressNav'
const babyNeutral = () => {
  return (
    <>
    {/* Navbar (Now reused) */}
    <Navbar />

    {/* Accessories Page Content */}
    <div className="w-2/3 mx-auto">
      <h1 className="my-6 text-2xl font-bold">BabyBoy</h1>
      <p className="text-lg text-gray-600">Explore our latest accessories collection!</p>
    </div>
  </>
  )
}

export default babyNeutral
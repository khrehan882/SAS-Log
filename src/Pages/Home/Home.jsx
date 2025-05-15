import React from 'react'
import Layout from '../../Layout/Layout'

import Hero from '../../component/Home/Hero'
import Aboutus from '../../component/Home/Aboutus'
import Market from '../../component/Market'
import OurServices from '../../component/OurServices'
import Othertopics from '../../component/Othertopics'
import Testimonials from '../../component/Testimonials'
import Lastheading from '../../component/Lastheading'

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Aboutus />
        <Market />
        <OurServices />
        <Othertopics />
        <Testimonials/>
        <Lastheading/>
      </Layout>
    </>
  )
}

export default Home
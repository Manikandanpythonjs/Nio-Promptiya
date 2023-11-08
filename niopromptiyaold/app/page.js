import Feed from '@/components/Feed/Feed'
import Image from 'next/image'

export default function Home() {
  return (


    <section className='w-full flex-center flex-col  '>

      <h1 className=' mt-14  text-5xl font-extrabold leading-[1.15]  sm:text-6xl text-center'>
        NIO PROMPTIYA
        <br className='max-md:hidden' />

        <span className='orange_gradient text-center'>
          {"  "} AI-POWERED PROMPTS
        </span>
      </h1>

      <p className=' mt-5 text-lg text-gray-600 sm:text-xl  text-center'>
        Nio Promptiya is an Open-Source AI promting tool for Nio Ai Image Generator
      </p>


      <div className="main-feed-section m-5 p-10  text-center">
        <Feed />
      </div>



    </section>



  )
}

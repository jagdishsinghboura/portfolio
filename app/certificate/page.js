import Image from 'next/image'

function page() {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
      <div className='relative top-15 left-15 flex flex-col  w-full   rounded-2xl p-2 '>
        <h1 className=' relative  text-2xl font-bold font-serif text-blue-500 mb-6 flex flex-row gap-8 '>Leetcode :-</h1>
        <div className=' flex justify-center items-center  '>
          <Image src={"/Leetcode.png"} width={900} height={900} alt='LeetcodeImage' className='md:min-w-220 md:h-102  w-64 h-32  object-center object-contain shadow hover:shadow-xl ' />
        </div>
      </div>
    </div>
  )
}

export default page
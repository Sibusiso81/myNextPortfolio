import React from 'react'

function ValueAdd() {
  return (
    <section className="w-screen h-fit    p-4  lg:p-20 font-mono  ">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold space-y-6 pb-14 lg:pb-20">
          {" "}
          How I Can Add Value to Your Team
        </h1>
        <div className="grid grid-cols-4 gap-6 lg:gap-2">
          {/*  */}

          <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2 border-l-green-300 dark:border-l-[#aeaeae] flex flex-col pl-4">
            {/* SVG / NUMBER */}
            <div className="space-y-4 ">
              <p className="text-green-400">01</p>
            </div>
            {/* Header */}
            <div className="text-lg font-semibold py-2 lg:py-6">
              <h1>Data-Driven HR Insights</h1>
            </div>
            {/* Description */}
            <div className="dark:text-muted-foreground">
              <p>
                Leveraging my tech skills&#44; I can analyze HR data to identify
                trends&#44; uncover valuable insights&#44; and provide
                data-driven recommendations for improving HR processes.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2 border-l-green-300 dark:border-l-[#aeaeae] flex flex-col pl-4">
            {/* SVG / NUMBER */}
            <div className="">
              <p className="text-green-400">02</p>
            </div>
            {/* Header */}
            <div className="text-lg font-semibold py-2 lg:py-6">
              <h1>Driving Innovation in HR</h1>
            </div>
            {/* Description */}
            <div className="dark:text-muted-foreground">
              <p>
                I&apos;m passionate about exploring and implementing innovative
                HR solutions&#44; such as AI-powered recruitment tools or
                employee engagement platforms&#44; to drive efficiency and
                improve outcomes.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2  border-l-green-300 dark:border-l-[#aeaeae] flex flex-col pl-4">
            {/* SVG / NUMBER */}
            <div className="">
              <p className="text-green-400">03</p>
            </div>
            {/* Header */}
            <div className="text-lg font-semibold py-2 lg:py-6">
              <h1>A Continuous Learner</h1>
            </div>
            {/* Description */}
            <div className="dark:text-muted-foreground">
              <p>
                As a self-taught developer&#44; I&apos;m a fast learner and
                highly adaptable. I&apos;m eager to embrace new technologies and
                challenges&#44; and I believe in continuous learning and
                professional growth.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2 border-l-green-300 dark:border-l-[#aeaeae] flex flex-col pl-4">
            {/* SVG / NUMBER */}
            <div className="">
              <p className="text-green-400">04</p>
            </div>
            {/* Header */}
            <div className="text-lg font-semibold py-2 lg:py-6">
              <h1>Human-Centered Technology</h1>
            </div>
            {/* Description */}
            <div className="dark:text-muted-foreground">
              <p>
                My HR background allows me to ensure a human-centered approach
                to all tech solutions&#44; prioritizing user experience and
                creating tools that are both effective and enjoyable to use.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ValueAdd
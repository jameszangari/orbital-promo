export default function Background() {
    return (
      <div className="absolute z-0 w-4/5 h-1/5 max-w-md max-h-52 min-h-105 sm:w-2/5">
        <div className='bg-purple-bg border-2 border-solid border-pink-border grid grid-columns-2 grid-rows-2 w-full h-full'>
              {/* top left corner */}
              <img src="corner.svg" className="row-span-1 col-span-1 rotate-180 self-start justify-self-start -mt-0.5 -ml-0.5"/>
              {/* top right corner */}
              <img src="corner.svg" className="row-span-1 col-start-2 -rotate-90 self-start justify-self-end -mt-0.5 -mr-0.5"/>
              {/* bottom left corner */}
              <img src="corner.svg" className="row-start-2 col-span-1 rotate-90 self-end justify-self-start -mb-0.5 -ml-0.5"/>
              {/* bottom right corner */}
              <img src="corner.svg" className="row-start-2 col-start-2 self-end justify-self-end -mb-0.5 -mr-0.5"/>
        </div>
      </div>
    )
  }
  
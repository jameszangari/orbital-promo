export default function Container(props) {
    return (
        <div className="absolute z-10 p-5 w-4/5 h-1/5 flex flex-col justify-center items-center max-w-md max-h-52 min-h-125 sm:w-2/5">
            {props.children}
        </div>
    )
  }

  
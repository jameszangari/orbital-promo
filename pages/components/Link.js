export default function Link(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="font-space text-xs text-pink-accent font-regular uppercase cursor-pointer decoration-solid underline underline-offset-1 tracking-widest md:text-sm hover:text-blue-accent transition duration-150 hover:ease-in ">{props.name}</a>
    )
  }
  
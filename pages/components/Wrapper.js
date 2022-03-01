export default function Wrapper(props) {
    return (
      <div className={'grid place-items-center sm:row-start-3' + ` ${props.className}`}>
          {props.children}
      </div>
    )
  }
  
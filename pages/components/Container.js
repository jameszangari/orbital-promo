import Background from "./Background.js";

export default function Container(props) {
  return (
    <div className="absolute z-10 p-8 w-full flex flex-col justify-center items-center max-w-md max-h-52 min-h-125 sm:w-2/5">
      {props.children}
      <Background />
    </div>
  );
}

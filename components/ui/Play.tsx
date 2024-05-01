import Icon from "./Icon.tsx";

// export interface Props {
//   /**
//    * Symbol id from element to render. Take a look at `/static/icons.svg`.
//    *
//    * Example: <Icon id="Bell" />
//    */
//   id: string;
// }


// function Play(
//   { id }: Props,
// ) {
function Play() {
  // console.log("id", id)
  return (
    <div>
      <div
          class="animate-pulse px-0 flex w-12 btn btn-ghost drawer-button bg-black rounded-full"
        >
          <Icon id="Play" size={24} strokeWidth={0.1} />
      </div>
    </div>
  );
}

export default Play;

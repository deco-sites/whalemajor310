import Icon from "../components/ui/Icon.tsx";

export default function PlayButton() {
  const handleClick = () => {
    const audio = document.getElementById("audioItem") as HTMLAudioElement;
    // const audioBtn = document.getElementById("audioBtn");
    // console.log("clicado", audioBtn, audio);

    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  };

  return (
    <>
      <div
        id="audioBtn"
        onClick={handleClick}
        class="animate-pulse px-0 flex w-12 btn btn-ghost drawer-button bg-black rounded-full"
      >
        <Icon id="Play" size={24} strokeWidth={0.1} />
        <audio id="audioItem" loop src="https://assets.codepen.io/907471/cosmic_dreams.mp3"></audio>
      </div>
    </>
  );
}
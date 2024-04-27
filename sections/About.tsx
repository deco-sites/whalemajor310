
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
  /**
   * @description The description of color.
   */
  color?: string;
    /**
   * @description Deco Image.
   */
  photo?: string;
}

export default function About({ name = "Capy", color = "green", photo }: Props) {
  return (
    <>
      {photo && (
          <Image
            src={photo}
            alt={`${name} image`}
            height={500}
            width={500}
            class="rounded"
          />
      )}
      <div class={`bg-teal-200 p-8 rounded-md shadow-md`}>
        <h2 class="text-2xl font-semibold mb-4">Fancy Component</h2>

        <div class="space-y-4">
          <button class={`btn btn-${color}`}>Click me</button>

          <input
            type="text"
            class="input input-bordered"
            placeholder="Type something"
          />

          <div class={`alert alert-${color}`}>
            {name}
          </div>
        </div>
      </div>
    </>
  );
}

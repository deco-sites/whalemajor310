import About from "./About.tsx";

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
   * @description Define if the text should be highlighted.
   */
  highlight?: boolean;
}

export default function Section({ name = "Capy", color = "green", highlight }: Props) {
  return (
    <div class={`bg-${color}-200 p-8 rounded-md shadow-md`}>
      <h2 class="text-2xl font-semibold mb-4">Fancy Component</h2>

      <div class="space-y-4">
        <button class={`${highlight ? "text-teal-950" : "text-teal-500"} btn btn-${color}`}>Click me</button>

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
  );
}

import type { SectionProps } from "deco/mod.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
  title: string;
  numberOfFacts?: number;
}

export async function loader(
  { numberOfFacts, title }: Props,
  _req: Request,
) {
  const { facts: dogFacts } = (await fetch(
    `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
  ).then((r) => r.json())) as { facts: string[] };
  return { dogFacts, title };
}

export default function DogFacts(
  { title, dogFacts }: SectionProps<typeof loader>,
) {
  return (
    <div class="p-4">
      <h1 class="font-bold">{title}</h1>
      <ul>
        {dogFacts.map((fact) => <li>{fact}</li>)}
      </ul>
    </div>
  );
}
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "",
  description =
    "Ser um astronauta é abraçar uma vida de exploração além dos limites da Terra. É ser um pioneiro do futuro, mergulhando no desconhecido em busca de novas descobertas e realizações. Cada missão representa um passo audacioso em direção às estrelas, impulsionado pela curiosidade humana e pela busca contínua pelo entendimento do universo. No coração da jornada espacial reside o cuidado meticuloso, onde cada detalhe é planejado e preparado com precisão cirúrgica. Cada decisão, cada movimento, é executado com a máxima atenção, reconhecendo a fragilidade da vida em um ambiente tão hostil. A responsabilidade de proteger a própria vida e a dos colegas é uma constante, exigindo uma dedicação inabalável ao bem-estar pessoal e ao sucesso da missão. Mas ser um astronauta também requer uma persistência inabalável. Diante dos desafios inesperados e das adversidades que surgem no espaço, é a determinação implacável que impulsiona os astronautas a superar obstáculos e alcançar novos patamares. Cada falha é uma oportunidade de aprendizado, cada sucesso uma recompensa pela coragem e pela dedicação incansável. Ser um astronauta é mais do que uma profissão, é uma vocação que exige coragem, visão de futuro e uma persistência inabalável. É embarcar em uma jornada de descoberta sem fim, representando o espírito humano de conquistar o desconhecido.",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <section class="bg-[url('https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/842db695-0254-44c0-80ab-e8470424007c')] bg-cover bg-center">
      <nav class="lg:container lg:mx-auto mx-4">
        <div class="flex flex-col items-center gap-8">
          <div
            class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
              image
                ? PLACEMENT[placement]
                : "flex-col items-center justify-center text-center"
            } lg:py-36 gap-12 md:gap-20 items-center`}
          >
            {image && (
              <Image
                width={640}
                class="w-full lg:w-1/2 object-fit"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={image}
                alt={image}
                decoding="async"
                loading="lazy"
              />
            )}
            <div
              class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
                image
                  ? "lg:w-1/2 lg:max-w-xl"
                  : "flex flex-col items-center justify-center lg:max-w-3xl"
              }`}
            >
              <div
                class="inline-block lg:text-[36px] text-4xl leading-none text-white font-medium"
                dangerouslySetInnerHTML={{
                  __html: title,
                }}
              >
              </div>
              <p class="text-white text-lg md:text-md leading-[150%]">
                {description}
              </p>
              <div class="flex items-center gap-3">
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary ${
                      item.outline && "btn-outline"
                    }`}
                  >
                    {item?.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

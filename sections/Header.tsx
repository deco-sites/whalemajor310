import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    srcMobile?: ImageWidget;
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };
}

export default function Header({
  logo = {
    srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/8f9107ae-9b39-4408-81f2-5316ff0a6f2a",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/7b1e02ef-f704-4109-a6e5-e9a5ab6e68fa",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Sobre", url: "#" },
      { label: "Missões", url: "#" },
      { label: "Galeria", url: "#" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
}: Nav) {
  console.log("navigation", navigation)

  return (
    <nav class="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      <div class="fixed top-0 left-0 z-50 w-full h-auto bg-gradient-to-b from-transparent to-black backdrop-blur-md">
        {/* main content */}
        <div class="drawer-content lg:container md:max-w-6xl px-4 flex gap-8 items-center justify-between py-4">
          <a href="/">
            <Picture preload>
              <Source
                media="(max-width: 768px)"
                src={logo.srcMobile}
                width={178}
                height={250}
              />
              <Source
                media="(min-width: 768px)"
                src={logo.src}
                width={246}
                height={361}
              />
                <img
                    loading="eager"
                    fetchPriority="high"
                    src={logo.src}
                    class="max-w-20 w-full h-full object-cover"
                />
            </Picture>

          </a>

          <div class="hidden items-center justify-between lg:flex w-full">
            <ul class="flex w-full justify-end">
              {navigation.links.map((link) => (
                <li>
                  <a
                    href={link.url}
                    aria-label={link.label}
                    class="text-white link no-underline hover:underline p-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul class="flex gap-3">
              {navigation.buttons?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href ?? "#"}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </ul>
          </div>

          <label
            htmlFor="mobile-drawer-nav"
            class="flex lg:hidden btn btn-ghost drawer-button bg-white rounded-full"
          >
            <Icon id="Bars3" size={24} strokeWidth={0.1} />
          </label>
        </div>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="max-w-[80%] flex flex-col gap-8 min-h-full w-80 bg-gradient-to-b from-transparent to-black backdrop-blur-md text-white">
          <a class="p-4" href="/">
            <Image
              src={logo.srcMobile || ""}
              width={100}
              height={28}
              alt={logo.alt}
            />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => (
              <li>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}

import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Img {
  src?: ImageWidget;
  srcMobile?: ImageWidget;
}

interface Props {
  /**
   * @description Deco Image.
   */
  photo?: Img; 
  /**
   * @description Description.
   */
  description?: string;
  success?: boolean;
}

export default function Card({ 
  photo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/58c84316-4405-4778-961d-9cee28e7895b",
    srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/58c84316-4405-4778-961d-9cee28e7895b",
  },
  description,
  success
}: Props) {

  return (
    <>
    <div class={`relative w-full block group p-4 rounded-lg ${success ? 'bg-blue-100' : 'bg-rose-400'}`}>        
        <div class="block bg-black/90 rounded-lg">
          <div class="w-full h-auto lg:mx-auto">
          <Picture>
            <Source
              media="(max-width: 768px)"
              src={photo.srcMobile}
              class="w-full h-full"
              width={270}
              height={377}
            />
            <Source
              media="(min-width: 768px)"
              src={photo.src}
              class="w-full h-full"
              width={800}
              height={1200}
            />
            <Image
              src=""
              class="w-full h-full object-cover"
              width={800}
              height={1200}
            />
          </Picture>
        </div>
      </div>
      <div class="md:w-full max-w-[95%] sm:max-w-[90%] mx-auto h-auto p-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 tra bg-white/50 rounded-lg">
        <p class="text-sm lg:text-base text-white my-0">
          {description}
        </p>
      </div>
      </div>
    </>
  );
}
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
}

export default function BannerFull({ 
  photo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/b2bc4835-838c-4fcb-acec-a5d766cc3dff",
    srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/f7855f36-18e3-49aa-a72d-9bfb1ce2d1bc",
  },
}: Props) {

  return (
    <div class="bg-black/95 w-full h-auto lg:mx-auto pt-36 min-[1026px]:pt-32">
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
  );
}

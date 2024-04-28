import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description Deco Image.
   */
  photo?: ImageWidget;
}

export default function BannerFull({ 
  photo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/b2bc4835-838c-4fcb-acec-a5d766cc3dff",
    srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/1d6d12e0-3590-40a3-8162-f2de00c24753",
  },
}: Props) {

  return (
    <div class="w-full h-auto lg:mx-auto">
      <Picture>
        <Source
          media="(max-width: 768px)"
          src="https://example.com/image-mobile.png"
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
          src="https://example.com/image.png"
          class="w-full h-full object-cover"
          width={800}
          height={1200}
        />
      </Picture>
    </div>
  );
}

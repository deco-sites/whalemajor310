import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description Deco Image.
   */
  photo?: ImageWidget;
}

const IMG_PLACEHODLER ={
  src:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  altText: "Image Placeholder",
};

export default function BannerFull({ 
  photo = IMG_PLACEHODLER
}: Props) {
  return (
    <>
      {photo?.map((item) => {
        return (
          <Image
            src={`${item.src}`}
            alt={`${item.altText}`}
            height={500}
            width={500}
            class="rounded"
          />
        );
      })}
    </>
  );
}

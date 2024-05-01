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

export default function Gallery({ 
  photo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/58c84316-4405-4778-961d-9cee28e7895b",
    srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/58c84316-4405-4778-961d-9cee28e7895b",
  },
}: Props) {

  return (
    <>
      {/* card com a imagem e o texto sendo rendeerizado no hover */}
      <div class="relative w-full block">
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
        <div class="w-full h-auto opacity-0 absolute bg-white/50 rounded-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident obcaecati dignissimos atque voluptas quaerat magni eum voluptatum. Atque ex ratione quis! Iusto, hic? Corrupti iste cumque numquam, aliquam eum incidunt.
        </div>
      </div>
    </>
  );
}

import Card from "../components/ui/Card.tsx";

export interface Props{
  idBlock?: string;
}

export default function Gallery({
  idBlock = "Galeria"
}: Props) {
  return (
    <>
      <div class="bg-black/95" id={idBlock}>
        <div class="w-full py-16 lg:py-24 bg-[url('https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/6a64668f-34b0-4030-87d2-d0e013e2cd2b')] bg-no-repeat bg-bottom lg:bg-right-bottom bg-cover bg-blend-multiply transition-all">
          <div class="mx-auto w-[90%] lg:w-full flex flex-wrap lg:gap-2 gap-6 justify-center">
            {/* card com a imagem e o texto sendo renderizado no hover */}

            {/* Sucesso */}
            <div class="w-full lg:w-3/12">
              <Card description="Missão Apollo 11 (NASA): A primeira missão a colocar humanos na Lua, em julho de 1969." photo={{
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/3b1176cd-abc9-41d6-bfc6-96810236e4f5",
                srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/3b1176cd-abc9-41d6-bfc6-96810236e4f5"
              }} success/>
            </div>
            <div class="w-full lg:w-3/12">
              <Card description="Mars Climate Orbiter (NASA): Lançado em 1998, falhou em entrar na órbita de Marte devido a uma falha na comunicação entre as equipes de projeto, resultando em uma perda de US$ 125 milhões."  photo={{
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/cf131e35-a4f4-4bf8-8fb3-b87f97a01b5a",
                srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/cf131e35-a4f4-4bf8-8fb3-b87f97a01b5a"
              }} />
            </div>
            <div class="w-full lg:w-3/12">
              <Card description="Mars Pathfinder (NASA): A missão lançada em 1996, que incluiu o rover Sojourner, foi a primeira a pousar com sucesso um veículo motorizado em Marte." 
              photo={{
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/6caf2930-fd71-4c72-b4a1-80ed718fb7c5",
                srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/6caf2930-fd71-4c72-b4a1-80ed718fb7c5"
              }} 
              success/>
            </div>
            {/* Falha */}
            
            <div class="w-full lg:w-3/12">
              <Card description="Challenger (NASA): O ônibus espacial Challenger explodiu 73 segundos após o lançamento em janeiro de 1986, devido a uma falha no O-ring do foguete sólido."
              photo={{
                src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/aeb3fa0e-aae1-48ff-a481-09e6d8a993b3",
                srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/aeb3fa0e-aae1-48ff-a481-09e6d8a993b3"
              }} 
              />
            </div>
            <div class="w-full lg:w-3/12">
              <Card description="Missão Voyager (NASA): As sondas Voyager 1 e Voyager 2, lançadas em 1977, que exploraram os planetas exteriores e continuam a transmitir dados do espaço interestelar." 
                photo={{
                  src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/c508d6a6-627f-4410-990f-0c4785dbfe48",
                  srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/c508d6a6-627f-4410-990f-0c4785dbfe48"
                }} 
                success
              />
            </div>
            <div class="w-full lg:w-3/12">
              <Card description="Beagle 2 (Agência Espacial Europeia): A sonda britânica Mars Beagle 2, lançada em 2003, perdeu contato durante sua descida para Marte e não foi encontrada até 2015."
                photo={{
                  src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/6fdb5fb0-d64a-413b-879b-e1d9dbd3bf6f",
                  srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/6fdb5fb0-d64a-413b-879b-e1d9dbd3bf6f"
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

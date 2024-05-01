import Card from "../components/ui/Card.tsx";

// interface Props {
//   /**
//    * @description Deco Image.
//    */
//   photo?: Img; 
//   description?: string;
// }

// export default function Gallery({ 
  // photo = {
  //   src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/58c84316-4405-4778-961d-9cee28e7895b",
  //   srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8239/58c84316-4405-4778-961d-9cee28e7895b",
  // },
  // description
// }: Props) {
export default function Gallery() {
  return (
    <>
      <div class="bg-black/95 py-8 lg:py-16">
        <div class="mx-auto w-[90%] lg:w-full flex flex-wrap lg:gap-2 gap-6 justify-center">
          {/* card com a imagem e o texto sendo renderizado no hover */}

          {/* Sucesso */}
          <div class="w-full lg:w-3/12">
            <Card description="Missão Apollo 11 (NASA): A primeira missão a colocar humanos na Lua, em julho de 1969." success/>
          </div>
          <div class="w-full lg:w-3/12">
            <Card description="Mars Climate Orbiter (NASA): Lançado em 1998, falhou em entrar na órbita de Marte devido a uma falha na comunicação entre as equipes de projeto, resultando em uma perda de US$ 125 milhões."/>
          </div>
          <div class="w-full lg:w-3/12">
            <Card description="Mars Pathfinder (NASA): A missão lançada em 1996, que incluiu o rover Sojourner, foi a primeira a pousar com sucesso um veículo motorizado em Marte." success/>
          </div>
          {/* Falha */}
          
          <div class="w-full lg:w-3/12">
            <Card description="Challenger (NASA): O ônibus espacial Challenger explodiu 73 segundos após o lançamento em janeiro de 1986, devido a uma falha no O-ring do foguete sólido."/>
          </div>
          <div class="w-full lg:w-3/12">
            <Card description="Missão Voyager (NASA): As sondas Voyager 1 e Voyager 2, lançadas em 1977, que exploraram os planetas exteriores e continuam a transmitir dados do espaço interestelar." success/>
          </div>
          <div class="w-full lg:w-3/12">
            <Card description="Beagle 2 (Agência Espacial Europeia): A sonda britânica Mars Beagle 2, lançada em 2003, perdeu contato durante sua descida para Marte e não foi encontrada até 2015."/>
          </div>
        </div>
      </div>

    </>
  );
}

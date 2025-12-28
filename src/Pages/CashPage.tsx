import { Header } from '@/Components/Header';
import { AspectRatio } from '@/Components/ui/aspect-ratio';

export const CashPage = () => {

  return (
    <>
      <Header />
      <div className="bg-black w-screen h-lvh">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg h-1/2 w-1/2">

        </AspectRatio>
      </div>
    </>
  )
}

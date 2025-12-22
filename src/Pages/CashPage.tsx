import { Header } from '@/Components/Header';
import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { useEffect, useState } from 'react';

export const CashPage = () => {
  const [data, setData] = useState([]);
  console.log(data)


  useEffect(() => {
    fetch("http://localhost:3000/balance")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

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

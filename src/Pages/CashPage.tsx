import { Header } from '@/Components/Header';
import { AspectRatio } from '@/Components/ui/aspect-ratio';
import { useEffect, useState } from 'react';
import type { BalanceResponse } from '@/types/types';

export const CashPage = () => {
  const [data, setData] = useState<BalanceResponse | null>(null);
  console.log(data)


  useEffect(() => {
    fetch("http://localhost:3000/api/balances")
      .then(res => res.json())
      .then(data => setData(data.roomsBalance))
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

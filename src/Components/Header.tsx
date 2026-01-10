import { Navigation } from './Navigation';
import { BalanceSection } from './BalanceSection';

export const Header = () => {

  return (
    <div className="bg-neutral-800 z-100 flex justify-between align-center sticky top-0 left-0 gap-40 border-b-1 w-full p-4 h-18">
      <Navigation />
      <BalanceSection />
    </div>
  );
};

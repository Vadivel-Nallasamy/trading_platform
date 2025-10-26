import { lazy, Suspense } from "react";

export default function Header() {
  const PinHead = lazy(() => import("./PinHead"));
  return (
    <header className='h-[58px] flex items-center p-4'>
      <Suspense>
        <PinHead />
      </Suspense>
    </header>
  );
}

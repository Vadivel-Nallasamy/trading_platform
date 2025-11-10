import { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
const tabs = [
  { name: "Home", route: "home" },
  { name: "Orders", route: "orders" },
  // { name: "Home", route: "home" },
];
export default function Header() {
  const PinHead = lazy(() => import("./PinHead"));
  return (
    <header className='h-[58px] flex items-center p-4'>
      <Suspense>
        <PinHead />
        <div className='w-full justify-end flex items-center gap-4'>
          {tabs.map((el) => {
            const active =
              "border border-primaryButton text-primaryButton bg-secondaryButton font-medium";
            const pending = "text-secondary bg-secondaryBackground";
            return (
              <NavLink
                className={({ isActive, isPending }) => {
                  let tempClass = isPending ? pending : isActive ? active : "";
                  tempClass =
                    tempClass +
                    " h-[30px] rounded-[20px] px-3 py-1.5 text-xs text-nowrap";
                  return tempClass;
                }}
                key={el.name}
                to={`/${el.route}`}
              >
                {el.name}
              </NavLink>
            );
          })}
        </div>
      </Suspense>
    </header>
  );
}

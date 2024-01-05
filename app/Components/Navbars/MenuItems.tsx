"use client";
import { MenuItem as MenuItemType } from "@/lib/interfaces";
import Image from "next/image";
import ImageURL from "../../../public/novel-home.png";
import Link from "next/link";
import { FC, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItems: FC<MenuItemProps> = ({ item }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [chevronIcon, setChevronIcon] = useState(false);

  const handleHover = () => {
    setSubMenuOpen(true);
    setChevronIcon(true);
  };

  const handleLeave = () => {
    setSubMenuOpen(false);
    setChevronIcon(false);
  };

  return (
    <>
      <li
        className="relative group"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <Link
          href="#"
          className="font-semibold uppercase text-black group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
        >
          <span>{item.label}</span>
          {item.children && (
            <>
              {chevronIcon ? (
                <ChevronUp
                  size={16}
                  className="relative ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                />
              ) : (
                <ChevronDown
                  size={16}
                  className="relative  ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                />
              )}
            </>
          )}
        </Link>
        {(item.children || item.megaMenu) && (
          <div
            className={`submenu ${
              subMenuOpen ? "open" : ""
            } absolute top-full left-0`}
          >
            {item.megaMenu ? (
              <div className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-white">
                {item.children && (
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <div className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-1 no-underline outline-none focus:shadow-md">
                        <Image
                          src={item.featuredImg}
                          width={600}
                          height={900}
                          alt="test"
                          className="bg-cover w-full  h-full object-cover"
                          priority
                        />
                        {item.cta && (
                          <div className="absolute bottom-0 bg-gradient-to-b from-muted/50 to-muted w-full text-center py-3">
                            <span className="text-sm items-center font-semibold text-black z-10">
                              {item.cta}
                            </span>
                          </div>
                        )}
                      </div>
                    </li>
                    {item.children.map((child, index) => (
                      <li key={index} className="">
                        <Link
                          href={child.url}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-semibold leading-none">
                            {child.label}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {child.desc}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <ul className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-white">
                {item.children &&
                  item.children.map((child, index) => (
                    <MenuItems key={index} item={child} />
                  ))}
              </ul>
            )}
          </div>
        )}
      </li>
    </>
  );
};

export default MenuItems;

// {menuLinks.map((link) => (
//     <li key={link.id}>
//       <Link
//         href={link.href}
//         className="font-semibold uppercase text-black"
//       >
//         {link.name}
//       </Link>
//     </li>
//   ))}

"use client";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <div className="flex p-4 items-center justify-between bg-[#2D2D30] shadow-sm">
      <Image src="/assets/logo.svg" alt="logo" width={160} height={100} />
      <ul className="hidden md:flex gap-6">
        {navLinks.map(({ id, title, url }) => (
          <Link href={url} key={id}>
            <li
              className={cn(
                "text-sm font-semibold text-white hover:text-primary",
                pathname === url && "text-primary font-bold"
              )}
            >
              {title}
            </li>
          </Link>
        ))}
      </ul>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;

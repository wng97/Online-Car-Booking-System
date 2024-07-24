"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const getSessionStorage = () => {
    const sessionIsUserLoggedIn = sessionStorage.getItem("token");
    console.log("sessionIsUserLoggedIn: ", sessionIsUserLoggedIn);
    setIsUserLoggedIn(!!sessionIsUserLoggedIn);
  };

  useEffect(() => {
    // Access sessionStorage here
    getSessionStorage();
  }, []);
  // const noNavBarButtonPages = ["/signup", "/signin"]; // Pages without layout
  const needNavBarButton = pathname === "/";
  // noNavBarButtonPages.includes(pathname);

  console.log("isUserLoggedIn: ", isUserLoggedIn);
  const handleSignUp = () => {
    return router.push("/signup");
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[14440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Fresh Cars Logo"
            width={170}
            height={20}
            className="object-contain"
          />
        </Link>

        {needNavBarButton && !isUserLoggedIn && (
          <div className="flex gap-2">
            <CustomButton
              title="Sign In"
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
              handleClick={() => router.push("/signin")}
            />
            <CustomButton
              title="Register"
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
              handleClick={handleSignUp}
            />
          </div>
        )}
        {isUserLoggedIn && needNavBarButton && (
          <div className="flex">
            <CustomButton
              title="Manage Bookings"
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
              handleClick={() => router.push("/booking")}
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

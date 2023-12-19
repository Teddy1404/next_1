"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathName = usePathname();
  return (
    <div>
      {pathName == "/login/userlogin" ? (
        <li>
          <Link href="/userlogin">User Login</Link>
        </li>
      ) : (
        <li>
          <Link href="/loginadmin">Admin Login</Link>
        </li>
      )}
      <ul className="flex space-x-[400px] justify-center ">
        <li>
          <Link href="/login">login</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;

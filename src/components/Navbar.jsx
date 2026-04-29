"use client";

import {
  Navbar as HNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar
} from "@heroui/react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@better-auth/next/client";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    authClient.getSession().then(res => {
      setUser(res?.data?.user || null);
    });
  }, []);

  const logout = async () => {
    await authClient.signOut();
    location.reload();
  };

  return (
    <HNavbar>
      <NavbarBrand>SkillSphere</NavbarBrand>

      <NavbarContent>
        <NavbarItem><Link href="/">Home</Link></NavbarItem>
        <NavbarItem><Link href="/courses">Courses</Link></NavbarItem>
        <NavbarItem><Link href="/my-profile">My Profile</Link></NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {user ? (
          <>
            <Avatar src={user.image} />
            <Button onClick={logout} color="danger">Logout</Button>
          </>
        ) : (
          <>
            <Link href="/login"><Button>Login</Button></Link>
            <Link href="/register"><Button>Register</Button></Link>
          </>
        )}
      </NavbarContent>
    </HNavbar>
  );
}
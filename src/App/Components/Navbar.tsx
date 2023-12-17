import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useTheme } from "../Core/ThemeProvider";

const NavbarSection = () => {
   const { themeToggle } = useTheme();
   return (
      <Navbar className="">
         <NavbarBrand>
            <p className="font-logo text-3xl text-inherit">Traveloid</p>
         </NavbarBrand>
         <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
               <Link color="foreground" href="/">
                  Home
               </Link>
            </NavbarItem>
            <NavbarItem isActive>
               <Link href="#" aria-current="page">
                  Customers
               </Link>
            </NavbarItem>
            <NavbarItem>
               <Link color="foreground" href="#">
                  Integrations
               </Link>
            </NavbarItem>
         </NavbarContent>
         <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
               <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
               <Button as={Link} color="primary" href="#" variant="flat" onClick={themeToggle}>
                  Sign Up
               </Button>
            </NavbarItem>
         </NavbarContent>
      </Navbar>
   );
};

export default NavbarSection;

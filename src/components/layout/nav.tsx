import { useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@heroui/react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [{ value: 'TIMES_TABLE', name: '구구단', link: '/' }];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.value}-${index}`}>
            <Link color="foreground" href={item.link} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;

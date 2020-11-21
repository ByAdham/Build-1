import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default function SiteNav () {


  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup">Signup</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/feed">Show me the posts</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}


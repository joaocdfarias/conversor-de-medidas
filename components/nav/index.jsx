import React from "react";
import { Nav } from "./style";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <Link href="/">Conversor</Link>
          </li>
          <li>
            <Link href="/geometria">Geometria</Link>
          </li>
        </ul>
      </Nav>
    </div>
  );
}

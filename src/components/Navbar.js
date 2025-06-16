'use client';
import Link from 'next/link';

export default function Navbar() {
  return (    <nav>
      <Link href="/home">Inicio</Link>
      <Link href="/about">Acerca de</Link>
      <Link href="/contact">Contacto</Link>
      <Link href="/blog/101">Blog</Link>
    </nav>
  );
}

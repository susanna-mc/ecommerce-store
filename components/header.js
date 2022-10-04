import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  background-color: yellowgreen;
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
  > a + a {
    margin: 20px;
  }
`;

export default function Header() {
  return (
    <header>
      <nav css={navStyles}>
        <Link href="/">Home Button</Link>
        <Link href="/products" data-test-id="products-link">
          Products
        </Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}

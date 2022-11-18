import { css } from '@emotion/react';
import Link from 'next/link';

const navStyles = css`
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 6px;
  background-color: #bae8e8;

  display: flexbox;
  width: 100%;
  a {
    color: #272343;
    font-weight: bold;
    margin-left: 10px;
  }
  > a + a {
    margin: 20px;
    justify-content: space-between;
  }
  a:hover {
    text-shadow: 3px 3px 3px #c2c2c2;
  }
  a:last-child {
    margin-left: 1100px;
  }
`;

const cartStyles = css`
  a {
    color: #272343;
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

        <Link css={cartStyles} href="/cart">
          Cart
        </Link>
      </nav>
    </header>
  );
}

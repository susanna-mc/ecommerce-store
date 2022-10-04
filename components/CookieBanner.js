import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const cookieStyles = (isOpen) => css`
  padding: 5px;
  transition: all 0.5s ease-in-out;
  height: 20px;

  ${!isOpen &&
  css`
    height: 0px;
    padding: 0px;
    overflow: hidden;
  `};
`;

export default function CookieBanner() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  // Front-end
  useEffect(() => {
    const initialValue = getLocalStorage('isBannerOpen');
    if (initialValue !== null) {
      setIsBannerOpen(initialValue);
    }
  }, []);

  return (
    <div css={cookieStyles(isBannerOpen)}>
      <span> Please accept our cookie policy</span>
      <button
        onClick={() => {
          setIsBannerOpen(false);
          setLocalStorage('isBannerOpen', false);
        }}
      >
        {' '}
        yes{' '}
      </button>
    </div>
  );
}

import { CSSObject } from "@emotion/react";

type MediaQueryFunction = (styles: CSSObject) => CSSObject;

export const DESKTOP_BREAKPOINT = 1024;
export const TABLET_BREAKPOINT = 768;
export const PHONE_TABLET_BREAKPOINT = 500;

export const desktop: MediaQueryFunction = (styles) => ({
  [`@media screen and (min-width: ${DESKTOP_BREAKPOINT}px)`]: styles,
});
export const DESKTOP_MEDIA_QUERY = `(min-width: ${DESKTOP_BREAKPOINT}px)`;

export const tablet: MediaQueryFunction = (styles) => ({
  [`@media screen and (min-width: ${TABLET_BREAKPOINT}px)`]: styles,
});
export const TABLET_MEDIA_QUERY = `(min-width: ${TABLET_BREAKPOINT}px)`;

export const phone_tablet: MediaQueryFunction = (styles) => ({
  [`@media screen and (min-width: ${PHONE_TABLET_BREAKPOINT}px)`]: styles,
});
export const PHONE_TABLET_MEDIA_QUERY = `(min-width: ${PHONE_TABLET_BREAKPOINT}px)`;

export const MOBILE_MEDIA_QUERY = `(max-width: ${TABLET_BREAKPOINT - 1}px)`;

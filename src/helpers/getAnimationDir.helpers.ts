export const animateDir = (
  locale: string,
  animateLtr: number,
  animateRtl: number
) => {
  if (locale === "ar") {
    return animateRtl;
  } else {
    return animateLtr;
  }
};

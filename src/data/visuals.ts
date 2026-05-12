const unsplash = (photoId: string, width = 1200) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

export const landingImages = {
  about: unsplash("photo-1751168488844-e79f27687928", 1200),
  differentials: unsplash("photo-1750534232339-017655f56081", 1000),
  structure: unsplash("photo-1693031630146-568e2f72db0e", 1200),
  finalCta: unsplash("photo-1674316206411-52408f9a5b5d", 900),
  services: [
    unsplash("photo-1748746269731-899a6cde0c0b", 900),
    unsplash("photo-1674316206411-52408f9a5b5d", 900),
    unsplash("photo-1693031630146-568e2f72db0e", 900),
    unsplash("photo-1751168488844-e79f27687928", 900),
    unsplash("photo-1771848194199-873beaa7c1dc", 900),
  ],
} as const;

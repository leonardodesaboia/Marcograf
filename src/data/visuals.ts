const unsplash = (photoId: string, width = 1200) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;

export const landingImages = {
  hero: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.png?cs=srgb&dl=pexels-joaojesusdesign-19316517.jpg&fm=jpg",
  about: unsplash("photo-1751168488844-e79f27687928", 1200),
  differentials: unsplash("photo-1750534232339-017655f56081", 1000),
  structure: unsplash("photo-1693031630146-568e2f72db0e", 1200),
  finalCta: unsplash("photo-1674316206411-52408f9a5b5d", 900),
  portfolio: [
    unsplash("photo-1586075010923-2dd4570fb338", 1400),
    unsplash("photo-1516321318423-f06f85e504b3", 1200),
    unsplash("photo-1520607162513-77705c0f0d4a", 1200),
    unsplash("photo-1587614382346-4ec70e388b28", 1200),
  ],
  services: [
    unsplash("photo-1748746269731-899a6cde0c0b", 900),
    "https://images.pexels.com/photos/14896593/pexels-photo-14896593.jpeg?cs=srgb&dl=pexels-maria-amparo-escudero-255076243-14896593.jpg&fm=jpg",
    "https://images.pexels.com/photos/14557897/pexels-photo-14557897.jpeg?cs=srgb&dl=pexels-monstera-14557897.jpg&fm=jpg",
    "https://images.pexels.com/photos/7956854/pexels-photo-7956854.jpeg?cs=srgb&dl=pexels-eva-bronzini-7956854.jpg&fm=jpg",
    unsplash("photo-1771848194199-873beaa7c1dc", 900),
  ],
} as const;

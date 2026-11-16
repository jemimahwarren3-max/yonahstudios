/** Optimized Pexels CDN url for a photo id. */
export const pexels = (id: number, w = 1800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/** Named site imagery (hero + parallax banners). */
export const siteImages = {
  hero: pexels(35378157, 1920), // warm creative workspace
  bannerStudio: pexels(3801167, 1920), // modern studio / glass
  bannerWarm: pexels(13869948, 1920), // warm luxe interior
  process: pexels(31804342, 1920), // warm minimal interior
  about: pexels(38429395, 1920), // artisan / craft counter
  intro: pexels(3801167, 1600), // bright studio / glass
  pricing: pexels(6899550, 1920), // calm serene interior
  contact: pexels(13869948, 1600), // warm inviting interior
};

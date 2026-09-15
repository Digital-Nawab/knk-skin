/** Central image map — import through this rather than reaching into /public/assets directly. */
export const IMG = {
  hero: "/assets/knk-hero.jpg",
  hero2: "/assets/knk-hero-2.jpg",
  heroVideoPoster: "/assets/knk-hero-video-poster.jpg",
  heroVideo: "/assets/knk-hero-video.mp4",
  vision: "/assets/knk-vision.jpg",
  visionDetail: "/assets/knk-detail.jpg",
  consultation: "/assets/knk-clinic.jpg",
  treatmentsBanner: "/assets/knk-treatment.jpg",
  wellnessBanner: "/assets/knk-reset.jpg",
  /** "Our Treatments" home-page tiles, in display order — each a distinct, discipline-matched photo. */
  ourTreatments: {
    skin: "/assets/knk-treat-skin.jpg",
    wellness: "/assets/knk-treat-wellness.jpg",
    ageingContouring: "/assets/knk-treat-ageing.jpg",
    hair: "/assets/knk-treat-hair.jpg",
    acneScars: "/assets/knk-treat-acne.jpg",
    laser: "/assets/knk-treat-laser.jpg",
    body: "/assets/knk-treat-body.jpg",
    bridal: "/assets/knk-treat-bridal.jpg",
  },
  /**
   * "Client Transformations" cards. No real before/after photo pairs exist yet, so each case
   * uses a distinct sample before/after photo (not the client's actual results) — the section
   * carries a "sample imagery" disclaimer. See Transformations.tsx.
   */
  transformations: {
    chemicalPeel: { before: "/assets/knk-tx-peel-before.jpg", after: "/assets/knk-tx-peel-after.jpg" },
    redLightTherapy: { before: "/assets/knk-tx-redlight-before.jpg", after: "/assets/knk-tx-redlight-after.jpg" },
    pigmentation: { before: "/assets/knk-tx-pigment-before.jpg", after: "/assets/knk-tx-pigment-after.jpg" },
    // Single sample photo only — same image used for before & after until client shares real before/after
    hairPRP: { before: "/assets/images/Hair-PRP-Microneedling.webp", after: "/assets/images/Hair-PRP-Microneedling.webp" },
    laserHairReduction: { before: "/assets/images/Laser-Hair-Reduction.webp", after: "/assets/images/Laser-Hair-Reduction.webp" },
    hifuFace: { before: "/assets/images/HIFU-Face.webp", after: "/assets/images/HIFU-Face.webp" },
  },
  aboutIntro: {
    // TODO: replace with client's actual clinic interior photo (screenshot shows their room/lounge shot)
    image: "/assets/knk-treat-skin.jpg",
  },
};

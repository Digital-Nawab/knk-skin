/**
 * One representative photo per catalogue category/group, shown on every treatment card in
 * that category. Sourced from Unsplash's free (non-Plus) library via the public search
 * endpoint, filtered to images.unsplash.com only (never plus.unsplash.com, which serves
 * watermarked previews that require a paid licence) — see the fetch script referenced in
 * docs/06-implementation-plan.md. Free to use commercially under the Unsplash License.
 */
export const CATEGORY_IMAGE: Record<string, string> = {
  "skin-rejuvenation": "/assets/knk-cat-skin-rejuvenation.jpg",
  peels: "/assets/knk-cat-peels.jpg",
  "acne-scar-management": "/assets/knk-cat-acne-scar-management.jpg",
  pigmentation: "/assets/knk-cat-pigmentation.jpg",
  "advanced-skkin-treatments": "/assets/knk-cat-advanced-skkin-treatments.jpg",
  "anti-ageing": "/assets/knk-cat-anti-ageing.jpg",
  "hydra-bar": "/assets/knk-cat-hydra-bar.jpg",
  "minor-procedures": "/assets/knk-cat-minor-procedures.jpg",
  "stretch-marks": "/assets/knk-cat-stretch-marks.jpg",
  "weight-management": "/assets/knk-cat-weight-management.jpg",
  "body-contouring": "/assets/knk-cat-body-contouring.jpg",
  "iv-wellness-infusions": "/assets/knk-cat-iv-wellness-infusions.jpg",
  hair: "/assets/knk-cat-hair.jpg",
  "laser-hair-reduction": "/assets/knk-cat-laser-hair-reduction.jpg",
  laser: "/assets/knk-cat-laser.jpg",
  "lip-hyperpigmentation": "/assets/knk-cat-lip-hyperpigmentation.jpg",
  "under-eye-pigmentation": "/assets/knk-cat-under-eye-pigmentation.jpg",
  "red-light-therapy": "/assets/knk-cat-red-light-therapy.jpg",
  "pre-bridal": "/assets/knk-cat-pre-bridal.jpg",
  "targeted-injections": "/assets/knk-cat-targeted-injections.jpg",
  "recovery-regeneration": "/assets/knk-cat-recovery-regeneration.jpg",
  "body-wellness": "/assets/knk-cat-body-wellness.jpg",
  "wellness-spa": "/assets/knk-cat-wellness-spa.jpg",
  // Wellness page slug differs from the Treatments page slug for the same real-world category.
  "iv-wellness": "/assets/knk-cat-iv-wellness-infusions.jpg",
};

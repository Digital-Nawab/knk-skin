import { Reveal, RevealImage } from "./Reveal";
import { IMG } from "./images";

const Vision = () => (
  <section id="our-vision" className="relative bg-white py-24 md:py-40">
    <div className="mx-auto max-w-[1600px] px-6 md:px-10">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="display text-[13vw] uppercase leading-[0.88] sm:text-[9vw] lg:text-[6vw]">
              Our vision
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <p className="text-sm leading-loose text-muted-foreground">
                KNK SKKIN is the advanced aesthetics and well-being vertical of{" "}
                <span className="text-foreground">KNK Awadh Salon &amp; Academy</span>, founded by
                international celebrity artists{" "}
                <span className="text-foreground">Poonam Ranjan Chowdhary</span> and{" "}
                <span className="text-foreground">Ishitta Chowdhary</span>.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-sm leading-loose text-muted-foreground">
                Built on 15+ years of beauty expertise, SKKIN brings together advanced aesthetics,
                skin science and well-being, with licensed skin doctors and trained professionals
                guiding every experience.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="mt-12 max-w-xl font-display text-2xl leading-snug md:text-3xl">
              Our vision is simple: more informed care, personalised treatments and a long-term
              approach to skin and well-being.
            </p>
          </Reveal>

        </div>

        <div className="relative lg:col-span-5">
          <RevealImage
            src={IMG.vision}
            alt="Editorial portrait with calm, healthy skin"
            className="aspect-[4/5] w-full"
          />
          <RevealImage
            src={IMG.visionDetail}
            alt="Detail of skincare formulation"
            className="absolute -bottom-10 -left-6 hidden aspect-square w-40 border-4 border-background lg:block"
            delay={0.25}
            parallax
          />
        </div>
      </div>
    </div>
  </section>
);

export default Vision;

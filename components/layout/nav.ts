/** Shared navigation data for the header, mobile menu, and footer. */

export type NavLeaf = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavChild = NavLeaf & {
  /** Optional third-level links (renders as a grouped mega-menu column). */
  children?: NavLeaf[];
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
};

/**
 * Primary navigation — mirrors the live site menu exactly:
 * https://revivalhealthandwellnessgroup.com/
 */
export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Weight Loss",
    href: "/weight-loss/",
    children: [
      { label: "GLP-1", href: "/glp-1/" },
      { label: "Phentermine", href: "/phentermine/" },
      { label: "Vitamin Injections", href: "/vitamin-injections/" },
    ],
  },
  {
    label: "Hormone Therapy",
    href: "/hormone-therapy/",
    children: [
      { label: "Women’s Hormone Therapy", href: "/womens-hormone-therapy/" },
      { label: "Men’s Hormone Therapy", href: "/mens-hormone-therapy/" },
      {
        label: "Growth Hormone Optimization",
        href: "/growth-hormone-optimization/",
      },
    ],
  },
  {
    label: "Sexual Wellness",
    href: "/sexual-wellness/",
    children: [
      {
        label: "Men",
        href: "/men/",
        children: [
          { label: "P shot TM", href: "/p-shot-tm/" },
          { label: "Gainswave TM", href: "/gainswave-tm/" },
          { label: "P-Long", href: "/p-long/" },
          { label: "Viagra", href: "/viagra/" },
          { label: "Trimix", href: "/trimix/" },
          { label: "Priapus Toxin", href: "/priapus-toxin/" },
          { label: "Emsella", href: "/emsella/" },
        ],
      },
      {
        label: "Women",
        href: "/women/",
        children: [
          { label: "O shot TM", href: "/o-shot-tm/" },
          { label: "GainswaveTM for her", href: "/gainswavetm-for-her/" },
          { label: "Emsella", href: "/emsella-2/" },
        ],
      },
    ],
  },
  {
    label: "Aesthetics",
    href: "/aesthetics/",
    children: [
      { label: "Emsculpt NEO", href: "/emsculpt-neo/" },
      { label: "Botox", href: "/botox/" },
      { label: "Derma Filler", href: "/derma-filler/" },
      { label: "Dysport", href: "/dysport/" },
      { label: "Xeomin", href: "/xeomin/" },
      { label: "Kybella", href: "/kybella/" },
      { label: "Sculptra", href: "/sculptra/" },
      {
        label: "Skin",
        href: "/skin/",
        children: [
          { label: "Microneedling", href: "/microneedling/" },
          { label: "Under eye treatment", href: "/under-eye-treatment/" },
          {
            label: "Everesse RF Skin Tightening and Rejuvenation",
            href: "/everesse-rf-skin-tightening-and-rejuvenation/",
          },
          { label: "PDO Thread lifts", href: "/pdo-thread-lifts/" },
          { label: "Scar Camouflage", href: "/scar-camouflage/" },
          { label: "CO2 Laser Treatments", href: "/co2-laser-treatments/" },
          { label: "CoolPeel® Laser", href: "/coolpeel-laser/" },
          { label: "Tetra Pro CO2 Laser", href: "/tetra-pro-co2-laser/" },
        ],
      },
      {
        label: "Hair",
        href: "/hair/",
        children: [
          { label: "PRP Hair restoration", href: "/prp-hair-restoration/" },
          { label: "Finasteride", href: "/finasteride/" },
          { label: "Cherry", href: "/cherry/" },
        ],
      },
    ],
  },
  {
    label: "Lab Testing",
    href: "https://labs.revivalhealthandwellnessgroup.com/",
    external: true,
  },
];

/** Secondary navigation (top-right utility bar). */
export const SECONDARY_NAV: NavLeaf[] = [
  { label: "Telehealth", href: "/telehealth/" },
  { label: "Blogs", href: "/blogs/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
];

/** Primary call-to-action (Zenoti booking). */
export const CTA = {
  label: "Book Free Consultation",
  href: "https://revivalhealth.zenoti.com/webstorenew",
  external: true,
} as const;

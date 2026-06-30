"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Phone,
  ArrowRight,
  Mail,
  MapPin,
  CalendarCheck,
} from "lucide-react";
import {
  PRIMARY_NAV,
  SECONDARY_NAV,
  CTA,
  type NavItem,
  type NavLeaf,
} from "./nav";
import { useScrollPosition } from "@/lib/useScrollPosition";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;
const PHONE = "(702) 963-1154";
const EMAIL = "info@revivalhealthandwellnessgroup.com";

/** Secondary links promoted into the single unified menu. */
const SECONDARY_ITEMS: NavItem[] = SECONDARY_NAV.map((s) => ({
  label: s.label,
  href: s.href,
  external: s.external,
}));

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/RevivalHealthAndWellness",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/revival.healthandwellness/",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@revival.lv",
    Icon: TikTokIcon,
  },
];

export default function Header() {
  const { scrolled } = useScrollPosition(40);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Grace period before closing a dropdown so the cursor can travel
  // from the trigger to a (potentially detached) panel without it shutting.
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      setHovered(null);
    }, 220);
  };
  useEffect(() => () => cancelClose(), []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── Top utility bar: email · location · socials (collapses on scroll) ── */}
      <AnimatePresence initial={false}>
        {!scrolled ? (
          <motion.div
            key="utility-bar"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 40, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: LUXURY_EASE }}
            className="relative overflow-hidden bg-revival-dark text-revival-warm-white"
          >
            {/* drifting gold glow */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -top-10 left-1/4 h-24 w-64 rounded-full bg-revival-gold/15 blur-3xl"
              animate={{ x: [0, 120, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative mx-auto flex h-10 max-w-[90rem] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
              {/* Left: email + locations */}
              <div className="flex items-center gap-5 text-[0.7rem] font-medium uppercase tracking-[0.12em]">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-2 text-revival-warm-white/75 transition-colors hover:text-revival-gold"
                >
                  <Mail className="h-3.5 w-3.5 text-revival-gold" />
                  <span className="hidden sm:inline">{EMAIL}</span>
                  <span className="sm:hidden">Email Us</span>
                </a>
                <span className="hidden items-center gap-2 text-revival-warm-white/60 md:inline-flex">
                  <MapPin className="h-3.5 w-3.5 text-revival-gold" />
                  Two Las Vegas Locations
                </span>
              </div>

              {/* Right: socials + book pill */}
              <div className="flex items-center gap-4">
                <span className="hidden text-[0.7rem] uppercase tracking-[0.25em] text-revival-warm-white/45 lg:inline">
                  Follow
                </span>
                <ul className="flex items-center gap-1.5">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="group flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-revival-warm-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-revival-gold/50 hover:text-revival-gold"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
                <span
                  aria-hidden
                  className="hidden h-4 w-px bg-white/10 sm:block"
                />
                <a
                  href={CTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-revival-warm-white/75 transition-colors hover:text-revival-gold sm:inline-flex"
                >
                  <CalendarCheck className="h-3.5 w-3.5 text-revival-gold" />
                  Book Online
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* ── Main unified navigation bar ─────────────────────────────────── */}
      <div
        className={cn(
          "relative border-b transition-colors duration-500",
          scrolled
            ? "border-revival-gold/15 bg-revival-dark/90 backdrop-blur-xl"
            : "border-revival-gold/10 bg-revival-cream/90 backdrop-blur-md",
        )}
      >
        {/* Animated gold sheen sweeping across the bottom hairline */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden"
        >
          <motion.span
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-revival-gold to-transparent"
            animate={{ x: ["-120%", "420%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-revival-gold/25 to-transparent" />
        </span>

        <div
          className={cn(
            "mx-auto max-w-[90rem] px-4 transition-all duration-500 sm:px-6 lg:px-8",
            scrolled ? "py-2" : "py-3",
          )}
        >
          {/* Tier 1 — phone · centered logo · CTA */}
          <div className="grid grid-cols-2 items-center xl:grid-cols-[1fr_auto_1fr]">
            {/* Left: phone (desktop only) */}
            <div className="hidden justify-start xl:flex">
              <a
                href={`tel:${PHONE.replace(/[^\d]/g, "")}`}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[0.72rem] font-semibold tracking-[0.08em] transition-colors",
                  scrolled
                    ? "border-white/10 text-revival-warm-white/80 hover:border-revival-gold/40 hover:text-revival-gold"
                    : "border-revival-dark/10 text-revival-charcoal hover:border-revival-gold/50 hover:text-revival-gold",
                )}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-revival-gold/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-revival-gold" />
                </span>
                <Phone className="h-3.5 w-3.5 text-revival-gold" />
                {PHONE}
              </a>
            </div>

            {/* Center: logo (wordmark is baked into the artwork) */}
            <Link
              href="/"
              className="group flex items-center justify-self-start xl:justify-self-center"
              aria-label="Revival Health & Wellness home"
            >
              <motion.span
                className="relative block"
                whileHover={{ rotate: 8, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
              >
                <Image
                  src="/images/brand/revival-logo-full-color.png"
                  alt="Revival Health & Wellness"
                  width={742}
                  height={1005}
                  priority
                  className={cn(
                    "w-auto object-contain transition-all duration-500",
                    scrolled ? "h-10" : "h-14",
                  )}
                />
              </motion.span>
            </Link>

            {/* Right: CTA + mobile trigger */}
            <div className="flex items-center justify-end gap-3">
              <a
                href={CTA.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-revival-gold to-revival-gold-light px-6 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-revival-dark shadow-[0_4px_20px_-6px_rgba(201,169,110,0.6)] transition-transform duration-300 hover:scale-[1.04] sm:inline-flex sm:items-center sm:gap-2"
              >
                {/* shimmer sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">{CTA.label}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <div className="xl:hidden">
                <MobileMenu
                  open={mobileOpen}
                  onOpenChange={setMobileOpen}
                  scrolled={scrolled}
                />
              </div>
            </div>
          </div>

          {/* Tier 2 — centered unified nav (primary + secondary) */}
          <nav
            className="mt-2.5 hidden flex-wrap items-center justify-center xl:flex"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {PRIMARY_NAV.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                scrolled={scrolled}
                active={isActive(item.href)}
                open={openMenu === item.label}
                hovered={hovered === item.label}
                onOpen={() => {
                  cancelClose();
                  setOpenMenu(item.label);
                  setHovered(item.label);
                }}
                onPanelHover={cancelClose}
                onPanelLeave={scheduleClose}
              />
            ))}

            {SECONDARY_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                scrolled={scrolled}
                active={isActive(item.href)}
                open={openMenu === item.label}
                hovered={hovered === item.label}
                secondary
                onOpen={() => {
                  cancelClose();
                  setOpenMenu(item.label);
                  setHovered(item.label);
                }}
                onPanelHover={cancelClose}
                onPanelLeave={scheduleClose}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ── Desktop nav item with sliding highlight + mega-menu dropdown ───────── */

function DesktopNavItem({
  item,
  scrolled,
  active,
  open,
  hovered,
  secondary = false,
  onOpen,
  onPanelHover,
  onPanelLeave,
}: {
  item: NavItem;
  scrolled: boolean;
  active: boolean;
  open: boolean;
  hovered: boolean;
  secondary?: boolean;
  onOpen: () => void;
  onPanelHover?: () => void;
  onPanelLeave?: () => void;
}) {
  const baseColor = scrolled
    ? "text-revival-warm-white/90"
    : "text-revival-charcoal";

  const sizing = "px-3.5 py-2 text-[0.8rem] font-semibold tracking-[0.04em] font-sans";

  /* Shared sliding gold pill that animates between items on hover. */
  const Highlight = () =>
    hovered ? (
      <motion.span
        layoutId="nav-highlight"
        aria-hidden
        className="absolute inset-0 z-0 rounded-full bg-revival-gold/12 ring-1 ring-revival-gold/20"
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
      />
    ) : null;

  // Leaf item (no dropdown).
  if (!item.children) {
    const inner = (
      <>
        <Highlight />
        <span className="relative z-10 inline-flex items-center gap-1.5">
          {item.label}
          {item.external ? (
            <ExternalLink className="h-3 w-3 opacity-60" />
          ) : null}
        </span>
        <Underline show={active} />
      </>
    );

    const className = cn(
      "group relative inline-flex items-center transition-colors hover:text-revival-gold",
      sizing,
      baseColor,
    );

    return item.external ? (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onOpen}
        className={className}
      >
        {inner}
      </a>
    ) : (
      <Link href={item.href} onMouseEnter={onOpen} className={className}>
        {inner}
      </Link>
    );
  }

  const grouped = item.children.some((c) => c.children && c.children.length);
  const wide = grouped || item.children.length > 6;

  // For grouped mega-menus, count the on-screen columns so the grid
  // keeps every category on a single row.
  const groupedCols = grouped
    ? (item.children.some((c) => !c.children?.length) ? 1 : 0) +
      item.children.filter((c) => c.children?.length).length
    : 0;

  // Grouped panels break out of the nav-item box and re-anchor to the
  // viewport so they stay centered and never overflow on small laptops.
  const triggerRef = useRef<HTMLDivElement>(null);
  const [panelTop, setPanelTop] = useState(0);
  useEffect(() => {
    if (!grouped || !open) return;
    const measure = () => {
      const r = triggerRef.current?.getBoundingClientRect();
      if (r) setPanelTop(r.bottom);
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
    };
  }, [grouped, open, scrolled]);

  return (
    <div ref={triggerRef} className="relative" onMouseEnter={onOpen}>
      <Link
        href={item.href}
        className={cn(
          "group relative inline-flex items-center gap-1 transition-colors hover:text-revival-gold",
          sizing,
          baseColor,
        )}
      >
        <Highlight />
        <span className="relative z-10 inline-flex items-center gap-1">
          {item.label}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              open && "rotate-180 text-revival-gold",
            )}
          />
        </span>
        <Underline show={active || open} />
      </Link>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.24, ease: LUXURY_EASE }}
            onMouseEnter={onPanelHover}
            onMouseLeave={onPanelLeave}
            className={cn(
              grouped
                ? "fixed left-1/2 z-50 -translate-x-1/2 pt-2"
                : cn(
                    "absolute top-full pt-4",
                    item.label === "Aesthetics" ? "right-0" : "left-0",
                  ),
              !grouped && (wide ? "w-[34rem]" : "w-72"),
            )}
            style={
              grouped
                ? {
                    top: panelTop,
                    // Roughly 15rem per column + container padding, clamped to viewport.
                    width: `min(${groupedCols * 15 + 2}rem, calc(100vw - 2rem))`,
                  }
                : undefined
            }
          >
            <div className="overflow-hidden rounded-2xl border border-revival-gold/15 bg-revival-charcoal/95 p-4 shadow-2xl backdrop-blur-xl">
              <span
                aria-hidden
                className="mb-2 block h-px bg-gradient-to-r from-transparent via-revival-gold/60 to-transparent"
              />
              {grouped ? (
                <MegaMenu item={item} cols={groupedCols} />
              ) : (
                <ul
                  className={cn(
                    "gap-0.5",
                    wide ? "grid grid-cols-2" : "flex flex-col",
                  )}
                >
                  {item.children.map((child, i) => (
                    <motion.li
                      key={child.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.04 + i * 0.025,
                        duration: 0.3,
                        ease: LUXURY_EASE,
                      }}
                    >
                      <DropdownLink child={child} />
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* ── Grouped mega-menu (Sexual Wellness, Aesthetics) ───────────────────── */

function MegaMenu({ item, cols }: { item: NavItem; cols: number }) {
  const children = item.children ?? [];
  const standalone = children.filter((c) => !c.children?.length);
  const groups = children.filter((c) => c.children?.length);

  return (
    <div
      className="grid gap-x-6 gap-y-1"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {standalone.length ? (
        <div className="flex flex-col">
          <p className="px-3 pb-1.5 text-tagline text-[0.65rem] text-revival-gold">
            {item.label}
          </p>
          {standalone.map((child) => (
            <DropdownLink key={child.href} child={child} />
          ))}
        </div>
      ) : null}

      {groups.map((group) => (
        <div key={group.href} className="flex flex-col">
          <Link
            href={group.href}
            className="px-3 pb-1.5 text-tagline text-[0.65rem] text-revival-gold transition-colors hover:text-revival-gold-light"
          >
            {group.label}
          </Link>
          {group.children?.map((leaf) => (
            <DropdownLink key={leaf.href} child={leaf} />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ── Single dropdown link row ──────────────────────────────────────────── */

function DropdownLink({ child }: { child: NavLeaf }) {
  return (
    <Link
      href={child.href}
      target={child.external ? "_blank" : undefined}
      rel={child.external ? "noopener noreferrer" : undefined}
      className="group/item flex items-center justify-between rounded-xl px-3 py-2 text-sm font-light text-revival-warm-white/85 transition-colors hover:bg-revival-gold/10 hover:text-revival-gold"
    >
      <span className="flex items-center gap-2">
        <span className="h-1 w-1 shrink-0 rounded-full bg-revival-gold/40 transition-all duration-300 group-hover/item:w-3 group-hover/item:bg-revival-gold" />
        {child.label}
      </span>
      {child.external ? (
        <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
      ) : (
        <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
      )}
    </Link>
  );
}

/* ── Active / hover gold underline indicator ───────────────────────────── */

function Underline({ show }: { show: boolean }) {
  return (
    <span className="pointer-events-none absolute inset-x-3 bottom-1 z-10 h-px overflow-hidden">
      <span
        className={cn(
          "block h-full origin-left bg-gradient-to-r from-revival-gold to-revival-gold-light transition-transform duration-300",
          show ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </span>
  );
}

/* ── Brand social icons ────────────────────────────────────────────────── */

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 5.5a4.5 4.5 0 0 0 4 2.3v3a7.5 7.5 0 0 1-4-1.2v5.9a5.5 5.5 0 1 1-5.5-5.5c.28 0 .55.02.82.06v3.1a2.5 2.5 0 1 0 1.68 2.36V2.5h3a4.5 4.5 0 0 0 0 .02z" />
    </svg>
  );
}

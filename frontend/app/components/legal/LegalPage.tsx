import Link from "next/link";
import { type FC, type ReactNode } from "react";

// ============================================================================
// Types
// ============================================================================

type LinkItem = {
  label: string;
  href: string;
};

type SubSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  links?: LinkItem[];
};

type TableData = {
  columns: string[];
  rows: string[][];
};

type RightCard = {
  article: string;
  title: string;
  description: string;
};

type ContactCard = {
  label: string;
  value: string;
};

type CategoryCard = {
  name: string;
  description: string;
  badge?: string;
};

type CookieTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  subsections?: SubSection[];
  table?: TableData;
  rights?: RightCard[];
  contactCards?: ContactCard[];
  categories?: CategoryCard[];
  cookieTables?: CookieTable[];
  links?: LinkItem[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroMeta?: string[];
  contents?: string[];
  sections: LegalSection[];
  note?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

// ============================================================================
// Style Constants
// ============================================================================

const styles = {
  bodyText: "text-sm leading-7 text-brand-muted sm:text-base sm:leading-8 break-words",
  sectionTitle: "text-xl font-semibold text-white sm:text-2xl break-words",
  subSectionTitle: "text-base font-semibold text-white sm:text-lg break-words",
  noteText: "text-xs leading-6 text-amber-50 sm:text-sm sm:leading-7 break-words",
  tableText: "min-w-full text-left text-xs text-brand-muted sm:text-sm",
  tableHeading: "px-3 py-2.5 font-semibold text-xs sm:px-5 sm:py-4 sm:text-sm break-words",
  tableCell: "px-3 py-2.5 align-top leading-6 text-xs sm:px-5 sm:py-4 sm:text-sm sm:leading-7 break-words",
  card: "rounded-2xl border border-white/8 bg-white/5",
  noteBox: "rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3 sm:p-4",
  badge: "rounded-full border border-brand-petalPink/30 bg-brand-petalPink/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-petalPink sm:px-3 sm:text-xs sm:tracking-[0.2em]",
  link: "text-brand-petalPink underline underline-offset-4 transition-colors hover:text-white break-words",
  bullet: "mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-petalPink sm:mt-3",
} as const;

// ============================================================================
// Utility Components
// ============================================================================

const BulletList: FC<{ items: string[] }> = ({ items }) => (
  <ul className={`mt-3 space-y-2.5 sm:mt-4 sm:space-y-3 ${styles.bodyText}`}>
    {items.map((item, index) => (
      <li key={index} className="flex gap-2.5 sm:gap-3">
        <span className={styles.bullet} aria-hidden="true" />
        <span className="break-words">{item}</span>
      </li>
    ))}
  </ul>
);

const ParagraphList: FC<{ paragraphs: string[] }> = ({ paragraphs }) => (
  <div className={`mt-3 space-y-3 sm:mt-4 sm:space-y-4 ${styles.bodyText}`}>
    {paragraphs.map((paragraph, index) => (
      <p key={index} className="break-words">{paragraph}</p>
    ))}
  </div>
);

const NoteBox: FC<{ note: string; className?: string }> = ({ note, className = "" }) => (
  <div className={`${styles.noteBox} ${className}`}>
    {note}
  </div>
);

const LinkList: FC<{ links: LinkItem[] }> = ({ links }) => (
  <ul className="mt-3 space-y-2.5 text-sm leading-6 sm:mt-4 sm:space-y-3 sm:text-base sm:leading-7">
    {links.map((link, index) => (
      <li key={index} className="break-words">
        <Link
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

// ============================================================================
// Section Components
// ============================================================================

const Table: FC<{ table: TableData }> = ({ table }) => (
  <div className="mt-5 overflow-hidden rounded-2xl border border-white/8 bg-white/5 sm:mt-6">
    <div className="overflow-x-auto">
      <table className={styles.tableText}>
        <thead className="bg-black/20 text-[10px] uppercase tracking-[0.15em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
          <tr>
            {table.columns.map((column, index) => (
              <th key={index} scope="col" className={styles.tableHeading}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-white/8">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={styles.tableCell}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const RightsGrid: FC<{ rights: RightCard[] }> = ({ rights }) => (
  <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
    {rights.map((right, index) => (
      <article
        key={index}
        className="rounded-2xl border border-white/8 bg-white/5 p-4 sm:p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <span className={`${styles.badge} flex-shrink-0 self-start`}>
            {right.article}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className={styles.subSectionTitle}>
              {right.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-brand-muted sm:leading-7 sm:text-base break-words">
              {right.description}
            </p>
          </div>
        </div>
      </article>
    ))}
  </div>
);

const ContactCardsGrid: FC<{ cards: ContactCard[] }> = ({ cards }) => (
  <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2">
    {cards.map((card, index) => (
      <article
        key={index}
        className="rounded-2xl border border-white/8 bg-white/5 p-4 sm:p-5"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-petalPink sm:text-xs sm:tracking-[0.2em]">
          {card.label}
        </p>
        <p className="mt-2 text-sm leading-6 text-brand-muted sm:mt-3 sm:text-base sm:leading-7 break-words">
          {card.value}
        </p>
      </article>
    ))}
  </div>
);

const CategoriesGrid: FC<{ categories: CategoryCard[] }> = ({ categories }) => (
  <div className="mt-4 grid gap-3 md:mt-6 md:gap-4 md:grid-cols-2">
    {categories.map((category, index) => (
      <article
        key={index}
        className="rounded-2xl border border-white/8 bg-white/5 p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3">
          <h3 className={styles.subSectionTitle}>
            {category.name}
          </h3>
          {category.badge && (
            <span className="rounded-full border border-brand-petalPink/30 bg-brand-petalPink/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-petalPink sm:text-xs">
              {category.badge}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm leading-6 text-brand-muted sm:mt-3 sm:text-base sm:leading-7">
          {category.description}
        </p>
      </article>
    ))}
  </div>
);

const CookieTables: FC<{ tables: CookieTable[] }> = ({ tables }) => (
  <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
    {tables.map((table, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-2xl border border-white/8 bg-white/5"
      >
        <div className="border-b border-white/8 bg-black/20 px-4 py-3 sm:px-5 sm:py-4">
          <h3 className={styles.subSectionTitle}>
            {table.title}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className={styles.tableText}>
            <thead className="bg-black/20 text-[10px] uppercase tracking-[0.15em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
              <tr>
                {table.columns.map((column, colIndex) => (
                  <th key={colIndex} scope="col" className={styles.tableHeading}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-white/8">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className={styles.tableCell}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

const SubSection: FC<{ subsection: SubSection }> = ({ subsection }) => (
  <div className="rounded-2xl border border-white/8 bg-white/5 p-4 sm:p-5">
    <h3 className={styles.subSectionTitle}>
      {subsection.title}
    </h3>

    {subsection.paragraphs && <ParagraphList paragraphs={subsection.paragraphs} />}
    {subsection.bullets && <BulletList items={subsection.bullets} />}
    {subsection.links && <LinkList links={subsection.links} />}
    {subsection.note && <NoteBox note={subsection.note} className="mt-4" />}
  </div>
);

const Section: FC<{ section: LegalSection }> = ({ section }) => (
  <section className="rounded-2xl border border-white/8 bg-black/20 p-4 sm:p-6">
    <h2 className={styles.sectionTitle}>
      {section.title}
    </h2>

    {section.paragraphs && <ParagraphList paragraphs={section.paragraphs} />}
    {section.bullets && <BulletList items={section.bullets} />}
    
    {section.subsections && (
      <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
        {section.subsections.map((subsection, index) => (
          <SubSection key={index} subsection={subsection} />
        ))}
      </div>
    )}

    {section.table && <Table table={section.table} />}
    {section.rights && <RightsGrid rights={section.rights} />}
    {section.contactCards && <ContactCardsGrid cards={section.contactCards} />}
    {section.categories && <CategoriesGrid categories={section.categories} />}
    {section.cookieTables && <CookieTables tables={section.cookieTables} />}
    {section.links && <LinkList links={section.links} />}
    {section.note && <NoteBox note={section.note} className="mt-4 sm:mt-5" />}
  </section>
);

// ============================================================================
// Main Component
// ============================================================================

export default function LegalPage({
  eyebrow,
  title,
  intro,
  heroMeta,
  contents,
  sections,
  note,
  ctaHref,
  ctaLabel,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#0B0B0F] px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
          {/* Header */}
          <header>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-petalPink sm:text-[11px] sm:tracking-[0.3em]">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-balance text-xl font-semibold sm:mt-4 sm:text-2xl lg:text-3xl xl:text-4xl break-words">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-brand-muted sm:mt-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8 break-words">
              {intro}
            </p>
          </header>

          {/* Hero Meta Tags */}
          {heroMeta && heroMeta.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3" role="list">
              {heroMeta.map((item, index) => (
                <span
                  key={index}
                  role="listitem"
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-brand-muted sm:px-4 sm:py-2 sm:text-sm break-words"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* CTA Button */}
          {ctaHref && ctaLabel && (
            <div className="mt-6 sm:mt-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-xl border border-brand-petalPink px-4 py-2.5 text-sm font-semibold text-brand-petalPink transition-colors hover:border-brand-teal hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-petalPink focus:ring-offset-2 focus:ring-offset-[#0B0B0F] sm:px-5 sm:py-3"
              >
                {ctaLabel}
              </Link>
            </div>
          )}

          {/* Contents List */}
          {contents && contents.length > 0 && (
            <nav className="mt-6 rounded-2xl border border-white/8 bg-black/20 p-4 sm:mt-8 sm:p-6" aria-label="Page contents">
              <ul className="mt-3 grid gap-2.5 text-xs leading-6 text-brand-muted sm:mt-4 sm:grid-cols-2 sm:gap-3 sm:text-sm sm:leading-7">
                {contents.map((item, index) => (
                  <li key={index} className="flex gap-2.5 sm:gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-petalPink" aria-hidden="true" />
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Sections */}
          <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
            {sections.map((section, index) => (
              <Section key={index} section={section} />
            ))}
          </div>

          {/* Footer Note */}
          {note && <NoteBox note={note} className="mt-6 p-4 sm:mt-8 sm:p-5" />}
        </article>
      </div>
    </main>
  );
}
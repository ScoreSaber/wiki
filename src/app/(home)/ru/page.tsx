import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type HomeContent = {
  action: string;
  resourceLabel: string;
  resourceGroups: {
    title: string;
    links: [string, string][];
  }[];
  externalTitle: string;
  externalLinks: [string, string, string][];
  footer: string;
};

const content: HomeContent = {
  action: "Введение для новичков",
  resourceLabel: "Материалы вики",
  resourceGroups: [
    {
      title: "С чего начать",
      links: [
        ["Правила", "/ru/rules"],
        ["Введение для новичков", "/ru/beginners-guide"],
        ["Рейтинговая система", "/ru/ranking-system"],
        ["FAQ", "/ru/faq"],
      ],
    },
    {
      title: "Рейтинговые ресурсы",
      links: [
        ["Как мне ранкнуть свою карту?", "/ru/ranking/how-to-rank-map"],
        ["Ранкинг критерии", "/ru/ranking/criteria"],
        ["Правила ранкинг очереди", "/ru/ranking/ranking-queue-rules"],
        ["Рекомендации для QAT", "/ru/ranking/qat-guidelines"],
        ["Информация о моддинг очереди", "/ru/ranking/modding-queue-information"],
        ["Информация о командах ScoreSaber", "/ru/ranking/scoresaber-team-information"],
        ["Система разбана и её условия", "/ru/ranking/ranking-unban-system-and-terms"],
        ["Ревейты", "/ru/ranking/reweights"],
      ],
    },
    {
      title: "Другие ресурсы",
      links: [["О нас", "/ru/about-us"]],
    },
  ],
  externalTitle: "Дополнительные ссылки",
  externalLinks: [
    ["Discord", "https://discord.gg/scoresaber", "присоединитесь к нам в Discord"],
    ["Patreon", "https://patreon.com/scoresaber", "поддержите нас на Patreon"],
    ["X", "https://x.com/ScoreSaber", "отслеживайте нас в X"],
    ["YouTube", "https://www.youtube.com/@ScoreSaberOfficial", "подпишитесь на нас на YouTube"],
    ["BSMG Wiki", "https://bsmg.wiki/", ""],
  ],
  footer: "Copyright (c) ScoreSaber 2026 | Licensed under CC BY-NC-SA 4.0",
};

export default function Page() {
  return (
    <main className="home-shell" lang="ru">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-logo">
          <Image src="/scoresaber.svg" width={96} height={96} alt="" priority />
        </div>
        <h1 id="home-title" className="home-title">
          <span className="brand-word">ScoreSaber Wiki</span>
        </h1>
        <div className="home-actions">
          <Link className="home-button" href="/ru/beginners-guide">
            {content.action}
          </Link>
        </div>
      </section>

      <section className="home-grid" aria-label={content.resourceLabel}>
        {content.resourceGroups.map((group) => (
          <article className="home-card" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="home-section" aria-labelledby="external-links">
        <h2 id="external-links">{content.externalTitle}</h2>
        <ul>
          {content.externalLinks.map(([label, href, description]) => (
            <li key={href}>
              <a href={href} rel="noreferrer noopener" target="_blank">
                {label}
                <ExternalLink aria-hidden="true" />
              </a>
              {description ? ` - ${description}` : null}
            </li>
          ))}
        </ul>
      </section>

      <footer className="home-footer">{content.footer}</footer>
    </main>
  );
}

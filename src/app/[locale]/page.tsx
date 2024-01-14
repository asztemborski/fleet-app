import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/utilities/navigation";

import BaseButton from "@/components/Buttons/BaseButton";
import StatisticCard from "@/components/StatisticCard";

import { LANDING_PAGE_MESSAGES } from "@/constants/translations";
import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  const t = useTranslations(LANDING_PAGE_MESSAGES);

  return (
    <main className={styles.MainContainer}>
      <section className={styles.WelcomeSection}>
        <header className={styles.HeaderContainer}>
          <nav className={styles.NavBar}>
            <Link className={styles.Link} href="/">
              Fleet
            </Link>
            <Link className={styles.Link} href="/about">
              {t("about")}
            </Link>
            <Link className={styles.Link} href="/contact">
              {t("contact")}
            </Link>
          </nav>
          <Link href="/sign-in">
            <BaseButton>
              <span className={styles.ButtonText}>{t("signIn")}</span>
            </BaseButton>
          </Link>
        </header>
        <div className={styles.WelcomeSectionContainer}>
          <div className={styles.TextContainer}>
            <h1 className={styles.WelcomeSectionHeader}>
              {t("welcomeSection_header")}
            </h1>
            <p className={styles.WelcomeSectionText}>
              {t("welcomeSection_description")}
            </p>
            <div className={styles.WelcomeSectionButtonContainer}>
              <Link href="/sign-up">
                <BaseButton>
                  <span className={styles.ButtonText}>{t("getStarted")}</span>
                </BaseButton>
              </Link>
            </div>
          </div>
          <Image
            src="/images/description-section-image.svg"
            alt=""
            width="500"
            height="500"
          />
        </div>
      </section>
      <section className={styles.DescriptionSection}>
        <Image
          src="/images/welcome-section-image.svg"
          alt=""
          width="500"
          height="500"
        />
        <div className={styles.TextContainer}>
          <h2 className={styles.DescriptionSectionHeader}>
            {t("descriptionSection_header")}
          </h2>
          <p className={styles.DescriptionSectionText}>
            {t("descriptionSection_description")}
          </p>
        </div>
      </section>
      <section className={styles.StatisticsSection}>
        <div className={styles.StatisticsContainer}>
          <StatisticCard
            header={t("statisticsSection_projectsCreated")}
            value="102 Projects"
          />
          <StatisticCard
            header={t("statisticsSection_applicationMembers")}
            value="350 Members"
          />
          <StatisticCard
            header={t("statisticsSection_tasksAssigned")}
            value="1022 Tasks"
          />
          <StatisticCard
            header={t("statisticsSection_pageVisitors")}
            value="700 Visitors"
          />
        </div>
        <footer className={styles.Footer}>
          <h3 className={styles.FooterHeader}>{t("footer_title")}</h3>
        </footer>
      </section>
    </main>
  );
}

import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - HabitMeister</title>
        <meta name="description" content="Privacy Policy for HabitMeister" />
      </Head>

      <main className="container mx-auto px-4 py-8 mt-20 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500">
          Effective Date: [Insert Date] | Last Updated: [Insert Date]
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            HabitMeister (“we,” “our,” or “us”) respects your privacy and is
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, and safeguard your information when
            you use our habit-tracking app (“App”).
          </p>
          <p>
            If you are located in the European Economic Area (EEA), we process
            your data in compliance with the General Data Protection Regulation
            (GDPR). If you are a California resident, we comply with the
            California Consumer Privacy Act (CCPA).
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-4">
            2.1 Personal Data (Optional)
          </h3>
          <p>
            If you create an account, we may collect your name, email address,
            and profile information. Personal data is not required to use the
            core features of the App.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            2.2 Habit & Activity Data
          </h3>
          <p>
            The App collects habit-related data (e.g., habit names, completion
            status, streaks, and reminders). This data is stored locally on your
            device or, if you enable cloud sync, securely stored with our
            third-party storage provider.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            2.3 Payment Data (RevenueCat)
          </h3>
          <p>
            If you purchase a subscription (Monthly Premium, Yearly Premium, or
            Lifetime) or in-app purchase, payments are processed through Google
            Play Billing and managed by RevenueCat. We do not store payment
            details such as credit card information, but RevenueCat may collect
            transaction metadata (e.g., purchase history, subscription status).
          </p>
          <p className="mt-4">
            For customers in the United Kingdom, prices shown on this website
            are presented in GBP and should be considered as display prices. App
            stores (Google Play / Apple) determine the final charge and may
            include applicable taxes such as VAT. If VAT applies, it will be
            collected and shown by the app store at checkout according to the
            buyer&apos;s location and local tax rules.
          </p>
          <p>
            RevenueCat’s Privacy Policy:{" "}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              https://www.revenuecat.com/privacy
            </a>
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>We process your data for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>To track and manage your habits effectively.</li>
            <li>To send habit reminders (if enabled).</li>
            <li>
              To process payments and subscriptions (via Google Play &
              RevenueCat) for Premium Monthly, Premium Yearly, and Lifetime
              plans.
            </li>
            <li>To enable cloud sync for Premium subscribers.</li>
            <li>To improve app performance and user experience.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">4. Your Rights</h2>

          <h3 className="text-xl font-semibold mt-4">
            4.1 GDPR Rights (EEA Users)
          </h3>
          <ul className="list-disc pl-6">
            <li>Right to Access – Request a copy of your data.</li>
            <li>Right to Rectification – Correct any incorrect data.</li>
            <li>Right to Erasure – Request data deletion.</li>
            <li>
              Right to Restrict Processing – Limit how we process your data.
            </li>
            <li>
              Right to Data Portability – Request a copy of your data in a
              structured format.
            </li>
            <li>Right to Object – Object to certain processing activities.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            4.2 CCPA Rights (California Residents)
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Right to Know – Request details about the personal data we collect
              and how we use it.
            </li>
            <li>
              Right to Delete – Request that we delete your personal
              information.
            </li>
            <li>
              Right to Opt-Out – You can opt out of data sharing if applicable.
            </li>
            <li>
              Right to Non-Discrimination – We will not deny services or charge
              different prices based on CCPA rights.
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:[Your Contact Email]" className="text-blue-600">
              [Your Contact Email]
            </a>
            .
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">5. Data Retention</h2>
          <p>
            - Habit and user data are stored until you delete them or request
            account deletion.
          </p>
          <p>
            - Payment-related records (via RevenueCat) are retained as required
            by law.
          </p>
          <p>- Anonymous analytics data is stored for up to 24 months.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">6. Contact Us</h2>
          <p>
            If you have any questions or wish to exercise your privacy rights,
            contact us at:{" "}
            <a href="mailto:[Your Contact Email]" className="text-blue-600">
              [Your Contact Email]
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;

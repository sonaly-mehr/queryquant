import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="bg-black min-h-screen text-white px-4 py-8 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-neon-green">Terms of Use</h1>
        <p className="text-gray-400 mb-8">Last updated: August 4, 2025</p>

        <div className="space-y-6 font-inter">
          <p>Welcome to QueryQuant! These Terms of Use ("Terms") govern your access to and use of our website, tools, and services ("Service"). By using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.</p>

          <p>By using our Service, you also agree to our <a href="/privacy-policy" className="text-[#9D00FF] hover:underline">Privacy Policy</a>.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">1. Service Description</h2>
          <p>QueryQuant is an AI-powered research tool that provides data insights and information about financial markets, cryptocurrencies, and related topics. It is not a financial advisor or investment service.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">2. No Financial Advice</h2>
          <p>All content and results provided by QueryQuant are for informational and educational purposes only and do not constitute financial, legal, or investment advice. You are solely responsible for your own decisions and actions.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">3. Eligibility</h2>
          <p>You must be at least 18 years old to use this Service. By using the platform, you confirm that you meet this requirement.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">4. User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You agree to use the Service only for lawful purposes.</li>
            <li>You will not attempt to hack, disrupt, or reverse-engineer the platform.</li>
            <li>You will not misuse the Service to send spam, abuse, or engage in harmful behavior.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#9D00FF]">5. Intellectual Property</h2>
          <p>All content on the site, including software, algorithms, branding, design, and text, is owned by QueryQuant or its licensors and is protected by intellectual property laws. You may not copy, reproduce, or redistribute any part of the Service without prior written permission.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">6. Account & Access</h2>
          <p>If we provide user accounts or access tokens, you are responsible for keeping your credentials confidential. We reserve the right to suspend or terminate access for any misuse or violation of these Terms.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">7. Third-Party Services</h2>
          <p>Our Service may rely on or link to third-party APIs or tools. We are not responsible for the accuracy, availability, or practices of such services. Use them at your own risk.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">8. Disclaimer of Warranties</h2>
          <p>The Service is provided "as is" and "as available", without warranties of any kind, either express or implied. We do not guarantee accuracy, completeness, or uninterrupted access to the Service.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">9. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, QueryQuant and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Service, including but not limited to loss of profits, data, or goodwill.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">10. Indemnification</h2>
          <p>You agree to defend, indemnify, and hold harmless QueryQuant, its founders, team, and affiliates from any claims, liabilities, damages, or legal actions arising from your use of the Service or violation of these Terms.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">11. Modifications</h2>
          <p>We reserve the right to update or modify these Terms at any time without prior notice. Changes will be posted on this page and become effective immediately upon publication. Continued use of the Service constitutes acceptance of the updated Terms.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">12. Governing Law</h2>
          <p>These Terms shall be governed by and interpreted in accordance with the laws of the State of Israel. Any disputes shall be subject to the exclusive jurisdiction of the competent courts of Tel Aviv, Israel.</p>

          <h2 className="text-xl font-bold text-[#9D00FF]">13.  Changes to This Privacy Policy</h2>
          <p>We may update this policy from time to time. The most current version will always be
            available on our site. Continued use of the site indicates your acceptance of the changes.
          </p>




          <div className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-xl font-bold text-neon-green mb-4">Contact</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-2">
              <a href="mailto:support@queryquant.ai" className="text-[#9D00FF] hover:underline">
                support@queryquant.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
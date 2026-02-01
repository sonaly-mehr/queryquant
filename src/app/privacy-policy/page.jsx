export default function PrivacyPolicy() {
  return (
    <div className="bg-black min-h-screen text-white px-4 py-8 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-4 text-neon-green">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: August 4, 2025</p>

        {/* Intro */}
        <div className="space-y-6 font-inter">
          <p>
            This Privacy Policy describes how QueryQuant (“we”, “our”, or “us”) collects, uses, and protects the personal information of users (“you”) who visit or use our website and services.
          </p>

          {/* 1. Information We Collect */}
          <h2 className="text-xl font-bold text-[#9D00FF]">1. Information We Collect</h2>
          <p>We collect the following types of personal data:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>IP address and location (via analytics)</li>
            <li>Browser and device information</li>
            <li>Usage data (pages visited, clicks, session time)</li>
            <li>Communication data (messages or emails sent to us)</li>
          </ul>

          {/* 2. How We Collect Information */}
          <h2 className="text-xl font-bold text-[#9D00FF]">2. How We Collect Information</h2>
          <p>We collect data when you:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Register or submit a form on our site</li>
            <li>Contact us via email</li>
            <li>Use our platform or tools</li>
            <li>Browse our website (via cookies and analytics tools)</li>
          </ul>

          {/* 3. Legal Basis */}
          <h2 className="text-xl font-bold text-[#9D00FF]">3. Legal Basis for Processing (GDPR Compliance)</h2>
          <p>We process your data under one or more of the following legal bases:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your consent (e.g., when you subscribe or opt-in)</li>
            <li>Contractual necessity (e.g., to provide a service you requested)</li>
            <li>Legitimate interest (e.g., to improve services and secure the site)</li>
            <li>Legal obligation (e.g., if required to disclose information by law)</li>
          </ul>

          {/* 4. How We Use Your Information */}
          <h2 className="text-xl font-bold text-[#9D00FF]">4. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide and improve our services</li>
            <li>Send newsletters or service updates (only if you opt-in)</li>
            <li>Respond to your inquiries or support requests</li>
            <li>Analyze site performance and user behavior</li>
            <li>Prevent fraud, abuse, or unauthorized access</li>
          </ul>

          {/* 5. Cookies */}
          <h2 className="text-xl font-bold text-[#9D00FF]">5. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to improve your experience and analyze usage. You can disable cookies through your browser settings.
          </p>

          {/* 6. Sharing */}
          <h2 className="text-xl font-bold text-[#9D00FF]">6. Sharing of Personal Data</h2>
          <p>
            We do not sell your personal data. We may share data only with trusted service providers who help us operate the platform (e.g., analytics tools, email systems), under strict confidentiality and data protection terms.
          </p>

          {/* 7. International Transfers */}
          <h2 className="text-xl font-bold text-[#9D00FF]">7. International Data Transfers</h2>
          <p>
            Our servers may be located outside your country of residence. By using our services, you consent to the transfer of your data to servers located in other countries, including the United States and European Union.
          </p>

          {/* 8. Data Retention */}
          <h2 className="text-xl font-bold text-[#9D00FF]">8. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary to fulfill the purposes described above or as required by law. You may request deletion at any time.
          </p>

          {/* 9. Your Rights */}
          <h2 className="text-xl font-bold text-[#9D00FF]">9. Your Rights</h2>
          <p>If you are located in the European Union or other regions with data protection laws, you have the following rights:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to correct inaccurate data</li>
            <li>The right to request deletion (“right to be forgotten”)</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
          <p>
            To exercise these rights, contact us at:{' '}
            <a href="mailto:support@queryquant.ai" className="text-[#9D00FF] hover:underline">
              support@queryquant.ai
            </a>
          </p>

          {/* 10. CCPA */}
          <h2 className="text-xl font-bold text-[#9D00FF]">10. California Privacy Rights (CCPA)</h2>
          <p>
            If you are a California resident, you have the right to request information about data collected, request deletion, and opt-out of data selling (we do not sell data).
          </p>

          {/* 11. Security */}
          <h2 className="text-xl font-bold text-[#9D00FF]">11. Security</h2>
          <p>
            We implement reasonable security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no system is completely secure, and we cannot guarantee absolute security.
          </p>

          {/* 12. Third-Party Links */}
          <h2 className="text-xl font-bold text-[#9D00FF]">12. Third-Party Links</h2>
          <p>
            Our site may contain links to external sites. We are not responsible for their privacy practices. Please read their policies separately.
          </p>

          {/* 13. Changes */}
          <h2 className="text-xl font-bold text-[#9D00FF]">13. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy from time to time. The most current version will always be available on our site. Continued use of the site indicates your acceptance of the changes.
          </p>

          {/* 14. Contact Us */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-xl font-bold text-neon-green mb-4">Contact Us</h2>
            <p>If you have any questions, concerns, or data-related requests, please contact:</p>
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

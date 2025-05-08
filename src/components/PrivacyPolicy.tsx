import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-900 mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">1. Introduction</h2>
            <p className="mb-4">
              SIONG'O Microfinance ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information (Name, email address, phone number, etc.)</li>
              <li>Financial information necessary for loan processing</li>
              <li>Employment and income information</li>
              <li>Documentation for identity verification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your loan applications</li>
              <li>Verify your identity and creditworthiness</li>
              <li>Communicate with you about our services</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">4. Information Sharing</h2>
            <p className="mb-4">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Credit bureaus and financial institutions</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="font-medium">
              Email: privacy@siongo.com<br />
              Phone: [Your Contact Number]<br />
              Address: [Your Company Address]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">8. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 
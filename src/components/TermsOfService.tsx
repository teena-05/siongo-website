import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-900 mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using SIONG'O Microfinance's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">2. Services Description</h2>
            <p className="mb-4">
              SIONG'O Microfinance provides microfinance services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Small business loans</li>
              <li>Personal loans</li>
              <li>Financial advisory services</li>
              <li>Savings accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">3. Eligibility</h2>
            <p className="mb-4">To use our services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Have a valid government-issued ID</li>
              <li>Have a stable source of income</li>
              <li>Meet our credit assessment criteria</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">4. Loan Terms</h2>
            <p className="mb-4">
              All loans are subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Approval based on credit assessment</li>
              <li>Interest rates as disclosed in loan agreements</li>
              <li>Repayment schedules as specified in loan documents</li>
              <li>Late payment penalties as outlined in loan terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">5. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Make timely loan payments</li>
              <li>Notify us of any changes to your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              SIONG'O Microfinance shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">9. Contact Information</h2>
            <p className="mb-4">
              For any questions about these Terms of Service, please contact us at:
            </p>
            <p className="font-medium">
              Email: legal@siongo.com<br />
              Phone: [Your Contact Number]<br />
              Address: [Your Company Address]
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 
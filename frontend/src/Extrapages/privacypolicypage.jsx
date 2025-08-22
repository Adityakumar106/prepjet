// src/pages/PrivacyPolicy.jsx
import { Link } from "react-router-dom";
export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-600">Last updated: August 2025</p>

      <p className="mb-6">
        At <strong>JetPrep</strong>, your privacy is important to us. This Privacy
        Policy explains how we collect, use, and safeguard your personal
        information when you use our platform (website, mobile app, and related
        services). By accessing or using JetPrep, you agree to this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Personal Information:</strong> Name, email address, profile details, and account credentials.</li>
        <li><strong>Usage Data:</strong> Pages you visit, actions you take, and device/browser information.</li>
        <li><strong>Learning Data:</strong> Tests, quizzes, resources, and other content you interact with on JetPrep.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To provide and improve our test prep and learning services.</li>
        <li>To personalize your learning experience.</li>
        <li>To send important updates, notifications, and support messages.</li>
        <li>To protect the security and integrity of JetPrep.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-3">3. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share your data only with:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Service Providers:</strong> For hosting, analytics, and communication.</li>
        <li><strong>Partners:</strong> When you choose to access external resources or opportunities.</li>
        <li><strong>Legal Authorities:</strong> If required by law or for security purposes.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-3">4. Data Security</h2>
      <p className="mb-4">
        We use industry-standard security measures to protect your information.
        However, no system is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">5. Your Rights</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Update or delete your account information at any time.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Request a copy of the data we hold about you.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-3">6. Cookies & Tracking</h2>
      <p className="mb-4">
        JetPrep uses cookies and similar technologies to improve your experience,
        analyze platform usage, and show relevant content. You can manage cookies
        via your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">7. Children's Privacy</h2>
      <p className="mb-4">
        JetPrep is not designed for children under 13. We do not knowingly collect
        data from children.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">8. Updates to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Updates will be posted
        here with the revised “Last updated” date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">9. Contact Us</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy, please <Link to="/contact" className="text-indigo-600 underline">
    contact us
  </Link>.  
        
      </p>
    </div>
  );
}

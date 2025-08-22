export default function FAQs() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Click on the Sign Up button on the top right, fill in your details, and verify your email.",
    },
    {
      question: "Are the mock tests free?",
      answer:
        "We offer both free and premium mock tests. Free tests are available after signup.",
    },
    {
      question: "Can I access resources on mobile?",
      answer:
        "Yes, JetPrep is fully responsive and works on all mobile devices and tablets.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach out to us via the Contact Us page or email us at support@jetprep.com.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-blue-600">{faq.question}</h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

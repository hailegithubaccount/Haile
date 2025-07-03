import React from 'react';

export default function ContactForm() {
  React.useEffect(() => {
    console.log("ContactForm loaded");
  }, []);

  return (
    <section id="contact" className="bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>This is a test message.</p>
    </section>
  );
}
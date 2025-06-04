"use client";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        GB Pant Engineering College - Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">General Information</h2>
          <p>G/Floor, Integrated Institute Of Technology, Complex, Dwarka Sector 9, Dwarka, New Delhi, Delhi, 110077</p>
          <p>Phone: +91-12345678</p>
          <p>Email: helpdesk@dseu.ac.in</p>
          <p>Admissions: helpdesk@dseu.ac.in</p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Office Hours</h3>
            <p>Monday to Friday: 9:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=DSEU%20dwarka&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-4">
          {["Facebook", "Instagram", "LinkedIn", "X", "YouTube"].map(
            (social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {social}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with us for any inquiries or support.
          </p>
          {/* Decoy content placeholder */}
          <div className="mt-8 p-8 bg-gray-100 rounded-lg">
            <p className="text-gray-500">Contact form coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

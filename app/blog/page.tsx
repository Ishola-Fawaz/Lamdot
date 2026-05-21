import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest news and articles from Lamdot.
          </p>
          {/* Decoy content placeholder */}
          <div className="mt-8 space-y-4">
            <div className="p-8 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Blog Post 1 - Coming Soon</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Blog Post 2 - Coming Soon</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg">
              <p className="text-gray-500">Blog Post 3 - Coming Soon</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

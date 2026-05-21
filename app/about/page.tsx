import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/hero-bg2.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/90 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.8)]" />
              <span className="text-sm font-medium">About Lamdot</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Built for performance.
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600">
                Styled for everyday.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-white/90 text-lg leading-relaxed">
              We design premium footwear for runners, athletes, and street-style
              lovers—so every step feels comfortable, responsive, and confident.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="text-3xl font-extrabold text-white">
                  Comfort
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Cushioning that feels effortless
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="text-3xl font-extrabold text-white">
                  Performance
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Support for every stride
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="text-3xl font-extrabold text-white">Style</div>
                <div className="mt-1 text-sm text-white/75">
                  Modern design, all day
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our mission
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-base">
                Lamdot exists to make premium footwear accessible without
                compromising on quality. From cushioning to grip, we focus on
                details that matter—so you get performance and comfort in one
                perfect pair.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Premium materials",
                    desc: "Thoughtful construction with durability in mind.",
                  },
                  {
                    title: "Designed for movement",
                    desc: "Support that adapts to your pace and posture.",
                  },
                  {
                    title: "Style that lasts",
                    desc: "A clean look you can wear anywhere—every day.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5"
                  >
                    <div className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <div className="h-56 bg-gradient-to-br from-orange-500 to-orange-600 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_80%_35%,rgba(255,255,255,0.25),transparent_45%)]" />
                  <div className="relative p-6">
                    <div className="text-white/90 text-sm font-medium">
                      Why Lamdot
                    </div>
                    <div className="mt-2 text-white text-2xl font-bold tracking-tight">
                      Confidence in every step
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Whether you’re training, walking, or hanging out—our
                    footwear is built to keep you moving with comfort.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Breathable comfort",
                      "Secure fit",
                      "Cushioned support",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                        </span>
                        <span className="text-sm font-medium text-gray-800">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/shop"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-white font-semibold shadow-sm hover:shadow-md transition-all"
                  >
                    Shop the collection
                  </a>

                  <p className="mt-3 text-xs text-gray-500 text-center">
                    New arrivals added regularly.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

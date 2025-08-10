import PageHeader from "@/components/PageHeader";

export default function StudioPage() {
  return (
    <div>
      <PageHeader title="STUDIO" image="/images/studio.jpg" />

      {/* INTRO */}
      <div className="p-6 text-white max-w-3xl mx-auto flex items-center justify-center flex-col">
        <p className="text-gray-400 text-sm">
          Recording. Mixing & Mastering. Production. Brooklyn-based studio sessions available.
        </p>
      </div>

      {/* STUDIO VIDEO */}
      <div className="flex justify-center mt-8">
        <video
          controls
          className="rounded-md w-full max-w-xl shadow-lg"
          src="/video/studio-promo.mp4"
        />
      </div>

      {/* BOOKING INFO */}
      <div className="text-white font-bold mt-2 px-6 max-w-2xl mx-auto text-center space-y-4">
        <p className="font-mono text-lg pt-4">
          <a
            href="/contact"
            className="underline hover:text-gray-300 transition"
          >
            CLICK HERE TO BOOK
          </a>
        </p>
      </div>

      {/* FAQ */}
      <div className="mt-10 px-6 max-w-2xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-800 p-4 rounded-md text-white">
            <summary className="cursor-pointer font-medium">How do I book a session?</summary>
            <p className="text-gray-300 mt-2">
              Use the contact form on our Contact page. We’ll confirm time, pricing, and prep details.
            </p>
          </details>
          <details className="bg-gray-800 p-4 rounded-md text-white">
            <summary className="cursor-pointer font-medium">What’s the minimum session time?</summary>
            <p className="text-gray-300 mt-2">2 hours. We recommend 3+ hours for full tracking sessions.</p>
          </details>
          <details className="bg-gray-800 p-4 rounded-md text-white">
            <summary className="cursor-pointer font-medium">Do you offer remote mixing or mastering?</summary>
            <p className="text-gray-300 mt-2">Yes! Just send stems, reference tracks and any notes.</p>
          </details>
        </div>
      </div>

      <div className="h-24" /> {/* Spacer */}
    </div>
  );
}

import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="CONTACT" image="/images/contact.jpg" />

      <div className="px-6 py-10 max-w-2xl mx-auto text-white">
        <p className="text-sm text-gray-400 text-center mb-6">
          All fields are required.
        </p>

        <form
          action="mailto:keazemusic@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          {/* Email */}
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-black border border-white px-4 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full bg-black border border-white px-4 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full bg-black border border-white px-4 py-2 text-white rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="border border-orange-500 text-orange-500 px-8 py-2 rounded hover:bg-orange-500 hover:text-black transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

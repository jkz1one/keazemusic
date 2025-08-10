import { FaInstagram, FaSpotify, FaMusic, FaYoutube } from "react-icons/fa";
import ClipFrame from "@/components/ClipFrame";

export default function Splash() {
  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-start text-center px-6 pt-[16px]">
      <h1 className="text-6xl font-serif tracking-widest mb-0">KEAZE</h1>

      <p className="text-sm uppercase text-gray-400 tracking-wider mt-1 mb-1">
        Sound. Systems. Software.
      </p>

      {/* Framed Image */}
      <div className="w-full max-w-[600px] aspect-[1/1] mx-auto">
        <ClipFrame src="/images/splash.jpg" alt="Keaze" />
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 mt-2 text-white text-3xl">
        <a href="https://instagram.com/itskeaze" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-primary transition" />
        </a>
        <a href="https://open.spotify.com/artist/1FHmxIgKnWJwyLPWpNcB4N?si=B9cS6Jn2QjifhuBtIlFtHg" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="hover:text-primary transition" />
        </a>
        <a href="https://music.apple.com/us/artist/keaze/1341358452" target="_blank" rel="noopener noreferrer">
          <FaMusic className="hover:text-primary transition" />
        </a>
        <a href="https://youtube.com/@itsKeaze" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="hover:text-primary transition" />
        </a>
      </div>
    </main>
  );
}

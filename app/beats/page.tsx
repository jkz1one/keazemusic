import PageHeader from "@/components/PageHeader";
import BeatPlayer from '@/components/beatplayer';

export default function BeatsPage() {
  return (
    <div>
      <PageHeader title="BEATS" image="/images/beats.jpg" />
      <div className="p-6 text-white">
        <BeatPlayer />
      </div>
    </div>
  );
}
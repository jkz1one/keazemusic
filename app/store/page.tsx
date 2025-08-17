import PageHeader from "@/components/PageHeader";

export default function StorePage() {
  return (
    <div>
      <PageHeader title="STORE" image="/images/store.jpg" />
      <div className="p-6 text-white">
        <p className="text-gray-400 text-center text-sm">
          Digital tools, sample packs, and exclusive content. Shop launching soon.
        </p>
      </div>
    </div>
  );
}

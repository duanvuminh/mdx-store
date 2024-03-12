import { KHeaderSearch } from "@/components/KHeaderSearch";
import { KUpdatePosts } from "@/components/KUpdatePosts";
import { homeController } from "@/lib/page-controller/home-controller";

export default async function Page() {
  const [dic] = await Promise.all([homeController.getDic()]);
  return (
    <div className="p-2 space-y-4">
      <KHeaderSearch dictionary={dic} />
      <KUpdatePosts/>
    </div>
  );
}

import { KButtonLeadingSearch } from "@/components/ui/KButtonLeadingSearch";
import { KHeaderWrapSearch } from "@/components/ui/KHeaderWrapSearch";
import { KInputSearch } from "@/components/ui/KInputSearch";
import { getDictionary } from "@/lib/get-dictionary";

export async function KHeaderSearch({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <KHeaderWrapSearch>
      <KButtonLeadingSearch dictionary={dictionary} />
      <KInputSearch dictionary={dictionary} />
    </KHeaderWrapSearch>
  );
}

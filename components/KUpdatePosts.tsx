import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdxContent } from "@/lib/models/model";
import { fileService } from "@/lib/services/file-service";
import { postService } from "@/lib/services/post-service";

export function KUpdatePosts() {
  async function onSubmit(formData: FormData) {
    "use server";
    const postIds = formData.get("ids")?.toString().split("@") ?? [];
    for (let index = 0; index < postIds.length; index++) {
      const id = postIds[index];
      //lay file content
      const mdxContent: MdxContent = {
        en: fileService.getContent("en", id),
        vi: fileService.getContent("vi", id),
        ja: fileService.getContent("ja", id),
      };
      postService.updatePost({ id, mdxContent });
      //luu vao angolia
    }
  }
  return (
    <form action={onSubmit}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input placeholder="post id with comma" name="ids" />
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}

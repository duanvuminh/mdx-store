import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TYPES } from "@/lib/const";
import { myContainer } from "@/lib/inversify.config";
import { Content, Seo } from "@/lib/models/model";
import { fileService } from "@/lib/services/file-service";
import { IMdxService } from "@/lib/services/interface";
import { postService } from "@/lib/services/post-service";

export function KUpdatePosts() {
  async function onSubmit(formData: FormData) {
    "use server";
    const postIds = formData.get("ids")?.toString().split("@") ?? [];
    const mdxService = myContainer.get<IMdxService>(TYPES.IMdxService);
    for (let index = 0; index < postIds.length; index++) {
      const id = postIds[index];
      //lay file content
      const enCt = fileService.getContent("en", id);
      const viCt = fileService.getContent("vi", id);
      const jaCt = fileService.getContent("ja", id);
      const metadata = {
        en: await mdxService.readMdx({ content: enCt }),
        vi: await mdxService.readMdx({ content: viCt }),
        ja: await mdxService.readMdx({ content: jaCt }),
      };
      const onlyUnique = (value: string, index: number, array: string[]) => {
        return array.indexOf(value) === index && value.trim() != "";
      };
      const tags = [
        ...(metadata.en.frontmatter.tags?.split(",") ?? []),
        ...(metadata.ja.frontmatter.tags?.split(",") ?? []),
        ...(metadata.vi.frontmatter.tags?.split(",") ?? []),
      ].filter(onlyUnique);

      const postType = metadata.en.frontmatter.postType;
      const level = metadata.en.frontmatter.level;

      const mediaUrl: Content = {
        en: metadata.en.frontmatter.mediaUrl,
        vi: metadata.vi.frontmatter.mediaUrl,
        ja: metadata.ja.frontmatter.mediaUrl,
      };

      const updateDateTime: Content = {
        en: metadata.en.frontmatter.updateDateTime,
        vi: metadata.vi.frontmatter.updateDateTime,
        ja: metadata.ja.frontmatter.updateDateTime,
      };

      const hanTu: Content = {
        en: metadata.en.frontmatter?.hanTu,
        vi: metadata.vi.frontmatter?.hanTu,
        ja: metadata.ja.frontmatter?.hanTu,
      };

      const mdxContent: Content = {
        en: enCt,
        vi: viCt,
        ja: jaCt,
      };

      const title = {
        en: metadata.en.frontmatter.title,
        ja: metadata.ja.frontmatter.title,
        vi: metadata.vi.frontmatter.title,
      };
      const description = {
        en: metadata.en.frontmatter.description,
        ja: metadata.ja.frontmatter.description,
        vi: metadata.vi.frontmatter.description,
      }
      const keywords = {
        en: metadata.en.frontmatter.keywords,
        ja: metadata.ja.frontmatter.keywords,
        vi: metadata.vi.frontmatter.keywords,
      }
      const seo: Seo = {
        title: title,
        description: description,
        keywords: keywords,
      };
      postService.updatePost({
        id,
        mdxContent,
        updateDateTime,
        mediaUrl,
        tags,
        hanTu,
        postType,
        level,
        seo,
      });
    }
  }
  async function onSubmitSort(formData: FormData) {
    "use server";
    const [id, sort] = formData.get("ids")?.toString().split("@") ?? [];
    postService.updatePostSort({ id, sort: Number(sort) });
  }
  async function onSubmitFormat(formData: FormData) {
    "use server";
    const postIds = formData.get("ids")?.toString().split("@") ?? [];
    for (let index = 0; index < postIds.length; index++) {
      const id = postIds[index];
      postService.addPost(id);
    }
  }
  return (
    <ul className="space-y-4">
      <li>
        <form action={onSubmit}>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input placeholder="post id with @" name="ids" />
            <Button type="submit">Update</Button>
          </div>
        </form>
      </li>
      <li>
        <form action={onSubmitSort}>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input placeholder="post id with name@sort" name="ids" />
            <Button type="submit">Update sort</Button>
          </div>
        </form>
      </li>
      <li>
        <form action={onSubmitFormat}>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input placeholder="post id with @" name="ids" />
            <Button type="submit">Format object</Button>
          </div>
        </form>
      </li>
    </ul>
  );
}

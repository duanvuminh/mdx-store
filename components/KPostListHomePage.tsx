import { PostItemHomeViewModel } from "@/lib/models/view-model";
import Image from "next/image";
import Link from "next/link";

export default function KPostListHomePage({
  posts,
}: {
  posts: PostItemHomeViewModel[];
}) {
  return (
    <ul role="list" className="flex grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {posts.map((post) => (
        <li key={post.id} className="mb-8 cursor-pointer">
          <Link className="flex flex-col" href={post.detailLink}>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <Image
                  className="rounded-2xl hover:rounded-none"
                  priority
                  src={post.mediaUrl}
                  width={720}
                  height={400}
                  alt={`Picture of post ${post.id}`}
                  objectFit=""
                />
              </div>
              <div className="flex flex-col">
                <div className="text-md flex-grow">{post.title}</div>
                <div className="text-muted-foreground">
                  {post.updateDateTime}
                </div>
              </div>
            </div>
          </Link>
          <Link className="text-muted-foreground" href={post.relatedLink}>
            {post.relatedLinkTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
}

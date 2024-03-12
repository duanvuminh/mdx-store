import { PostViewModel } from "@/lib/models/view-model";
import { Fragment } from "react";

export function KContent({ post }: { post: PostViewModel }) {
  return (
    <Fragment>
      <header>
        <h1>{post.id}</h1>
      </header>
      <main>{post.content}</main>
    </Fragment>
  );
}

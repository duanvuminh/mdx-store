import { csDays } from "@/lib/const";

export const postsServiceMiddle = {
  generatePostsUrl: (level: string, postType: string) => {
    const date = new Date();
    const today = date.getDate();
    const day = today != csDays ? today % csDays : today;
    const dateNow = ("0" + day).slice(-2);
    return `/post-list/${postType}/${level}/day-${dateNow}`;
  },

  generatePostUrl: (postType: string, id: string) => {
    return `/post/${postType}/${id}`;
  },
};

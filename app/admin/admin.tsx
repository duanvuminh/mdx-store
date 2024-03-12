"use client";

import { Button } from "@/components/ui/button";

const algoliasearch = require("algoliasearch");
const client = algoliasearch("EI7K5E2KYY", "21e7666b015662344c250892e6caefe2");
const indexAngolia = {
  product: client.initIndex("product_Post"),
};
async function _postData(url = "", data: any = {}) {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${data.Authorization ?? ""}`,
  };
  delete data.Authorization;
  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: header,
    body: JSON.stringify(data),
  });
  return response.json();
}

const getYomi = (query: string): Promise<string> => {
  const url: string = "https://mazii.net/api/search";
  return _postData(url, {
    query: query,
    dict: "javi",
    type: "word",
    limit: 1,
    page: 1,
  }).then((data) => {
    return `${data?.data?.[0]?.phonetic ?? ""}`;
  });
};

const getKanji = (query: string) => {
    const url: string = "https://mazii.net/api/search";
    return _postData(url, {
      query: query,
      dict: "javi",
      type: "kanji",
      limit: 1,
      page: 1,
    }).then((data) => {
      return {
        hanTu:`${data?.results?.[0]?.mean ?? ""}`,
        pronouns: `KUN: ${data?.results?.[0]?.kun ?? ""} ON: ${data?.results?.[0]?.on ?? ""}`
      };
    });
  };

export async function updateProduct() {
  let hits: any = [];
  await indexAngolia.product.browseObjects({
    batch: (batch: any) => {
      hits = hits.concat(batch);
    },
  });
  for (var i = 1000; i < hits.length; i++) {
    // await timer(10);
    // console.log(hits[i-1]);
    // break;
    // var kanji = await getKanji(hits[i].objectID);
    // const post: PostModel = {
    //   objectID: hits[i].objectID,
    //   content: "",
    //   level: hits[i].level,
    //   updateDateTime: Date().toString(),
    //   postType: "kanji",
    //   tags: "",
    //   contentType: "mdx",
    //   hanTu: {
    //     vi: kanji.hanTu
    //   },
    //   pronouns: kanji.pronouns,
    // };
    // indexAngolia.product.saveObject(post)
  }
}
export async function updateMean() {
    let hits: any = [];
    await indexAngolia.product.browseObjects({
      batch: (batch: any) => {
        hits = hits.concat(batch);
      },
    });
    let hits_copy = hits.map((item:any) => {
      if(item.objectID.length==1){
        item.postType = "kanji"
      }
      return item;
    })
    indexAngolia.product.saveObjects(hits_copy)
  }
const onClick = () => {
    updateMean();
};
export function Admin() {
  return <Button onClick={onClick}>ok</Button>;
}

import React from "react";
import { reqUrl } from "@/app/config";

type PageProps = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const req = await fetch(
    `${reqUrl}posts?_fields=id,slug,title,content&slug=${
      params.slug
    }&t=${new Date().getTime()}`
  );
  const post = await req.json();

  return (
    <div>
      <h1>{post[0].title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}></div>
    </div>
  );
};

export default Page;

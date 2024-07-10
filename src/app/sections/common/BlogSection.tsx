import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useWindowSize from "@/hooks/useWindowSize";

const extractImageUrl = (content: string) => {
  const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgTagMatch ? imgTagMatch[1] : null;
};

const formatDate = (dateString: string) => {
  return dateString.split("T")[0];
};

const removeImageTags = (content: string) => {
  return content.replace(/<img[^>]*>/g, "");
};

const stripHtmlTags = (content: string) => {
  const div = document.createElement("div");
  div.innerHTML = content;
  return div.textContent || div.innerText || "";
};

type BlogPost = {
  id: number;
  slug: string;
  content: { rendered: string };
  date: string;
  title: { rendered: string };
};

type BlogSectionProps = {
  blogPosts: BlogPost[];
};

export const BlogSection: React.FC<BlogSectionProps> = ({ blogPosts }) => {
  const windowSize = useWindowSize();
  const isVertical = windowSize.width && windowSize.width < 640;
  const displayedPosts = isVertical ? blogPosts.slice(0, 3) : blogPosts;

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue sm:text-4xl">
            Mes articles récents
          </h2>
        </div>

        <Carousel
          className="mt-20 relative"
          orientation={isVertical ? "vertical" : "horizontal"}
        >
          <CarouselContent>
            {displayedPosts.map((post) => {
              const imageUrl = extractImageUrl(post.content.rendered);
              const textContent = removeImageTags(post.content.rendered);

              return (
                <CarouselItem
                  key={post.id}
                  className="flex-shrink-0 sm:basis-1/3 px-6"
                >
                  <a
                    className="flex flex-col items-start justify-between"
                    href={post.slug}
                  >
                    <div className="relative w-full">
                      {imageUrl && (
                        <div className="relative w-full">
                          <div className="container relative aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                            <Image
                              src={imageUrl}
                              alt=""
                              fill
                              className="rounded-2xl object-cover"
                            />
                          </div>
                          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      )}
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <a className="text-gray-500">{formatDate(post.date)}</a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a>
                            <span
                              className="inset-0"
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
                              }}
                            />
                          </a>
                        </h3>
                        {!isVertical && (
                          <p
                            className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600"
                            dangerouslySetInnerHTML={{
                              __html: textContent,
                            }}
                          ></p>
                        )}
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

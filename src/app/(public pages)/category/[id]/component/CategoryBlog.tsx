import { Button } from '@/components/ui/button';
import BlogCardWrapper from '@/sharedComponets/wrapper/BlogCardWrapper';
import { IBlog } from '@/types/data';
import Link from 'next/link';
import React from 'react';

export default function CategoryBlog({ blogs }: { blogs: IBlog[] }) {
  if (!blogs.length)
    return (
      <div className='flex min-h-[200px] w-full items-center justify-center'>
        <p className='text-center'>No blog found</p>
      </div>
    );
  return (
    <div className='section-speacing grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] lg:gap-6 xl:gap-7 2xl:gap-8'>
      {blogs.map((blog) => (
        <BlogCardWrapper
          key={blog._id}
          createdAt={new Date(blog.createdAt).toString()}
          description={blog.description}
          slug={blog.slug}
          thumnail={blog.thumnail.url}
          title={blog.title}
          excerpt={blog.excerp}
        >
          <Link href={`/blog/${blog.slug}`}>
            <Button className='!py-2.5 !text-sm'>Read More</Button>
          </Link>
        </BlogCardWrapper>
      ))}
    </div>
  );
}

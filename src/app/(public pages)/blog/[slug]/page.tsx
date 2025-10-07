// app/blog/[slug]/page.tsx
import React from 'react';
import NoBlogFoundMsg from './components/NoBlogFoundMsg'; // Ensure this path is correct
import { formatDateToShortString } from '@/utils/date';
import { IBlog } from '@/types/data';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/sharedComponets/wrapper/Container';
import { Button } from '@/components/ui/button';
import HtmlContentParser from '@/sharedComponets/editor/HtmlContentParser';

// const REVALIDATE_SECONDS = 60 * 60; // 3600 seconds = 1 hour
const REVALIDATE_SECONDS = 10 * 60; // 600 seconds = 10 min

const getBlogData = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.DEMO_PUBLIC_BASE_URL}/api/blogs/${slug}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error(`Failed to fetch blog data for slug: ${slug}, Status: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
  }
  return null;
};

const getAllBlogSlugs = async () => {
  try {
    const res = await fetch(`${process.env.DEMO_PUBLIC_BASE_URL}/api/blog-slugs`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch all blog slugs for generateStaticParams');
      return [];
    }
    const { blogs } = await res.json();
    return blogs.map((blog: { slug: string }) => ({ slug: blog.slug }));
  } catch (error) {
    console.error('Error fetching all blog slugs:', error);
    return [];
  }
};

// generateStaticParams tells Next.js which slugs to pre-render at build time
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs;
}

// generate metadata for each blog post dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getBlogData(slug);

  if (!data?.post) {
    return {
      title: 'Blog Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const post = data.post as IBlog;
  return {
    title: `${post.title}`,
    description: post.description,
    keywords: [post?.category?.name || 'Article'],
    authors: [{ name: 'Webtricker Team' }],
    openGraph: {
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`,
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.thumnail.url,
          width: post.thumnail?.width || 1200,
          height: post.thumnail?.height || 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@webtricker',
      title: post.title,
      description: post.description,
      images: [post.thumnail.url],
    },
  };
}

// Main component for the single blog page
export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const data = await getBlogData(slug);
  if (!data?.post) {
    return <NoBlogFoundMsg msg='No blog post found' />;
  }

  const nextPost = data.nextPost;
  const prevPost = data.prevPost;
  const post = data.post as IBlog;
  return (
    <main className='section-speacing post-details-container z-0 mt-7 w-full'>
      <Container className='section-speacing'>
        <p className='text-center'>Published {formatDateToShortString(post.createdAt)}</p>
        <h1 className='wt_fs-5xl my-3 text-center'>{post.title}</h1>
        <Image
          src={post.thumnail.url}
          width={post.thumnail.width || 912}
          height={post.thumnail.height || 400}
          alt={post.title}
          className='my-10 h-auto w-full'
          priority
        />
        <p>{post.description}</p>
      </Container>
      <section className='wt_parser_content w-full'>
        <Container>
          <HtmlContentParser htmlContent={post?.content} />
        </Container>
        <Container className='mt-10'>
          <div className='flex w-full'>
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className='relative w-full'>
                <Image
                  className='h-[150px] !rounded-e-none object-cover md:h-[250px] lg:h-[300px]'
                  src={prevPost?.thumnail?.url || ''} // Fallback for image src
                  width={prevPost?.thumnail?.width || 456}
                  height={400}
                  title='Prev post'
                  alt={prevPost.title}
                />
                <div className='absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] rounded-full bg-white/10 text-lg font-semibold text-white backdrop-blur-md md:block'>
                  <Button className='!px-5 !py-2.5'>Previous Blog</Button>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className='relative w-full'>
                <Image
                  className='h-[150px] !rounded-s-none object-cover md:h-[250px] lg:h-[300px]'
                  src={nextPost?.thumnail?.url || ''} // Fallback for image src
                  width={nextPost?.thumnail?.width || 456}
                  height={400}
                  title='Next post'
                  alt={nextPost.title}
                />
                <div className='absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-50%] rounded-full bg-white/10 text-lg font-semibold text-white backdrop-blur-md md:block'>
                  <Button className='!px-5 !py-2.5'>Next Blog</Button>
                </div>
              </Link>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}

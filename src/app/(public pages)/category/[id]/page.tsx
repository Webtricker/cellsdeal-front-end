import React from 'react';
import CategoryBlogsContainer from './component/CategoryBlogsContainer';
import Container from '@/sharedComponets/wrapper/Container';

// get category related posts data
async function getCategoryPosts(id: string) {
  return fetch(`${process.env.DEMO_PUBLIC_BASE_URL}/api/categories/${id}`).then((res) =>
    res.json()
  );
}

// Define the type for the props explicitly
export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const data = await getCategoryPosts(id);

  if (!data.success)
    return (
      <Container>
        <h1 className='text-center'>Invalid category</h1>
      </Container>
    );
  return (
    <main className='z-0 w-full'>
      <section
        className={`relative z-0 mb-8 flex min-h-screen w-full md:mb-10 lg:mb-14 xl:mb-16 2xl:mb-18`}
      >
        <Container className='flex items-center justify-center'>
          <div className='w-full max-w-[1000px] rounded-[10px] bg-slate-800/30 p-4 text-center'>
            <h1 className='wt_text-shadow wt_fs-7xl heading !leading-[100%] font-medium !text-white'>
              {data.category?.name}
            </h1>
            <p className='wt_text-shadow wt_fs-xl bold mt-5 !text-white'>
              Explore our blog posts about {data.category?.name}.
            </p>
          </div>
        </Container>
        <video
          autoPlay
          loop
          muted
          className='absolute top-0 left-0 -z-10 h-full w-full object-cover'
          src='/videos/blogs/blog.mp4'
        >
          <source src='/videos/blogs/blog.mp4' type='video/mp4' />
        </video>
      </section>
      <CategoryBlogsContainer categoryId={data.category?._id} />
    </main>
  );
}

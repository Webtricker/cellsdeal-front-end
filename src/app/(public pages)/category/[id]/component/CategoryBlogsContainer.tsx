'use client';
import { useLazyCountPostsQuery, useLazyGetPostsQuery } from '@/redux/features/post/postApi';
import { IBlog } from '@/types/data';
import React, { useEffect, useState } from 'react';
import CategoryBlog from './CategoryBlog';
import Container from '@/sharedComponets/wrapper/Container';
import Pagination from '@/sharedComponets/pagination/Pagination';
import LoadingSpinner from '@/sharedComponets/loading/LoadingSpinner';

export default function CategoryBlogsContainer({ categoryId }: { categoryId: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [localLoading, setLocalLoading] = useState(true);

  const [blogs, setblogs] = useState<IBlog[]>([]);
  const [countPosts, { isLoading: paginationLoading }] = useLazyCountPostsQuery();
  const [getPosts] = useLazyGetPostsQuery();

  useEffect(() => {
    const loadData = async () => {
      setLocalLoading(true); // <-- Immediately show spinner
      try {
        const result = await getPosts({
          postType: 'blog',
          categoryId,
          page: currentPage,
          limit: 8,
          // limit: 20,
        }).unwrap();
        if (result?.success && result?.posts?.length > 0) {
          setblogs(result.posts);
        } else {
          setblogs([]); // clear old data if no new data
        }
      } catch (error) {
        console.log(error);
        setblogs([]);
      } finally {
        setLocalLoading(false); // <-- Hide spinner
      }
    };

    loadData();
  }, [categoryId, getPosts, currentPage]);

  // count the posts and set pagination total pages.
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await countPosts({
          postType: 'blog',
          categoryId,
        }).unwrap();
        // if (result?.success && result?.counts > 20 && result.counts / 20 >= 2) {
        // const pages = Math.floor((result.counts / 20) as number);
        if (result?.success && result?.counts > 8 && result.counts / 8 >= 1) {
          const pages = Math.ceil((result.counts / 8) as number);
          console.log(pages, ' pages counts');
          setTotalPages(pages);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // initial call.
    loadData();
  }, [countPosts, categoryId]);

  return (
    <Container>
      {localLoading ? (
        <div className='section-speacing w-full'>
          <div className='flex min-h-[500px] w-full items-center justify-center'>
            <LoadingSpinner />
          </div>
        </div>
      ) : (
        <CategoryBlog blogs={blogs} />
      )}

      {paginationLoading ? (
        <div className='flex h-20 w-full items-center justify-center'>
          <LoadingSpinner />
        </div>
      ) : (
        totalPages > 1 && (
          <div className='section-speacing w-full'>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              key='CATEGORY_BLOG_PAGINATION'
            />
          </div>
        )
      )}
    </Container>
  );
}

import Link from 'next/link';
import React from 'react';

export default function PublicNavlinks() {
  return (
    <div className='flex gap-5 lg:gap-6'>
      <Link className='cd_fs-xs' href='/'>
        Home
      </Link>
      <Link className='cd_fs-xs' href='/shop'>
        Shop
      </Link>
      <Link className='cd_fs-xs' href='/blog'>
        Blogs
      </Link>
      <Link className='cd_fs-xs' href='/vendor'>
        Vendor
      </Link>
      <Link className='cd_fs-xs' href='/contact'>
        Contact
      </Link>
    </div>
  );
}

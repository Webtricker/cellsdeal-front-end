export const getBlogsPageData = async () => {
  try {
    const res = await fetch(`${process.env.DEMO_PUBLIC_BASE_URL}/api/blogs-page`);
    if (!res.ok) {
      console.error('Failed to fetch blogs page data');
      return {};
    }
    const result = await res.json();
    return result?.data || {};
  } catch (error) {
    console.error('Error fetching blogs page data:', error);
    return {};
  }
};

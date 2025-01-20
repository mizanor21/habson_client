// hooks/useWorkData.js
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useItemsData = () => {
  const { data, error } = useSWR(
    "https://living-brands-admin.vercel.app/api/works",
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useItemDetailsData = ({ params }) => {
  const { data, error } = useSWR(
    params?.id
      ? `https://living-brands-admin.vercel.app/api/works/${params.id}`
      : null,
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useJobsData = () => {
  const { data, error } = useSWR(
    "https://living-brands-admin.vercel.app/api/jobs",
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useBlogsData = () => {
  const { data, error } = useSWR(
    "https://living-brands-admin.vercel.app/api/blogs",
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useBlogDetailsData = ({ params }) => {
  const { data, error } = useSWR(
    params?.id
      ? `https://living-brands-admin.vercel.app/api/blogs/${params.id}`
      : null,
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

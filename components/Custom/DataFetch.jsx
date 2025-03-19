// hooks/useWorkData.js
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useItemsData = () => {
  const { data, error } = useSWR(
    "https://admin.habson.org/api/works",
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useItemDetailsData = ({ params }) => {
  const { data, error } = useSWR(
    params?.id
      ? `https://admin.habson.org/api/works/${params.id}`
      : null,
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useJobHeroData = () => {
  const { data, error } = useSWR(
    "https://admin.habson.org/api/job-hero",
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useJobsData = () => {
  const { data, error } = useSWR(
    "https://admin.habson.org/api/jobs",
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useBlogsData = () => {
  const { data, error } = useSWR(
    "https://admin.habson.org/api/blogs",
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

export const useBlogDetailsData = ({ params }) => {
  const { data, error } = useSWR(
    params?.id
      ? `https://admin.habson.org/api/blogs/${params.id}`
      : null,
    fetcher
  );
  return { data, error, isLoading: !data && !error };
};

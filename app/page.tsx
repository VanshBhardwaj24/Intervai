import { redirect } from 'next/navigation';

const Page = () => {
  redirect('/root'); // Automatically redirects to /root
  return null; // This prevents any rendering before the redirect happens
};

export default Page;

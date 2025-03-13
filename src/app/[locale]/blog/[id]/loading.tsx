import dynamic from 'next/dynamic';

const LoaderComponent = dynamic(() => import('../../../../components/loader/loader.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

const Loading = () => {
  return <LoaderComponent />;
};
export default Loading;

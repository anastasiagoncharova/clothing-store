import dynamic from 'next/dynamic';
import { stripePromise } from './../utils/stripe/stripe.utils';
const Directory = dynamic(
  () => {
    return import('../components/directory/directory');
  },
  { ssr: false }
);

const Home = () => {
  return <Directory />;
};

export default Home;

import Head from 'next/head';

import Navbar from '../src/components/navbar/navbar';
import Banner from '../src/components/home/banner/banner';
import Amazon from '../src/components/home/amazon/amazon';
import Testimonial from '../src/components/home/testimonial/testimonial';
import ScheduleMeeting from '../src/components/home/scheduleMeeting/scheduleMeeting';
import Footer from '../src/components/footer/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Virtual Experts | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Navbar />
        <Banner />
        <Amazon />
        <Testimonial />
        <ScheduleMeeting />
        <Footer />
      </main>
    </>
  );
}

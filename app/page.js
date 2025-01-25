import Banner from "./(components)/Banner";
import StatsSection from './(components)/StatsSection'
import Monitors from './pages/monitors/page'
import Course from './pages/course/page'
import About from './pages/about/page'

export default function Home() {
  return (
    <>
      <Banner />
      <StatsSection />
      <Monitors />
      <Course />
      <About />
    </>
  );

}

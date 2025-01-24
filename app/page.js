import Banner from "./(components)/Banner";
import StatsSection from './(components)/StatsSection'
import Monitors from './pages/monitors/page'

export default function Home() {
  return (
    <>
      <Banner />
      <StatsSection />
      <Monitors />
    </>
  );

}

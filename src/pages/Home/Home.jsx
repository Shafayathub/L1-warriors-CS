import Header from "../Shared/Header";
import Banner from "./components/Banner";
import ServiceCard from "./components/serviceCard";

export default function Home() {
  return (
    <div className="p-10">
      <Header />
      <Banner />
      <ServiceCard />
    </div>
  );
}

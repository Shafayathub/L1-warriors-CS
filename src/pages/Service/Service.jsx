import Card from "../../components/Card";
import useServices from "../../hooks/useServices";

export default function Service() {
  const [services] = useServices();
  return (
    <main>
      <h1 className="text-3xl font-bold text-center bg-slate-800 text-yellow-400 p-3">
        Services
      </h1>
      <div className="p-10 mt-10 grid grid-cols-4 gap-5">
        {services.map((service) => (
          <Card
            key={service?.id}
            name={service?.name}
            price={service?.price}
            img={service.img}
          ></Card>
        ))}
      </div>
    </main>
  );
}

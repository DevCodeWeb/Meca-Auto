import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/molecules/Card";
import { ServicesData } from "@/data/Services";
import phoneEnabledSharp from "@iconify/icons-material-symbols/phone-enabled-sharp";

export const Services = () => {
  return (
    <section>
      <h1 className="col-span-12 font-extrabold text-darkGrey text-[32px] mt-[48px]">
        Nos services&nbsp;
        <span className="italic">simples, rapides, efficaces !</span>
      </h1>
      <div className="col-span-12 overflow-hidden rounded-2xl responsive">
        {ServicesData.map((service, i) => {
          return (
            <Card
              img={service.img}
              title={service.title}
              key={i}
              icon={service.icon}
            />
          );
        })}
        <div className="col-span-6 md:col-span-12 sm:col-span-12 mb-[48px] col-start-4 hover:shadow-xl duration-150 bg-white rounded-2xl text-darkGrey p-[24px] flex flex-col gap-[10px]">
          <div className="flex justify-between sm:flex-col sm:text-center sm:items-center">
            <div className="flex flex-col">
              <h4>Besoin de plus d'informations ?</h4>
              <h3 className="font-bold text-[24px]">Contactez-nous</h3>
            </div>
            <Button
              transparent
              label="07 69 36 83 28"
              icon={phoneEnabledSharp}
              IconClassname="rotate-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

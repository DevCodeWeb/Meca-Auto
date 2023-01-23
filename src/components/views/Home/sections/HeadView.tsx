// Next Tools
import Image from "next/image";

// Motion
import { motion } from "framer-motion";

// Eva Icons
import baselineDirectionsCarFilled from "@iconify/icons-ic/baseline-directions-car-filled";
import toolIcon from "@iconify/icons-tabler/tool";
import navigationFill from "@iconify/icons-mingcute/navigation-fill";
import phoneEnabledSharp from "@iconify/icons-material-symbols/phone-enabled-sharp";
import { Button } from "@/components/atoms/Button";

export const HeadView = () => {
  const services = [
    {
      title: "Voitures disponibles",
      icon: baselineDirectionsCarFilled,
    },
    {
      title: "Services proposés",
      icon: toolIcon,
    },
    {
      title: "Rebais 77510",
      icon: navigationFill,
    },
    {
      title: "07 69 36 83 28",
      icon: phoneEnabledSharp,
      classname: "rotate-90",
    },
  ];

  return (
    <section className="bg-mechanic py-[200px]">
      <div className="flex flex-col pt-[12px] shadow-xl items-center justify-center col-span-12 backdrop-blur-sm bg-transLightGrey rounded-2xl">
        <div className="flex items-center">
          Certifié partenaire &nbsp;
          <img
            src="/assets/avatacar.svg"
            alt="avatacer logo"
            className="h-[28px]"
          />
        </div>
        <div className="flex items-center mt-[12px] justify-center col-span-12 bg-green rounded-2xl w-[110%] mb-[32px] py-[32px] shadow-lg flex-col">
          <h1 className="text-[60px] font-extrabold">GARAGE MECA AUTO</h1>
          <h2 className="text-[24px] font-bold">
            REPARATION, ENTRETIEN, CARROSERIE
          </h2>
        </div>
        <p className="text-[20px]">
          Meca Auto spécialiste pour la réparation et l’entretien des voitures
          et utilitaires toutes marques
        </p>
        <div className="flex gap-[24px] mb-[48px] mt-[24px]">
          {services.map((service, i) => {
            return (
              <Button
                label={service.title}
                key={i}
                icon={service.icon}
                IconClassname={service?.classname}
                transparent
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

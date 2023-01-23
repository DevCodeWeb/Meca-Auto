// Next Tools
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-[200px] bg-green">
      <div className="py-[0px] pt-[30px] bg-green">
        <div className="flex justify-between full-col">
          <h1 className="col-span-2 text-[32px] font-[800]">Meca Auto</h1>{" "}
          <div className="flex flex-col items-end text-white">
            <a href="#cars">
              <div className="flex items-center gap-[10px] hover:underline duration-200 cursor-pointer">
                <h1 className="font-bold text-[18px]">Voitures disponibles</h1>
              </div>
            </a>
            <a href="#services">
              <div className="flex items-center gap-[10px]  hover:underline duration-200 cursor-pointer">
                <h1 className="font-bold text-[18px]">Services proposés</h1>
              </div>
            </a>
          </div>
        </div>
        <p className="col-span-4 col-start-1 sm:col-span-2 xs:col-span-2 mb-[32px]">
          Spécialiste pour la réparation et l’entretien des voitures et
          utilitaires toutes marques
        </p>

        <h5 className="full-col text-[12px] mb-[5px]">
          © copyright &nbsp; <b>Meca Auto </b> &nbsp;2022 - Développé par &nbsp;
          <Link href="https://www.instagram.com/dev.code_/">
            <b className="cursor-pointer">@DevCode </b>
          </Link>{" "}
          &nbsp;
        </h5>
      </div>
    </footer>
  );
};

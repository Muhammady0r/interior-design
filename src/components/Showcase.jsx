import { Button } from "./ui/button";
import { getImages } from "@/App";

const Showcase = () => {
  const img = getImages(true);

  return (
    <div className="flex flex-col items-center justify-center container py-20 gap-8 max-md:py-10 max-md:gap-6">
      <h1 className="playd-700 text-6xl text-center w-[95%] max-md:text-4xl">
        Refresh your Room and Make Awesome Interior Design With Us!
      </h1>
      <p className="poppins-500 text-secondary text-xl text-center w-3/4 max-md:text-base">
        We are Interior Design Team Based in Wakanda, 58th street East Waka. We
        provide Interior Design services since 1899 and have many client from
        various country.
      </p>
      <Button className={"scale-125"}>Get Started</Button>
      <div className="w-full max-h-[645px] rounded overflow-hidden relative max-md:h-[60vh]">
        <img src={img} alt="" className="w-full h-full blur-2xl object-fill" />
        <div className="absolute items-center justify-center top-2 -left-2 bg-muted rounded py-10 px-0 flex gap-4 w-[440px] scale-90 max-md:gap-2 max-md:py-6 max-md:w-[350px] max-[415px]:w-[200px] max-[415px]:left-0 max-[415px]:top-0 max-[415px]:flex-col">
          <h1 className="text-primary poppins-700 text-4xl scale-[1.4] -translate-x-6 max-md:scale-[1.2] max-[415px]:translate-x-0">
            52+
          </h1>
          <p className="poppins-500 text-xl break-words w-1/2 scale-[1.1] translate-x-4 max-md:scale-[1] max-[415px]:w-full max-[415px]:translate-x-0 text-center p-1">
            Satisfied Clients From Various Country.
          </p>
        </div>
        <div className="absolute items-center justify-center bottom-2 -right-2 bg-muted rounded py-10 px-0 flex gap-4 w-[440px] scale-90 max-md:gap-2 max-md:py-6 max-md:w-[350px] max-[415px]:w-[200px] max-[415px]:right-0 max-[415px]:bottom-0 max-[415px]:flex-col">
          <h1 className="text-primary poppins-700 text-4xl scale-[1.4] -translate-x-6 max-md:scale-[1.2] max-[415px]:translate-x-0">
            15+
          </h1>
          <p className="poppins-500 text-xl break-words w-1/2 scale-[1.1] translate-x-4 max-md:scale-[1] max-[415px]:w-full max-[415px]:translate-x-0 text-center p-1">
            Years of Experience in Interior Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

import { Button } from "./ui/button";
import { MdKeyboardArrowDown, MdOutlineFileDownload } from "react-icons/md";
import { RiBriefcase4Fill,RiTodoFill ,RiTeamFill  } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              web developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Baher Abdo</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, aand what I engage in professionally
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <IoIosSend />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <MdOutlineFileDownload />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              iconStyles={
                "text-foreground text-[22px] hover:text-primary transition-all"
              }
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex w-[500px] relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText={"Years Of Experiance"}
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCounterText="K"
              badgeText={"Finished Projects"}
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill  />}
              endCountNum={9}
              endCounterText="K"
              badgeText={"Happy Client"}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyle="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/developer.png"
              />
            </div>
          </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <MdKeyboardArrowDown className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

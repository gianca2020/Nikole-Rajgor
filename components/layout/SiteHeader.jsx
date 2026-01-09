import Navbar from "../pages/Navbar.jsx";
import nikolePhoto from "../../assets/nikole2.png";

const SiteHeader = () => {
  return (
    <section className="w-full bg-[#F6F1E8]">
      {/* Title + Nav */}
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-[1100px] pt-14">
          <div className="flex flex-col items-center">
            <h1
              className="text-[64px] md:text-[90px] lg:text-[96px] text-[#1F1F1F] font-bold text-center tracking-[0.09em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              NIKOLE RAJGOR
            </h1>

            <h2 className="text-[16px] md:text-[18px] text-[#1F1F1F] font-normal text-center tracking-[0.3em]">
              JOURNALIST
            </h2>

            <div className="my-10">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className="w-full bg-[#F6F1E8] pt-10 pb-12">
        <div className="mx-auto w-full max-w-7xl px-6 flex flex-col">
          <div className="h-px bg-[#1F1F1F]"></div>
          <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:gap-16 lg:gap-20">
            <img
              src={nikolePhoto}
              alt="Cover Photo"
              className="w-full max-w-[520px] rounded-sm object-cover md:w-[45%] aspect-[520/574]"
            />

            <div className="w-full md:w-[40%] md:ml-auto">
              <div className="flex flex-col gap-4 text-[16px] leading-[26px] font-medium text-[#1F1F1F] font-Montserrat">
              <p>
                Nikole Rajgor is a freelance journalist covering all things New York City
                culture, local politics, housing and youth-centered initiatives.
              </p>

              <p>
                As a reporter, her work has appeared in The Upper East Site, The Nation
                and Secret NYC. Currently, she also serves as a Digital Media & Strategy
                Assistant for CUNY’s Office of Communications and Marketing.
              </p>

              <p>
                Born and raised in the Bronx, Nikole is a graduate of Hunter College,
                where she earned a B.A. in Media Studies with a concentration in
                Journalism, along with minors in Psychology and Public Policy.
              </p>

              <p>
                Through her work, Nikole focuses on telling community-centered narratives
                and connecting local issues to broader national conversations.
              </p>

              <p>
                In her spare time, Nikole loves to read fiction books, do puzzles, drink
                matcha, and is an avid White Castle fan.
              </p>
            </div>
          </div>
          </div>
          <div className="h-px bg-[#1F1F1F]"></div>
        </div>
      </section>
    </section>
  );
};

export default SiteHeader;

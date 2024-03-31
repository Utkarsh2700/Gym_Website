import Heading from "./Heading";
import Section from "./Section";
import { training, program, regeim, check } from "../assets";
import { fittnessPlanetServices } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Personalized Exercise Regimens and Coaching"
          text="Fittness Planet unlocks your potential to become best version of Yourself"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={training}
                alt="Trainig"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Training Services</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Personal training sessions with clients, either indoors or
                outdoors
              </p>
              <ul className="body-2 ">
                {fittnessPlanetServices.map((item, index) => (
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                    key={index}
                  >
                    <img width={24} height={24} src={check} alt="" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8  lg:-translate-x-1/2" />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rouuded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={program}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="program"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Fitness Programs</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Various fitness activities such as yoga, weightlifting,
                  running, or group exercise classes
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Exercise Regimens</h4>
                <p className="body-2 mb-2 text-m-3">
                  Workout schedules for different fitness goals, such as weight
                  loss, muscle gain, or endurance improvement.When will you
                  start?
                </p>
                <ul className="flex items-center justify-between">
                  {/* {brainwaveServicesIcons} */}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={regeim}
                  className="w-full h-full object-cover"
                  alt="Exercise Regimens"
                />
                <VideoChatMessage />
                {/* <VideoBar /> */}
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

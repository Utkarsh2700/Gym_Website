import {
  dumbell,
  progress,
  adduser,
  bicep,
  yourlogo,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage1,
  nakpro,
  muscletech,
  asitis,
  optimumnutrition,
  nutrabay,
  naturaltein,
  avvtar,
  muscleblaze,
  coach1,
  coach2,
  coach3,
  coach4,
  discordBlack,
  twitter,
  instagram,
  telegram,
  facebook,
} from "../assets";
export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#how-to-use",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Home",
    url: "#hero",
  },
  {
    id: "3",
    title: "Trainers",
    url: "#coaches",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#maps",
  },
  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [dumbell, progress, adduser, bicep];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const fittnessPlanetServices = [
  "Fitness Programs",
  "Training Services",
  "Exercise Regimens",
  "Workout Offerings",
];
export const roadmap = [
  {
    id: "0",
    title: "Krzysztof Wierzbicki",
    text: "Polish powerlifting champion with 5 World Classic Championship gold medals. Specializes in strength training and powerlifting programs.",
    date: "May 2023",
    status: "Powelifting",
    imageUrl: coach1,
    colorful: true,
  },
  {
    id: "1",
    title: "Hany Rambod",
    text: " Renowned trainer with over 20 years of experience. Helped clients win 24 Olympia titles, including 9 Mr. Olympia titles. Focuses on bodybuilding and competition training.",
    date: "May 2023",
    status: "BodyBuilding",
    imageUrl: coach2,
  },
  {
    id: "2",
    title: "Kathryn Budig",
    text: "Internationally recognized yoga teacher and author. Creates accessible and creative yoga sequences for all levels. Specializes in vinyasa yoga and ashtanga yoga.",
    date: "May 2023",
    status: "Yoga",
    imageUrl: coach3,
  },
  {
    id: "3",
    title: "Chris Hinshaw",
    text: "World-renowned endurance coach. Coached 36 CrossFit Games Champions and numerous professional athletes. Offers training programs for all fitness levels, specializing in aerobic capacity development",
    status: "CrossFit",
    imageUrl: coach4,
  },
];

export const collabText =
  "Allowing users to effortlessly track their workouts, monitor progress, and sync data across multiple platforms for a comprehensive fitness experience.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Personalized Workouts",
  },
  {
    id: "2",
    title: "Workout Tracking",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "NakPro",
    icon: nakpro,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "MuscleTech",
    icon: muscletech,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "AsItIs",
    icon: asitis,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "OptimumNutrition",
    icon: optimumnutrition,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Nutrabay",
    icon: nutrabay,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Naturaltein",
    icon: naturaltein,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Avvtar",
    icon: avvtar,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "MuscleBlaze",
    icon: muscleblaze,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Beginners or those on a budget",
    price: "5.99",
    features: [
      "Access to basic gym equipment (cardio machines, free weights)",
      "Group fitness classes (limited selection)",
      "Locker room access",
      "Online workout library (basic)",
      "One-on-one fitness consultation (introductory)",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Regular gym-goers looking for more options",
    price: "9.99",
    features: [
      "All Basic offerings",
      "Access to advanced gym equipment (squat racks, cable machines)",
      "More variety of group fitness classes",
      "Free towel service",
      "Online workout library (expanded programs)",
      "Monthly personalized workout plan",
    ],
  },
  {
    id: "2",
    title: "Elite",
    description:
      "Serious fitness enthusiasts or those seeking personalized training",
    price: null,
    features: [
      "All Premium offerings",
      "Priority booking for group fitness classes",
      "Unlimited personal training sessions (within a limit)",
      "Nutritional guidance consultations",
      "Access to a dedicated fitness coach",
      "Advanced online workout library (including customized plans)",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Convenience",
    text: "Offers the convenience of accessing workout routines, tracking progress, and scheduling sessions anytime, anywhere.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "Personalized Workouts",
    text: "provide tailored workout plans based on individual fitness goals, preferences, and fitness levels.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage1,
    light: true,
  },
  {
    id: "2",
    title: "Tracking Progress",
    text: "Progress tracking by recording workout history, measuring performance metrics, and setting achievable goals.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage1,
  },
  {
    id: "3",
    title: "Variety of Workouts",
    text: "Offers a wide range of workout options, including strength training, cardio, yoga, and HIIT, catering to diverse fitness interests and preferences.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage1,
    light: true,
  },
  {
    id: "4",
    title: "Expert Guidance",
    text: "instructional videos, tips, and guidance from fitness experts or certified trainers, providing users with professional support and expertise.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
  },
  {
    id: "5",
    title: "Community and Motivation",
    text: "Foster a sense of community and motivation among users. Through social features, challenges, and support network.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage1,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

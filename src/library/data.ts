import { Event } from "models/event";

export const events = [
  new Event({
    id: 1,
    name: "Vonage API Workshop",
    event_type: "workshop",
    permission: "private",
    start_time: 1610442000000,
    end_time: 1610443800000,
    description:
      "A Nanoleaf Shapes Mini Triangle Smarter Kit will be awarded to each member of the winning team for Best Use of Vonage API. Vonage is a cloud communications platform that allows developers to integrate voice, video and messaging into their applications using their communication APIs. So whether you want to build video calls into your app, create a Facebook bot, or build applications on top of programmable phone numbers, Vonage has got you covered",
    speakers: [
      {
        name: "Vonage",
        profile_pic: undefined,
      },
    ],
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [2, 3],
  }),
  new Event({
    id: 2,
    name: "Rapid Prototyping with Flutter and Firebase",
    event_type: "tech_talk",
    permission: "public",
    start_time: 1610442000000,
    end_time: 1610447400000,
    description:
      "Ever need to make an app quickly, such as for a hackathon or prototype, but not know where to start? In this talk you will learn about Flutter, Google's cross-OS development platform, as well as Firebase, Google's Backend as a Service (BaaS) platform, and how they can be used to quickly take your ideas and turn them into beautiful and functional prototypes. We will discuss multiple useful widgets, third-party plugins, and how to implement various features of Firebase that can support your users. This talk will cover code implementations as well as theory.",
    speakers: [
      {
        name: "Firebase",
        profile_pic: undefined,
      },
    ],
    public_url: "https://youtu.be/rgfezE92mog",
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [1, 3],
  }),
  new Event({
    id: 3,
    name: "Microsoft API Workshop",
    event_type: "workshop",
    permission: "public",
    start_time: 1610449200000,
    end_time: 1610452800000,
    description:
      "The Azure prize is awarded to the team who makes the best use of Azure during this hackathon. The primary requirement is that your hack project includes Azure in some way.",
    speakers: [
      {
        name: "Microsoft",
        profile_pic: undefined,
      },
    ],
    public_url: "https://youtu.be/M3GQs6fEjs4",
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [1, 2, 4],
  }),
  new Event({
    id: 4,
    name: "Hootsuite API Workshop",
    event_type: "workshop",
    permission: "public",
    start_time: 1610449200000,
    end_time: 1610451000000,
    description:
      "A Raspberry Pi 4 will be awarded to each member of the winning team who makes the best use of the Hootsuite API to improve how we communicate in today's connected world.",
    speakers: [
      {
        name: "Hootsuite",
        profile_pic: undefined,
      },
    ],
    public_url: "https://youtu.be/lJ4uGA176HY",
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [2, 3, 5],
  }),
  new Event({
    id: 9,
    name: "Intro To Computer Vision",
    event_type: "tech_talk",
    permission: "public",
    start_time: 1610456400000,
    end_time: 1610460000000,
    description:
      "Ever wonder how computers 'see'? How can they extract meaning from images? Come learn about the growing field of Computer Vision and tinker with Detectron2 to create an object detection project.",
    speakers: [
      {
        name: "Kristy Gao 👽",
        profile_pic: "https://hackthenorth.com/img/schedule/Kristy%20Gao.png",
      },
      {
        name: "Kristy Gao 👽",
        profile_pic: "https://hackthenorth.com/img/schedule/Kristy%20Gao.png",
      },
    ],
    public_url: "https://youtu.be/EJcJuUMLNEs",
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [6, 7, 8, 10],
  }),
  new Event({
    id: 10,
    name: "Intro to Security Engineering",
    event_type: "workshop",
    permission: "private",
    start_time: 1610456400000,
    end_time: 1610461800000,
    description:
      "Ever wanted to learn how cybercriminals hack into systems? By the end of this interactive workshop, you will discover several different vulnerabilities in our system and use them to steal top-secret information! No prior security engineering experience is required.",
    speakers: [
      {
        name: "Katya Potapov 🙀",
        profile_pic: "https://hackthenorth.com/img/schedule/KatyaPotapov.png",
      },
    ],
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [6, 7, 8, 9],
  }),
  new Event({
    id: 11,
    name: "Data/ML Meet-Up",
    event_type: "activity",
    permission: "private",
    start_time: 1610472600000,
    end_time: 1610433000000,
    description:
      "Our Data/Machine Learning Meet-Up 💻 will be happening in Meet-up Room 1 and is open to enthusiasts at all levels 😁",
    speakers: [],
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [15],
  }),
  new Event({
    id: 5,
    name: "Voiceflow API Workshop",
    event_type: "workshop",
    permission: "private",
    start_time: 1610526600000,
    end_time: 1610530200000,
    description:
      "Submit a project that uses Voiceflow – explain how Voiceflow helped to achieve the goal of your project",
    speakers: [
      {
        name: "Voiceflow",
        profile_pic: undefined,
      },
    ],
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [1, 3, 4],
  }),
  new Event({
    id: 6,
    name: "Intro to GraphQL",
    event_type: "tech_talk",
    permission: "public",
    start_time: 1610526600000,
    end_time: 1610530200000,
    description:
      "You’ve been working with REST APIs for a while now, and you’re sick of it. Data fetching is difficult, you can’t specify what data you need, adding on features feels tacky… it feels wrong. This is where the future of networking architecture lies: GraphQL! In this workshop, you’ll learn what all the hype surrounding this graph-based query language is about, and even how to build hyper scalable APIs using its awesome new data constructs!",
    speakers: [
      {
        name: "Rishi Kothari 🍦",
        profile_pic: "https://hackthenorth.com/img/schedule/RishiKothari.png",
      },
    ],
    public_url: "https://youtu.be/koxjhSHvnGo",
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [7, 8, 9, 10],
  }),
  new Event({
    id: 8,
    name: "Multithreading & Idiomatic Android",
    event_type: "tech_talk",
    permission: "public",
    start_time: 1610526600000,
    end_time: 1610535600000,
    description:
      "In the final Android workshop, I’ll show you how to use background tasks. You will learn how to run heavy tasks like making an API call or querying a database as a background task using Kotlin coroutines and livedatas. As a bonus, I’ll share some Android quirks and issues that I’ve learned with experience.",
    speakers: [
      {
        name: "Bobby Wang 🙆🏻‍♀️",
        profile_pic: "https://hackthenorth.com/img/schedule/BobbyWang.jpg",
      },
    ],
    public_url: "https://youtu.be/yk5bt9aGjP8",
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [6, 7, 9, 10],
  }),
  new Event({
    id: 7,
    name: "Data Science Ethics",
    event_type: "tech_talk",
    permission: "public",
    start_time: 1610530200000,
    end_time: 1610537400000,
    description:
      "Intended to serve as a beginner’s guide to ethical practices in data science, this workshop will explore the different uses of proxy variables in predictive modelling. From banking to policing to employment, our society is becoming increasingly metrified, relying on predictive modelling to make decisions. As data scientists we must ensure that the tools we are creating work to better society rather than exacerbate existing schisms. This workshop will focus on approaching data problems holistically, and with justice as a central tenet.",
    speakers: [
      {
        name: "Kamilah Ebrahim 🌻",
        profile_pic:
          "https://hackthenorth.com/img/schedule/KamilahEbrahimHeadshot.jpg",
      },
    ],
    public_url: "https://youtu.be/61QHPlfMHJk",
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [6, 8, 9, 10],
  }),
  new Event({
    id: 12,
    name: "Black in Tech Meet-Up",
    event_type: "activity",
    permission: "private",
    start_time: 1638343800000,
    end_time: 1638351000000,
    description:
      "Our Black in Tech Meet-Up 💛 is happening in Meet-Up Room 3! Join us for games, good vibes, great conversation, and tea spilling. 🥥",
    speakers: [],
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [13, 14],
  }),
  new Event({
    id: 13,
    name: "LGBTQ+ Hackers Meet-Up",
    event_type: "activity",
    permission: "private",
    start_time: 1638390600000,
    end_time: 1638394200000,
    description:
      "Our LGBTQ+ Hackers Meet-Up 🏳️‍🌈 is taking place in Meet-Up Room 3! Anyone from the LGBTQ+ community along with any allies are welcome 🤗",
    speakers: [],
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [12, 14],
  }),
  new Event({
    id: 14,
    name: "Ladies Storm Hackathons Meet-Up",
    event_type: "activity",
    permission: "private",
    start_time: 1638392400000,
    end_time: 1638396000000,
    description:
      "Take a break from hacking and drop into our Ladies Storm Hackathons Meet-Up 👩‍💻 in Meet-Up Room 3! Open to all women, non-binary people, trans women, and allies ✨",
    speakers: [],
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [],
  }),
  new Event({
    id: 15,
    name: "High School Hackers Meet-Up",
    event_type: "activity",
    permission: "private",
    start_time: 1638406800000,
    end_time: 1638410400000,
    description:
      "Calling all high schoolers, our High School Hackers Meet-Up 📚 is happening on Discord in Meet-Up Room 1!",
    speakers: [],
    private_url: "https://hopin.com/events/hack-the-north-2020",
    related_events: [11],
  }),
];

export const event = events[0];

export const techtalk = events[1];

export const workshop = events[0];

export const activity = events[14];

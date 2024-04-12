import {
  rocketryImage,
  taaliImage,
  lordsImage,
  aquamanImage,
  amsterdamImage,
  // potcImage,
  // duneImage,
} from "../assets/images";
const featuredShowData = [
  {
    id: "featuredShow1",
    title: "Rocketry: The Nambi Effect",
    keywords: "हि, En ∙ Biography ∙ U/A 13+",
    type: "Movie",
    cast: "R. Madhavan, Simran Bagga, Rajit Kapoor, Shah Rukh Khan",
    description:
      "The story of a great Indian rocket scientist, a true patriot, who was turned into a villain in the blink of an eye. Rocketry: The Nambi Effect is a retelling of Shri Nambi Narayananʼs life story as it unravels in an interview by superstar Shah Rukh Khan.",
    image: rocketryImage,
    premium: false,
    video_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd509.mp4",
  },
  {
    id: "featuredShow2",
    title: "Taali",
    type: "Web Series",
    keywords: "Hindi ∙ Biopic ∙ U/A 16+",
    cast: "Sushmita Sen, Ankur Bhatia, Nandu Madhav, Krutika Deo, Suvrat Joshi",
    description:
      "A brave and powerful journey of the transgender activist Shreegauri Sawant whose iconic battle led to the inclusion of the third gender on every official document in India. Watch Sushmita Sen in our brand new Original Taali, streaming free.",
    image: taaliImage,
    premium: true,
    video_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd50b.mp4",
  },
  {
    id: "featuredShow3",
    title: "The Lord Of The Rings: The Two Towers",
    type: "Movie",
    keywords: "English ∙ Adventure ∙ U/A 13+",
    cast: "Elijah Wood, Viggo Mortensen, Ian McKellen",
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    image: lordsImage,
    premium: true,
    video_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd50d.mp4",
  },
  {
    id: "featuredShow4",
    title: "Aquaman",
    type: "Movie",
    keywords: "En, हि, +2 more ∙ Action ∙ U/A 13+",
    cast: "Jason Momoa, Amber Heard, Willem Dafoe",
    description:
      "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
    image: aquamanImage,
    premium: true,
    video_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd50f.mp4",
  },
  {
    id: "featuredShow5",
    title: "New Amsterdam",
    keywords: "English ∙ Drama ∙ U/A 16+",
    type: "Web Series",
    cast: "Ryan Eggold, Janet Montgomery, Jocko Sims",
    description:
      "A new medical director breaks the rules to heal the system at America's oldest public hospital.",
    image: amsterdamImage,
    premium: false,
    video_url:
      "https://newton-project-resume-backend.s3.amazonaws.com/video/64cffee700bad552e8dcd507.mp4",
  },
];

export default featuredShowData;

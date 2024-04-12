import { nancyDrew, planetIndia } from "../assets/images";

const showCategories = [
  { type: "Movie", count: 428, premium: false, featuredShow: null },
  {
    type: "Short Film",
    count: 450,
    premium: true,
    featuredShow: nancyDrew,
    featuredShowName: "nancy drew",
  },
  { type: "Documentary", count: 482, premium: false, featuredShow: null },
  { type: "Web Series", count: 438, premium: true, featuredShow: null },
  {
    type: "Tv Show",
    count: 434,
    premium: false,
    featuredShow: planetIndia,
    featuredShowName: "planetIndia",
  },
  { type: "Trailer", count: 456, premium: true, featuredShow: null },
  { type: "Video Song", count: 424, premium: false, featuredShow: null },
];
export const showsCount = {
  movie: 428,
  "web series": 438,
  trailer: 456,
  "tv show": 434,
  documentary: 482,
  "short film": 450,
  "video song": 424,
};

//movie428 + webseries438 + trailer456 + tvshows434 + documentry482 + shortfilm450 + videosong424
export default showCategories;

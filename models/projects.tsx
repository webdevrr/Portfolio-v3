import nbaLogo from "../public/images/nba-logo.png";
import steelseriesLogo from "../public/images/steelseries-logo.png";
import loginLogo from "../public/images/login-logo.png";
import pathLogo from "../public/images/path-logo.png";

const projects: Project[] = [
  {
    index: 0,
    fontColor: "#cb4b16",
    backgroundColor: "white",
    font: "Replica ProTT Heavy",
    logo: nbaLogo,
    name: " Headshots API",
    description:
      "Web scrapper of NBA offical Headshots from stats.nba.com using Puppeteer, MongodDB and deployed to Google app engine.",
    type: "Fullstack",
    techStack: ["Puppeteer", "NodeJS", "Express", "MongoDB", "React"],
    links: [
      {
        link: "https://github.com/RRReact/NBA-data-scraper",
        text: "Backend Code",
      },
      {
        link: "https://github.com/RRReact/NBA-headshots",
        text: "Frontend Code",
      },
      { link: "https://nba-headshots.netlify.app/", text: "Demo" },
    ],
  },
  {
    index: 1,
    fontColor: "#01d277",
    backgroundColor: "#203239",
    font: "Oswald",
    name: "MovieFinder",
    description:
      "Movie IMDb like site, you can search by actors or movie/series title, weekly popular movies on front page. Using popular movie database TMDb.",
    type: "Frontend",
    techStack: ["React", "React-router"],
    links: [
      {
        link: "https://github.com/RRReact/Movie-Finder",
        text: "Frontend Code",
      },
      { link: "https://search-movie-rr.netlify.app/", text: "Demo" },
    ],
  },
  {
    index: 2,
    fontColor: "white",
    backgroundColor: "black",
    font: "Roboto",
    logo: loginLogo,
    name: "Login Boilerplate",
    description:
      "Simple NodeJS API for user authentication and registration with react-bootstrap on client side. Regsiter and login forms have all necessary validators on backend and frontend, JWT handles user email confirmation and user session together with Redux. ",
    type: "Fullstack",
    techStack: [
      "NodeJS",
      "Express",
      "React",
      "MongoDB",
      "Redux",
      "JWT",
      "Bootstrap",
    ],
    links: [
      {
        link: "https://github.com/RRReact/Express-JWT-auth",
        text: "Backend Code",
      },
      {
        link: "https://github.com/RRReact/Login-System",
        text: "Frontend Code",
      },
      { link: "https://logins-system.netlify.app/login", text: "Demo" },
    ],
  },
  {
    index: 3,
    fontColor: "#005BFF",
    backgroundColor: "#0095FF",
    font: "Roboto",
    logo: pathLogo,
    name: "Path Finder",
    description:
      "Pathfinding algorithms visualizer made in React and JS, so far only one algorithm added (Dijkstra's algorithm).",
    type: "Frontend",
    techStack: ["JavaScript", "React"],
    links: [
      {
        link: "https://github.com/RRReact/Algorytmy",
        text: "Frontend Code",
      },
      { link: "https://pathfinder-vis.netlify.app/", text: "Demo" },
    ],
  },
  {
    index: 4,
    fontColor: "black",
    backgroundColor: "#F9C328",
    font: "Replica ProTT Heavy",
    logo: steelseriesLogo,
    name: "ARCTIS 3",
    description:
      "Steelseries Arctis 3 advertisement page, with GSAP animations.",
    type: "Frontend",
    techStack: ["JavaScript", "GSAP", "SASS"],
    links: [
      {
        link: "https://github.com/RRReact/SteelSeries-AD",
        text: "Frontend Code",
      },
      { link: "https://steelseries.netlify.app/", text: "Demo" },
    ],
  },
];
export default projects;

export interface Project {
  index: number;
  fontColor: string;
  backgroundColor: string;
  font: string;
  logo?: any;
  name: string;
  description: string;
  type: string;
  techStack?: string[] | null;
  links?: Link[] | null;
}
export interface Link {
  link: string;
  text: string;
}

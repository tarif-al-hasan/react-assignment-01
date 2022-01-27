import BioData from "./Components/BioData";
import "./App.css";

function App() {
  return (
    <div>
      <BioData
        name="Tarif Al Hasan"
        skill={["Html", "css", "js", "Bootstrap", "scss"]}
        subtitle="Web Developer, Web Designer"
        experince={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        ]}
        education={["SSC 2022", "JSC 2019"]}
        carrer="Having spent my life in New York's Jewish community, I have used my time to bring visually aesthetic, responsive, and accessible websites to my community. After cutting my teeth at Spherical, I have a proven history of a strong ethics and passion for web design. "
        phone="01779158124"
        facebook="facebook.com/tarifalhasan674"
        linkden="linkdien.com/tarifalhasan"
        gitub="github.com/tarif-al-hasan"
      />
      <BioData
        name="Shohag Islam Sajjad"
        skill={["Html", "css", "js", "Python", "Bootstarp"]}
        subtitle="Web Developer, Web Designer"
        experince={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        ]}
        education={["SSC 2022", "JSC 2019"]}
        carrer="Having spent my life in New York's Jewish community, I have used my time to bring visually aesthetic, responsive, and accessible websites to my community. After cutting my teeth at Spherical, I have a proven history of a strong ethics and passion for web design. "
        phone="017xxxxx"
        facebook="facebook.com/Shohag Islam Sajjad"
        linkden="linkdien.com/Shohag Islam Sajjad"
        gitub="github.com/tarif-al-Shohag Islam Sajjad"
      />
    </div>
  );
}

export default App;

import JC from "../assets/jc.jpg";
import Program from "../assets/program.png";
import HeadFeature from "./HeadFeature";

const ministries = [
  {
    heading: "Pastor JC.",
    src: JC,
    name: "Spirit",
    logo: Program,
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum
      possimus quis vel cum assumenda, voluptas quidem? Quae, repellat culpa!
    `,
  },
  {
    heading: "Pastor JC.",
    src: JC,
    name: "Spirit",
    logo: Program,
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum
      possimus quis vel cum assumenda, voluptas quidem? Quae, repellat culpa!
    `,
  },
  {
    heading: "Pastor JC.",
    src: JC,
    name: "Spirit",
    logo: Program,
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum
      possimus quis vel cum assumenda, voluptas quidem? Quae, repellat culpa!
    `,
  },
  {
    heading: "Pastor JC.",
    src: JC,
    name: "Spirit",
    logo: Program,
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum
      possimus quis vel cum assumenda, voluptas quidem? Quae, repellat culpa!
    `,
  },
  {
    heading: "Pastor JC.",
    src: JC,
    name: "Spirit",
    logo: Program,
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum
      possimus quis vel cum assumenda, voluptas quidem? Quae, repellat culpa!
    `,
  },
];

const LeadershipMinistry = () => {
  return (
    <section className="block container">
      <header className="header leadership__header">
        <h2 className="leadership__heading">Our Ministry Heads</h2>
      </header>
      <div className="leadership__container">
        {ministries.map((ministry) => (
          <HeadFeature
            heading={ministry.heading}
            logo={ministry.logo}
            featureRole="Ministry Head"
            featureName={ministry.name}
            featureSrc={ministry.src}
          >
            {ministry.description}
          </HeadFeature>
        ))}
      </div>
    </section>
  );
};

export default LeadershipMinistry;

import Feature from "./Feature";
import FeatureImage from "../assets/final-hero.jpg";

const features = [
  {
    src: FeatureImage,
    description: `
        Ablaze for Jesus Family Church Philippines Inc. traces its beginnings to
        the year 2013, when a group of young professionals responded to God’s
        calling to establish a ministry dedicated to sharing the gospel of Jesus
        Christ. Their vision was clear: to reach young people and young
        professionals with the message of salvation and to raise them as
        followers of Christ.
    `,
    heading: "Who We Are",
  },
  {
    src: FeatureImage,
    description: `
        The church's first gatherings were held in a rented 20-square-meter
        space near the Tullahan River in Barangay Tinajeros, Malabon. With
        limited financial means, as most of the founders were newly graduated
        from college, the early years were marked by challenges in sustaining
        the ministry. Nevertheless, the commitment to the vision and the
        faithfulness of God became the driving force of the church. Despite the
        difficulties, young people from the community began attending, and the
        church gradually grew.
    `,
  },

  {
    src: FeatureImage,
    description: `
        As attendance increased, the original venue could no longer accommodate
        the growing number of members. Through God's provision, the church was
        able to transfer to a larger space, providing a more suitable place for
        worship and fellowship. This period also marked the broadening of the
        church's mission. While its initial focus had been the youth and young
        professionals, the ministry expanded to include families, recognizing
        the importance of reaching parents and children alongside the younger
        generation.
    `,
  },
  {
    src: FeatureImage,
    description: `
          A significant milestone was reached in 2022. Formerly known as A4J
        Ablaze for Jesus Christian Ministry, the church officially changed its
        name to Ablaze for Jesus Family Church Philippines Inc. The change was
        made to reflect its wider mission of ministering not only to individuals
        but also to entire families within the community. This transition
        allowed the church to adopt a more family-oriented approach in its
        programs and ministries.
    `,
  },
  {
    src: FeatureImage,
    description: `
        From its humble beginnings in a small rented space near the Tullahan
        River to becoming a growing community of faith, Ablaze for Jesus Family
        Church Philippines Inc. stands as a testimony of God's guidance and
        provision. Its history reflects a journey of vision, perseverance, and
        transformation, as the church continues to serve as a spiritual home for
        young people, families, and future generations.
    `,
  },
];

const AboutFeatures = () => {
  return (
    <section className="about">
      <header className="about__heading">About Us</header>
      <div className="block container">
        <header className="header">
          <h1>About Us</h1>
        </header>
        <div className="about__features">
          {features.map((feature) => (
            <Feature src={feature.src} heading={feature.heading}>
              {feature.description}
            </Feature>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;

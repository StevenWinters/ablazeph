import { Link } from "react-router-dom";
import Button from "./Button";

const FinalHero = () => {
  return (
    <section className="block--shade final-hero">
      <div className="flex flex--column justify--center align--center final-hero__gradient">
        <h2>Serve with us</h2>
        <div className="flex flex--column gap--lg hero__btns final-hero__container">
          <Link to="/what-we-do">
            <Button type="outline">Learn More</Button>
          </Link>
          <Button color="special">Sign up for a Discipleship Group</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalHero;

import { IoChatbubbleSharp } from "react-icons/io5";
import Testimonial from "./Testimonial";

const testimonialComments = [
  {
    name: "Author 1",
    date: "March 22",
    commenterType: "Member",
    comment: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
      placeat accusantium ipsam eius qui deserunt reiciendis amet quibusdam 
      recusandae quis.
    `,
  },
  {
    name: "Author 2",
    date: "March 22",
    commenterType: "Member",
    comment: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
      placeat accusantium ipsam eius qui deserunt reiciendis amet quibusdam 
      recusandae quis.
    `,
  },
  {
    name: "Author 3",
    date: "March 22",
    commenterType: "Member",
    comment: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
      placeat accusantium ipsam eius qui deserunt reiciendis amet quibusdam 
      recusandae quis.
    `,
  },
  {
    name: "Author 4",
    date: "March 22",
    commenterType: "Member",
    comment: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
      placeat accusantium ipsam eius qui deserunt reiciendis amet quibusdam 
      recusandae quis.
    `,
  },
];

const HomeTestimonials = () => {
  return (
    <section className="home__testimonials">
      <div className="circle"></div>
      <div className="block container">
        <header>
          <h2>What Our Members Say.</h2>
        </header>
        <div className="flex gap--md align--center">
          <span className="flex justify--center align--center justify--center testimonial__bubble">
            <IoChatbubbleSharp />
          </span>
          <span className="testimonial__text">Success Stories</span>
        </div>
        <div className="grid grid--1x2 gap--sm">
          {testimonialComments.map((tc) => (
            <Testimonial
              name={tc.name}
              date={tc.date}
              commenterType={tc.commenterType}
            >
              {tc.comment}
            </Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;

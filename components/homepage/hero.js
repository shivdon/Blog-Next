import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/shiv.jpg"
          alt="An Image showing Shivansh"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I am Shivansh</h1>
      <p>
        I blog about full stack web development. Especially about the Frontend
        development
      </p>
    </section>
  );
};

export default Hero;

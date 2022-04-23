import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import { Layout } from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      {/* <Section grid> */}
      <Hero />
      {/* <BgAnimation /> */}
      {/* </Section> */}
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </Layout>
  );
};

export default Home;

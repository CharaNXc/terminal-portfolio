import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
  Hi, my name is <HighlightSpan>Charan Sai Anche</HighlightSpan>!
</p>
<p>
  I'm <HighlightAlt>a Cybersecurity and Software Engineer</HighlightAlt> based in Warangal, India.
</p>
<p>
  I am passionate about <HighlightSpan>developing secure and scalable applications</HighlightSpan>, 
  <br />
  leveraging my expertise in <HighlightAlt>programming, cloud computing, and cybersecurity</HighlightAlt> to solve 
  real-life challenges.
</p>

    </AboutWrapper>
  );
};

export default About;

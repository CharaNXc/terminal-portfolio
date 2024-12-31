import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    desc: "SR University, Warangal | 2021 - 2025 | CGPA: 8.2/10",
  },
  {
    title: "MPC Telangana Inter",
    desc: "Narayana Junior College | 93%",
  },
  {
    title: "10th Grade",
    desc: "St. Mary's High School",
  }
];

export default Education;

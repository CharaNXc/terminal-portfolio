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
    desc: "Narayana Junior College | 2019 - 2021 | 93%",
  },
  {
    title: "Board of Secondary Education, Telangana (BSE Telangana)",
    desc: "St. Mary's High School| 2018 - 2019 | CGPA: 9/10",
  }
];

export default Education;

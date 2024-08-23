import { useNavigate } from "react-router-dom";
import { useGetAllFacultyCoursesQuery } from "../../redux/features/faculty/facultyCourses.api";
import { Button, Col, Flex } from "antd";
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";

const MyCourses = () => {
  const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery(undefined);
  const navigate = useNavigate();
  console.log(facultyCoursesData);

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            options={semesterOptions}
            name="semesterRegistration"
            label="Semester"
          />
          <PHSelect options={courseOptions} name="course" label="Course" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default MyCourses;

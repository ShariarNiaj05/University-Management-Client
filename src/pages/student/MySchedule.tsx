import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseApi";

const MySchedule = () => {
  const { data } = useGetAllEnrolledCoursesQuery(undefined);
  console.log(data);
  return <div>MySchedule</div>;
};

export default MySchedule;

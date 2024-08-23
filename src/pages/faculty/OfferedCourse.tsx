import { useGetAllOfferedCoursesQuery } from "../../redux/features/student/studentCourseApi";

const OfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCoursesQuery(undefined);
  const [enroll] = useEnrolCourseMutation();

  const singleObject = offeredCourseData?.data?.reduce((acc: TCourse, item) => {
    const key = item.course.title;
    acc[key] = acc[key] || { courseTitle: key, sections: [] };

    acc[key].section.push({
      section: 
    })
    return acc;
  }, {});

  const modifiedData = Object.values(singleObject ? singleObject : {});

  return (
    <div>
      <h1> This is OfferedCourse component </h1>
    </div>
  );
};

export default OfferedCourse;

type TCourse = {
  [index: string]: any;
};
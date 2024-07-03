import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerators";
import { adminPaths } from "../../routes/admin.routes";
import facultyPaths from "../../routes/faculty.routes";
import studentPaths from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const role = "admin";
  let sideBarItems;

  switch (role) {
    case userRole.ADMIN:
      sideBarItems = sidebarItemGenerator(adminPaths, userRole.ADMIN);
      return;
    case userRole.FACULTY:
      sideBarItems = sidebarItemGenerator(facultyPaths, userRole.FACULTY);
      return;
    case userRole.STUDENT:
      sideBarItems = sidebarItemGenerator(studentPaths, userRole.STUDENT);
      return;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>University Management</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;

import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to={"/dashboard"}>Dashboard</NavLink>,
//   },
//   /* {
//     key: "2",
//     label: "Profile",
//   }, */
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin",
//         label: <NavLink to={"/create-admin"}>Create Admin</NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to={"/create-student"}>Create Student</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to={"/create-faculty"}>Create Faculty</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerators";
import { adminPaths } from "../../routes/admin.routes";

const { Sider } = Layout;
const Sidebar = () => {
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
        items={sidebarItemGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;

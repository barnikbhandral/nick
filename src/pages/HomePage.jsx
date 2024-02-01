import Activity from "../components/activity/Activity"
import Attachments from "../components/attachments/Attachments"
import Header from "../components/header/Header"
import LeftMenu from "../components/leftMenu/LeftMenu"
import ProjectDescription from "../components/projectDescription/ProjectDescription"
import Update from "../components/update/Update"

const HomePage = () => {
  return (
    <div>
      <Header />
      <div style={{display:"flex", justifyContent: "space-between"}}>
        <div className="left"  >
          <LeftMenu />
        </div>
        <div className="right">
          <ProjectDescription />
          <Attachments />
          <Update />
          <Activity />
        </div>
      </div>
    </div>
  )
}

export default HomePage

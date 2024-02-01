import './style.css'
import Home from '../../assets/Home'
import Favorite from '../../assets/Favorite'
import Bolt from '../../assets/Bolt'
import Users from '../../assets/Users'
import Briefcase from '../../assets/Briefcase'
import Setting from '../../assets/Setting'


const LeftMenu = () => {
  return (
    <div className='leftMenu'>
      <div className="innerContainer">
        <ul className="menuItems">
          <li>
            <div className='menuIcons'><Home /></div>
            <div>Home</div></li>
          <li>
            <div className='menuIcons'><Favorite /></div>
            <div>Projects</div></li>
          <li>
            <div className='menuIcons'><Bolt /></div>
            <div>Tasks</div></li>
          <li>
            <div className='menuIcons'><Users /></div>
            <div>People</div></li>
          <li>
            <div className='menuIcons'><Briefcase /></div>
            <div>Hiring</div></li>
          <li>
            <div className='menuIcons'><Setting /></div>
            <div>Settings</div></li>
        </ul>
      </div>

    </div>
  )
}

export default LeftMenu

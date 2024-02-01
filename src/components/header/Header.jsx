

import './style.css'
// import Search from '../../assets/Search'


const Header = () => {
    return (
            <header className='container'>
                <div>
                    <div className="brandName">
                    <img src="/images/Blue4.png" alt=" admin" />
                        <h3>Archslate</h3>
                    </div>
                </div>
                <div className="searchBar">
                    <input className='searchinput' type="search" placeholder='search'></input>
                </div>
                <div >
                    <div className="adminSection">
                        <img src="/images/admin.png" alt=" admin" />
                        <div>
                            <div><span className='name'>Suzette Goldstein</span></div>
                            <div className='role'>Admin</div>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header



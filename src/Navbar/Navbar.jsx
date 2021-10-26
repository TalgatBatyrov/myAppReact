import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div>
                <a href="">Profile</a>
            </div>
            <div>
                <a href="">Message</a>
            </div>
            <div>
                <a href="">News</a>
            </div>
            <div>
                <a href="">Music</a>
            </div>
            <div>
                <a href="">Setting</a>
            </div>
        </div>
    )
}

export default Navbar;
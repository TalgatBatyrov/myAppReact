import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div className={`${s.item} ${s.active}`}>
                <a href="">Profile</a>
            </div>
            <div className={s.item}>
                <a href="">Message</a>
            </div>
            <div className={s.item}>
                <a href="">News</a>
            </div>
            <div className={s.item}>
                <a href="">Music</a>
            </div>
            <div className={s.item}>
                <a href="">Setting</a>
            </div>
        </div>
    )
}

export default Navbar;
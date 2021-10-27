import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-quadrilateral-infinite-technology-light-background-material-technologylight-backgroundbackground-materialquadrilateralblue-image_68132.jpg" alt="img" />
            </div>
            <div className={s.avaDesc}>
                Ava + Description
            </div>
        </div>
    )
}
export default ProfileInfo;
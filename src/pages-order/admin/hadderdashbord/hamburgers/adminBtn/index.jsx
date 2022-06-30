import { Link } from 'react-router-dom'
import styles from './style.module.css'
function AdminBtn(props) {
    console.log(props.title, props.active);
    return <>
        <Link
            // + props.title

            to={'/test'}>
            <div onClick={() => props.setActive(props.title)}
                className={`${props.title === 'Dashboard' ? styles.mainBtnDash : styles.mainBtnClass}`}
                style={props.active === props.title ? { 'backgroundColor': '#F39C12' } : null}
            >
                <div className={props.title == 'Dashboard' ? styles.mainPicDash : styles.mainPicClass}></div>
                <span>{props.title}</span>
            </div>
        </Link>
    </>
}
export default AdminBtn
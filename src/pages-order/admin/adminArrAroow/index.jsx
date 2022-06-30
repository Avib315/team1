import styles from './style.module.css'

function AdminArrArrow(props) {
    return <>
        <div className={styles.mainDiv}>
            <div></div>
            <button>{props.num || 1}</button>
            <div></div>
        </div>

    </>
}


export default AdminArrArrow
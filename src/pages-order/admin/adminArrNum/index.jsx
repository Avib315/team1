import styles from './style.module.css'

function AdminArrNum(props) {
    // const click = props.click
    return <>
        <div className={styles.mainDiv} >
            <div className={`${styles.backDiv} ${(props.arrLoc == props.num) ? styles.clickd : null}`} >
                {(!props.op) ? <div onClick={() => props.setArrLoc(props.num)}
                    className={props.arrLoc == props.num ? `${styles.frontDiv} ${styles.clickd}` : `${styles.frontDiv} ${styles.notClickd}`}>
                    {props.num}
                </div> :
                    <div onClick={() => { props.changearrLoc(props.op) }} className={props.click ? `${styles.frontDiv} ${styles.clickd}` : `${styles.frontDiv} ${styles.notClickd}`}>
                        {props.num}
                    </div>}
            </div>
        </div >

    </>
}


export default AdminArrNum
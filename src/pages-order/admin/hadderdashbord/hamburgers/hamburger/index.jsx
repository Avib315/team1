import styles from './style.module.css'
import image1 from '../adminImg/image1.svg'
import AdminBtn from '../adminBtn/index'
import { useState } from 'react'
// Creator : Team A - yuda akiva
function Hamburger() {
    const [active, setActive] = useState('Dashboard')
    console.log(active);
    return <>
        <div className={styles.mainDiv}>
            <div className={styles.picHolder}>
                <div className={styles.firstImg}></div>
                <div className={styles.secendImg}></div>
            </div>
            <AdminBtn active={active} setActive={setActive} title={'Dashboard'} />
            <AdminBtn active={active} title={'Classrooms'} setActive={setActive} />
        </div>
    </>
}


export default Hamburger
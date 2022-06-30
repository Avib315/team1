import DivCompicated from '../../../components/common/DivCompicated'
import HadderDashbord from '../hadderdashbord'
import styles from './style.module.css'

// Creator : Team 1 - politi
function ClassroomDetalis(props) {
    return <>
        <HadderDashbord />
        <DivCompicated classAll={styles.all} classInternal={styles.stylrIn} isLeft={false}>
        <div className={styles.divHH}>
            <span className={styles.spanH3}>Student Name </span>
             <span className={styles.spanH1}>{props.studentName || "gonny Wolker"} </span>
        </div>
        <hr/>
        <div className={styles.divGrafs}>
            <div className={styles.assessment}>
                <div className={styles.testassessment}>
                    <div className={styles.ditels}>
                    <div className={styles.txt}> 26/12/2021</div>
                    <div className={styles.txt}>Assessment</div></div>
                    <div className={styles.scor}>{props.grade || "230 WPM 9/10 cp"}</div>
                    </div>
            </div>


            <div className={styles.assessment}>
                <div className={styles.testFocus}>
                    <div className={styles.ditels}>
                    <div className={styles.txt}> 19/12/2021</div>
                    <div className={styles.txt}>Train Focus</div></div>
                    <div className={styles.scor}>{props.grade || "230 WPM 9/10 cp"}</div>
                    </div>
            </div>

            <div className={styles.assessment}>
                <div className={styles.testRidin}>
                    <div className={styles.ditels}>
                    <div className={styles.txt}> 14/12/2021</div>
                    <div className={styles.txt}>Train Riding</div></div>
                    <div className={styles.scor}>{props.grade || "24 LPM"}</div>
                    </div>
            </div>

        </div>
        
        </DivCompicated>
    </>
}
export default ClassroomDetalis
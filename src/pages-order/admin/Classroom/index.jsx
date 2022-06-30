import styles from './style.module.css'
import AdminTableRow from './tableRow'
import arr from './fakeData.json'
import DivCompicated from '../../../components/common/DivCompicated'
import HadderDashbord from '../hadderdashbord'
import { useLocation } from 'react-router-dom'
import AdminArrNum from '../adminArrNum'
import { useEffect, useState } from 'react'
// Creator : Team 1 - Avi 
// yuda work
function AdminTable(props) {
    let loc = useLocation().pathname.slice(1)
    const [arrSortPage, setArrSortPage] = useState([])
    const [arrLoc, setArrLoc] = useState(1)
    useEffect(() => {
        let res = (arr.length / 5)
        let arrFake = []
        for (let i = 0; i < res; i++) {
            arrFake.push(i + 1)
        }
        setArrSortPage(arrFake)
    }
        , [])
    // console.log(arrLoc)
    function changearrLoc(op) {
        (op === '+') ? setArrLoc(arrLoc <= arrSortPage.length - 1 ? arrLoc + 1 : arrLoc)
            : setArrLoc(arrLoc > 1 ? arrLoc - 1 : arrLoc)
    }
    return <>
        < HadderDashbord />
        <div className={styles.mainDiv}>
            <DivCompicated classAll={styles.adminClassRows} isLeft={true}
                classInternal={styles.back1}
                classBack={styles.back}>
                <div className={styles.flexDivMain}>
                    <span className={styles.allFlexItem}>class name</span>
                    <span className={styles.allFlexItem}>Classroom ID</span>
                    <span className={styles.allFlexItem}>Students</span>
                    <span className={styles.allFlexItem}>Action</span>
                </div>

            </DivCompicated>
            {arr.map((v, i) => {
                if (i >= ((arrLoc - 1) * 5) && i < (arrLoc * 5)) {
                    return (
                        <DivCompicated classAll={styles.adminClassRows} isLeft={true}
                            classInternal={styles.back2}
                            classBack={styles.back}>
                            <div className={styles.flexDivMain}>
                                <span className={styles.allFlexItem}>{v.a}</span>
                                <span className={styles.allFlexItem}>{v.b}</span>
                                <span className={styles.allFlexItem}>{v.c}</span>
                                <span className={styles.allFlexItem}>Action</span>
                            </div>
                        </DivCompicated>

                    )
                }
            })}

            <div style={{ 'display': 'flex', 'width': '200px' }}>
                <AdminArrNum setArrLoc={setArrLoc} changearrLoc={changearrLoc} op={'-'} click={false} num={"<"} />
                {arrSortPage.map((v, i, arr) => <AdminArrNum arrLoc={arrLoc} setArrLoc={setArrLoc} click={false} num={i + 1} />)}
                <AdminArrNum setArrLoc={setArrLoc} changearrLoc={changearrLoc} op={'+'} click={false} num={">"} />
            </div>


        </div>

    </>
}


export default AdminTable
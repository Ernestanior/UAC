import React from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router';
export default withRouter(Index)
function Index(props) {
  React.useEffect(() => {
    SetType(props.location.state)
  }, [props.location.state])
  const [type, SetType] = React.useState(props.location.state)
  const handleItemOne = (e) => {
    SetType(e.target.outerText || e.target.parentNode.outerText)
    props.history.replace('/gba/pg', '游乐场')
  }
  const handleItemTwo = (e) => {
    SetType(e.target.outerText || e.target.parentNode.outerText)
    props.history.replace('/gba/nm', '噩梦')

  }
  const handleItemThree = (e) => {
    SetType(e.target.outerText || e.target.parentNode.outerText)
    props.history.replace('/gba/ph', 'PH')
  }
  return (
    <div className={style.subBar} >
      <div className={`${type === '游乐场' ? style.activeOne : ''} ${style.item}`} onClick={handleItemOne}><div className={`${style.subItem} ${style.One}`}><span /><span /><div className={style.ring} /><div>游乐场</div> </div></div>
      <div className={`${type === '噩梦' ? style.activeTwo : ''} ${style.item}`} onClick={handleItemTwo}><div className={`${style.subItem} ${style.Two}`}><span /><span /><div className={style.ring} /><div>噩梦</div> </div></div>
      <div className={`${type === 'PH' ? style.activeThree : ''} ${style.item}`} onClick={handleItemThree}><div className={`${style.subItem} ${style.Three}`}><span /><span /><div className={style.ring} /><div>PH</div> </div></div>
    </div>
  )
}

import React from 'react'
import style from './index.module.scss'
import SubNav from './subNav'
import Pg from './pg'
import Nm from './nm'
import Ph from './ph'
// import Star from 'component/star'
import { Route, Redirect, Switch } from 'react-router-dom'
export default function Index(props) {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  return (
    <div className={style.bg}>
      {/* <Star></Star> */}
      <SubNav types={props.location.pathname.split('/')[2]}></SubNav>
      <Switch>
        <Route path='/gba/pg' component={Pg}></Route>
        <Route path='/gba/nm' component={Nm}></Route>
        <Route path='/gba/ph' component={Ph}></Route>
        <Redirect to='/gba/pg' />
      </Switch>
    </div>
  )
}

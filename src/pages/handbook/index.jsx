import React from 'react'
import style from './index.module.scss'
import Saturn from 'component/Saturn'
import { Table } from 'antd'

export default function index() {
  const dataOne = [
    {
      key: '1',
      suit: 'Default',
      condition: '默认'
    },
    {
      key: '2',
      suit: 'Olive',
      condition: '玩75场游戏'
    }, {
      key: '3',
      suit: 'Red Tiger',
      condition: '通关噩梦模式'
    }, {
      key: '4',
      suit: 'SAS',
      condition: '通关生存枪兵连'
    }, {
      key: '5',
      suit: 'Woodland',
      condition: '通关普通模式'
    }, {
      key: '6',
      suit: 'Woodland Tiger',
      condition: '通关疯狂模式'
    }, {
      key: '7',
      suit: 'Chameleon',
      condition: '通关噩梦模式--一条命(不需要终章)'
    }, {
      key: '8',
      suit: 'OctoCamo',
      condition: '通关疯狂模式-枪兵连-大爆发'
    }, {
      key: '9',
      suit: 'Medic',
      condition: '使用医生通关噩梦模式终章'
    }, {
      key: '10',
      suit: 'Desert',
      condition: '通关生存模式-2-4名初始玩家--(不可以选择大爆发)'
    }, {
      key: '11',
      suit: 'Navy Blue',
      condition: '通关疯狂或噩梦模式-所有任务完成'
    }, {
      key: '12',
      suit: 'ABU',
      condition: '通关PMC生存-12名初始玩家-枪兵连-所有玩家撤离'
    }, {
      key: '13',
      suit: 'Snow',
      condition: '通关生存模式-12名初始玩家-T1级--(一条命)'
    }, {
      key: '14',
      suit: 'Rock Avalanche',
      condition: '通关PMC生存模式-2-4名初始玩家--(不可以选择大爆发)'
    }, {
      key: '15',
      suit: 'Gold',
      condition: '和一个开发者一起玩'
    }, {
      key: '16',
      suit: 'Rain',
      condition: '通关生存模式-2500+击杀--被攻击次数小于4次'
    }, {
      key: '17',
      suit: 'Cyber',
      condition: '完成PMC生存的奖励任务'
    }, {
      key: '18',
      suit: 'SnowRA',
      condition: '通关PMC生存模式-2-4名初始玩家-T1级'
    }, {
      key: '19',
      suit: 'BDU',
      condition: '通关PMC生存模式-12名初始玩家-枪兵连--(不能选择T3爆发)'
    }, {
      key: '20',
      suit: 'Galactic',
      condition: '使用幽灵单通PMC生存，允许任何难度'
    }, {
      key: '21',
      suit: 'Blood',
      condition: '完成困难（以上）模式-不被攻击一次'
    }, {
      key: '22',
      suit: 'Lightning',
      condition: '完成所有3个天气成就'
    }, {
      key: '23',
      suit: 'Icy',
      condition: '通关游乐场'
    }, {
      key: '24',
      suit: 'Hellfire',
      condition: '2-4名初始玩家通关游乐场'
    }, {
      key: '25',
      suit: 'Urban Snow',
      condition: '通关噩梦模式-12玩家/(终章前)没有玩家死亡'
    }]
  const columnOne = [{
    title: '军服',
    dataIndex: 'suit',
    key: 'suit',
    width: '90px'
  },
  {
    title: '条件',
    dataIndex: 'condition',
    key: 'condition'
  }
  ]
  return (
    <div className={style.bg}>
      {/* <Star></Star> */}
      <div className={style.Saturn}>
        <Saturn></Saturn>
      </div>
      <div className={style.bgc}>
        <div className={style.title}>UAC军服</div>
        <Table pagination={false} className={style.table} dataSource={dataOne} columns={columnOne} />
      </div>
    </div>
  )
}

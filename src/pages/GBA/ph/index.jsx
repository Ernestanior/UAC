import React from 'react'
import style from './index.module.scss'
import p1 from 'assets/uac/ph/1.jpg'
import p2 from 'assets/uac/ph/2.jpg'
import p3 from 'assets/uac/ph/3.png'
import p4 from 'assets/uac/ph/4.jpg'
import p5 from 'assets/uac/ph/5.jpg'
import p6 from 'assets/uac/ph/6.jpg'
import p7 from 'assets/uac/ph/7.jpg'
import p8 from 'assets/uac/ph/8.jpg'



import { Table } from 'antd'
export default function index() {
  const dataTwo = [
    {
      key: '1',
      character: 'HG',
      skill: 'VT EX',
      point: '满射击，满士兵，满弹药链，满压制，满轻武器'
    }, {
      key: '2',
      character: '幽灵',
      skill: 'IP PU',
      point: '满幽灵技能，满战斗特训，满手雷，满射击'
    }, {
      key: '3',
      character: '步兵',
      skill: 'VT TR',
      point: '2级士兵 2 级射击，满士兵满射击，满步兵技能。'
    }, {
      key: '4',
      character: '火娃',
      skill: 'WK BR',
      point: '重力雷和盾互点，之后满燃油被动，满士兵，满喷射'
    }, {
      key: '5',
      character: '医生',
      skill: 'PU IE',
      point: `1复活，满强化 满复活 满治疗 满士兵`
    }, {
      key: '6',
      character: 'SDM',
      skill: 'VT CS',
      point: `满射击，1压制，2神射 满士兵 满压制，纤维基本不用`
    }, {
      key: '7',
      character: 'CY',
      skill: 'RA MA',
      point: `1级潜行 1级速度 再1级潜行 3级力量 满潜行 满速度 满火箭弹 满压制`
    }, {
      key: '8',
      character: '轨道',
      skill: 'IP HP',
      point: `先4 级扫描，再2 级轨道炮，再2 级支援。之后点出突击队。再往后点出燃烧弹。再之后随意。`
    }, {
      key: '9',
      character: '前线',
      skill: 'AS IP',
      point: '4飞机 2士兵 满飞机 满士兵 满支援 满火炮'
    }, {
      key: '10',
      character: '排长',
      skill: '大IS VT 或 RS 小IS',
      point: '4招募 4训练 4光环 4士兵之后随意'
    }, {
      key: '11',
      character: '工头',
      skill: 'PU IP',
      point: '3工程 4炮塔 满士兵 满工程和火箭弹。'
    },]
  const columnTwo = [{
    title: '职业',
    dataIndex: 'character',
    key: 'character',
    width: '90px'
  },
  {
    title: '天赋',
    dataIndex: 'skill',
    key: 'skill',
    width: '90px'
  },
  {
    title: '加点',
    dataIndex: 'point',
    key: 'point',
  }
  ]

  return (
    <div className={style.bgc}>
      <div className={style.title}>PHANTASY攻略</div>
      <ul className={`${style.content} ${style.one}`}>
        <li>1. 职业军衔,天赋和加点</li>
        <li>士兵军衔(EN): 步兵, HG, SDM</li>
        <li>准尉军衔(WO): 双医生, 火娃, 工头, 轨道, CY, 幽灵</li>
        <li>军官军衔(CO): 火力支援专家, 排长</li>
      </ul>
      <Table pagination={false} className={style.table} dataSource={dataTwo} columns={columnTwo} />
      <div className={style.subtitle}>3. 任务流程及打法细节</div>
      <ul className={`${style.content}`}>
        <li>1. 开局准备</li>
        <li>开局下飞机，所有人下子弹然后去各自岗位一边捡物资一边升级。</li>
        <li><img style={{ 'width': '100%' }} src={p1} alt="" /></li>
        <li>幽灵CY 不缺等级，可以担任主要物资小队，不和其他人抢经验。</li>
        <li>PH 模式开局就会掉高级物资(SOF,X900/92,DU,OPA…),所以轨道落地先
          点 4 级扫描加快队伍装备的成型时间，优先扫配件(AA,PA,AP,DU，
          视觉增强)和主输出的武器，还有前线的火箭鞋和 OPA，30 分钟等家
          里配件齐全之后开始扫肌肉。</li>
        <li>开局 3 分钟巴拉德会掉若干物资，包括 2 个小飞机和 1 个核能电池，
          其中 1 个小飞机可以给家里医生方便清周围的尼玛虫，另一个给前
          线去单吃升级，核能电池可以给轨道加快扫描冷却。</li>
        <li>PH 模式下的怪均为增强怪，移速血量和攻击力得到大幅增强，10 分
          钟之后每过 5 分钟会刷固定量的 T1，其中包含若干流光 T1(移速超
          快)，外出的人员请保持警惕。</li>
      </ul>
      <ul className={`${style.content}`}>
        <li>2.每波打法</li>
        <li className={style.orange}>十分钟：</li>
        <li>10分钟左右会开启发电机任务和实验室任务，实验室可以
          CY 或者前线去，发电机可以让幽灵CY 去充电，也可以让就近的人去充电。前线可以先在地图右下角准备些电池和血清方便拉熔岩虫。</li>
        <li className={style.orange}>十七分钟：</li>
        <li>所有人回到巴拉德3楼准备正式开始游戏，妈妈船会在
          17分45秒飞走。轨道C打前门，后门CY战地，2楼高台幽灵战地，
          3 楼上方SDM 战地，工头按游乐场打法放沙包和 79,44 炮台，位置如下。双医生强化给 HG 和 SDM，SDM 打 T1 的同时负责清理尼玛虫和迫击炮。火娃负责封 3 楼路口防止怪上楼。</li>
        <li><img style={{ 'width': '100%' }} src={p2} alt="" /></li>
        <li className={style.orange}>二十三分钟：</li>
        <li>幕(mu)然降临关卡，所有人进入夜视仪效果，小地图会被禁，这波主要怪为夜行蟑螂，夜间时候为无敌状态，只有往它头上打信号弹才打得动它，所以幽灵双医生和火娃捏好自己手中的信号弹，前线大信号弹打后门。等天亮小地图解禁之后，轨道继续扫物资，把感染压到 1 之后，非输出职业带着空弹药箱去周围找找子弹和物资，物资小队(CY,幽灵)可以去远的地方找物资。</li>
        <li className={style.orange}>三十分钟：</li>
        <li>量子逃逸关卡，所有人站着输出不要趴着，这波开始会 掉柱子(危险性不高，烦人性极强)，输出优先打柱子，左边会出现一个紫色读条(空间粒子异常活跃度)，当读条满了之后会开启传送， 地上会出现若干绿色方块，会传送方块里的人(怪物不会被传送)到地图上的任意位置,所以要在方块出来之后躲避方块，感染不高的情况 下，物资小队可以利用方块传送出去捡物资。</li>
        <li className={style.orange}>三十五分钟：主要威胁为菌摊虫，大黑，熔岩虫，正负电极</li>
        <li>前线装备为：两个小飞机，OPA，火箭鞋， 1组电池，1组血清，火箭鞋可以预防突发情况，比如大黑蓝强菌摊虫刷脸，前线在35分钟前赶往实验室下方就位等待熔岩虫，熔岩虫出现之后给其标记，将其拉往地图右下角，用双小飞机和技能将其击杀。无意 外的话可以在 40 分钟左右连同小熔岩虫都磨死，如果出现意外情况， 比如撞脸大黑蓝强，或者觉得单吃效率不高，可以选择到巴拉德右 下方拉熔岩虫让家里帮忙输出(容错率低，不太推荐)。</li>
        <li>所有人站着输出不要趴着，37 分钟左右开启电极，同极可以互贴， 如果你和其他队友互为异性电极(你头上的图案和别人不一样)，两 人靠太近会导电，对双方造成大量伤害。此时3楼所有人分散站位， 位置如下：</li>
        <li><img style={{ 'width': '100%' }} src={p3} alt="" /></li>
        <li>站外围的人记得带血包和血清，防止被迫击炮或者尼玛虫打死。</li>
        <li>工头如果控制不好电极，可以在自己位置往脚下放沙包，不用往内圈放沙包，防止为了放沙包电死其他人。</li>
        <li className={style.orange}>医生电极救人技巧：</li>
        <li>在拉人的时候可以站在救人范围的极限距离拉人，然后在救人的时候，用shift队列往其他地方跳或者shift加速跑，这样的话等到完成救人的行为之后，本体会立刻跳走，这样就不会因为救起来的人身上带着和医生相反的电极而又被电死。</li>
        <li>刚救起来的人是带有电极的，但是不会显示在头上，只能等下一波电极才会显示，如果你猜不到他带的是什么电极的话，切勿靠近他。</li>
        <li className={style.orange}>四十分钟：主要威胁:电极,传送方块，视角翻转，蓝强</li>
        <li>所有人站着输出不要趴着，电极会持续到45分钟，所以还是分散站位，42分20秒开始会开启传送和视角翻转，此时传送，视角翻转和电极会一同存在，在每次视角翻转的时候，所有人通过按快捷键 1
          来重新定位本体位置，并且通过加速跑来躲避方块(不推荐用跳跃来躲避，万一你和附近队友同时用跳跃躲避方块，并且你俩互为异性电极，那么大概率不死你死就是我亡)，轨道在完成扫描工作之后， 把核电池给CY。</li>
        <li>家里提前把电池和医疗物资放到2楼右上方，方便CY提取，物资切记别贴墙放，会出现贴墙拿不到物资的bug。</li>
        <li><img style={{ 'width': '100%' }} src={p4} alt="" /></li>
        <li className={style.orange}>CY 装备：核电池，1组电池，2组血包， OPA，火箭鞋</li>
        <li>CY 站在前门开城墙帮忙抗怪，在有核电池的情况下CY 的城墙耗蓝很低。</li>
        <li>如果万一有人被传送出去，在视角翻转的情况下，鼠标点击小地图来移动往家里跑。如果传送的地方离家太远，也可以选择在下一次
          传送时跳进方块，赌它能把你传送回去。</li>
        <li className={style.orange}>四十五分钟：主要威胁：二哈，火脑虫，虚空脑虫</li>
        <li>电极会在45分15秒后消失，之后所有人集合往左靠。CY提前到2楼左下位置就位(下图)，如果遇到二哈刷脸则用城墙抗住，遇到火脑虫刷脸就开枪吸引仇恨往右边横向拉火脑虫，切记别用城墙抗火脑虫。</li>
        <li><img style={{ 'width': '100%' }} src={p5} alt="" /></li>
        <li>如果左边和下边都没刷巨头，则跑到前门开城墙抗怪</li>
        <li><img style={{ 'width': '100%' }} src={p6} alt="" /></li>
        <li>轨道往巴拉德上方丢轨道突击队，太阳能留着给虚空脑虫</li>
        <li>幽灵切干扰弹，专门打3巨头和灌灌，前门看情况离子炮</li>
        <li>前线大烟雾弹封路，i.4 s10 火炮不要断</li>
        <li>排长开ZC</li>
        <li>工头在二哈和火脑虫死了之后把沙包全打掉，只在3楼最左边放沙包(防止右上虚空脑虫被沙包吸引上 3L)</li>
        <li><img style={{ 'width': '100%' }} src={p7} alt="" /></li>
        <li>火娃烟雾和重力雷封住路口别让怪上楼，同时在没沙包的情况下开盾抗住上楼的白熊和其他t1，随时准备在CY扛死之后接替CY的位置</li>
        <li>所有人往左靠，所有输出优先集火火脑虫，再集火二哈，之后优先处理沙虫，白熊，大米和跨地形T1，再处理后门要上楼的怪，再处理CY旁边的怪</li>
        <li>二哈和火脑虫死后，虚空脑虫会从实验室右上角的固定位置出来，在它到巴拉德之前，CY提前给自己贴几个血包，然后贴3楼的墙让
          医生打止痛剂和输血，在扛虚空脑虫的过程中注意自身的蓝量，幽灵干扰弹不要断，有灌灌时也给灌灌来几发。</li>
        <li>核弹炸前门路口，注意别炸太近小心核辐射弄死CY。所有输出先不要管虚空脑虫，依然先处理沙虫，白熊，大米和跨地形 T1，再处理后门要上楼的怪，等确保家里处在安全地段之后再开始打虚空脑虫。</li>
        <li><img style={{ 'width': '100%' }} src={p8} alt="" /></li>
      </ul>
    </div>
  )
}

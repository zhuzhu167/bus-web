const station = [
  '洋滨',
  '下蓬中学',
  '如龙工业园',
  '广厦广播电视大学',
  '汕大附二医院',
  '红荔园',
  '金禧中学东',
  '葵花园',
  '金禧花园东',
  '荷花园',
  '金墩园',
  '市福利院',
  '桃园西',
  '桃园',
  '海棠园',
  '龙湖宾馆西',
  '金环路中',
  '菊园',
  '梅园',
  '长平东厦路口',
  '体育学校',
  '华侨大厦',
  '中心医院',
  '东征军纪念馆',
  '外马新兴路口',
  '外马邮电局',
  '外马第三小学',
  '汕头开埠文化馆',
  '商平外马路口',
  '西堤码头',
  '火车站',
  '客运中心站',
  '经纬广场',
  '黄山珠池路口',
  '珠池黄山路口',
  '华丽家园',
  '珠池邮电局',
  '珠池衡山路口',
  '明珠广场',
  '汕头电脑城',
  '全球通大厦',
  '金海湾大酒店',
  '君华大酒店',
  '金乐大酒店',
  '国际大酒店',
  '金砂公园(汕头侨中)',
  '汕头中旅',
  '春梅里',
  '花园里',
  '公园头',
  '金凤坛东',
  '小公园',
  '万吉工业区',
  '龟桥北路',
  '超声集团',
  '水果批发市场',
  '火车货站',
  '农副产品批发市场',
  '嵩山东厦路口',
  '汕头聿怀实验学校',
  '夏桂埔',
  '阳光工业园西',
  '黄河嵩山路口',
  '亚洲花园',
  '高新电脑中心',
  '黄河路西',
  '玫瑰园',
  '芙蓉园',
  '金平区人民医院东',
  '东厦中学',
  '汕大附一医院',
  '东厦小学北校区',
  '中山金新路口',
  '陵海',
  '汕头一中',
  '总工会',
  '招商横路',
  '华新城',
  '潮汕澄海路口',
  '岐山中学',
  '中岐(潮汕路）',
  '下岐(潮汕路）',
  '农业科技园',
  '电视塔',
  '光华路口',
  '汽车总站北',
  '汽车总站',
  '金砂西路',
  '长江大北山路口',
  '长江通讯城',
  '龙湖村北',
  '林百欣中学',
  '华美花园北',
  '嵩山海河路口',
  '中医药学校',
  '嘉顿小镇',
  '桂花小学',
  '金禧花园南',
  '汕樟华山路口',
  '汕樟凤凰山路口',
  '东墩',
  '汕樟金凤路口',
  '汕樟金湖路口',
  '金砂侨社',
  '金砂乡西',
  '大华金砂路口',
  '大华路中',
  '叠金工业区',
  '汕头大学西站',
  '汕头大学',
  '广东以色列理工学院',
  '龙泉岩',
  '鮀浦',
  '鮀中路口',
  '桥头',
  '教师公寓',
  '乐业园',
  '安居长兴苑',
  '安居工程',
  '北郊公园',
  '大学路头',
  '市潮剧院',
  '第四人民医院',
  '龙湖人民医院东',
  '潮安汽车站',
  '开濠',
  '灰路头',
  '振兴路',
  '长春路',
  '竹围乡',
  '铁桥',
  '葫芦市',
  '砚前',
  '潮汕青年路口',
  '月浦(粤东博览中心)',
  '月浦中',
  '岐山客运站',
  '星湖城西',
  '帝豪酒店西',
  '潮华雅居东',
  '逸景蓝湾西',
  '阳光海岸南',
  '儿童公园',
  '澳头村东',
  '澳头村西',
  '华能电厂',
  '汕头迎宾花园',
  '北山湾泳场',
  '粤东高级技工学校',
  '汕头职业技术学院北门',
  '汕头职业技术学院南门',
  '东湖村',
  '南湖村',
  '汕头党校',
  '汕头技师学院',
  '埭头',
  '达濠青洲',
  '达濠青盐',
  '青云岩路口',
  '濠江侨中',
  '濠江水厂',
  '濠江区法院',
  '濠江区政府',
  '濠江花园',
  '西园',
  '花园宾馆',
  '琪雅路口',
  '衡山北路',
  '华山黄河路口',
  '华山练江路口',
  '龙湖村西',
  '金珠园',
  '外语外贸学校',
  '碧霞庄西',
  '时代广场南',
  '中区大厦',
  '东方公园',
  '市二医院',
  '衡山路北',
  '黄河衡山路口',
  '市第一中学',
  '市中心医院',
  '市第二人民医院',
  '汕头火车站',
  '经纬源家园',
  '星海华庭',
  '珠江路中',
  '绿茵庄南',
  '绿茵庄西',
  '紫云庄',
  '金砂公园',
  '杏花桥东',
  '潮汕光华路口',
  '太安医院',
  '市第十一中学',
  '光华厦岭路口',
  '光华路西',
  '乌桥',
  '福平韩堤路口',
  '金凤坛南',
  '西堤客运站',
  '金平文化创意园',
  '上人家',
  '蜈田',
  '南滨海旁路口',
  '市第三人民医院',
  '礐石风景区',
  '礐石中专',
  '天坛花园',
  '礐石南滨绿道'

]
export default station

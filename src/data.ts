export const destinations = [
  { id: 'museum', name: '成就博物馆', en: 'ACHIEVEMENT MUSEUM', short: '博物馆', color: '#bc9350', x: 30, y: 29, description: '那些打过的关，都会变成闪闪发光的回忆。' },
  { id: 'studio', name: 'Glass Heaven 工作室', en: 'GLASS HEAVEN STUDIO', short: '工作室', color: '#8f8bbd', x: 64, y: 25, description: '在夜之城之外，继续构建故事的可能。' },
  { id: 'post', name: '诗歌邮局', en: 'POETRY POST OFFICE', short: '邮局', color: '#cc8276', x: 22, y: 59, description: '把江城的风和秋夜，寄给偶然路过的你。' },
  { id: 'lab', name: 'AI 实验室', en: 'AI EXPERIMENT LAB', short: '实验室', color: '#568f9e', x: 77, y: 52, description: '一点好奇，一些尝试，还有下一次实验。' },
  { id: 'cabin', name: '学习小屋', en: 'LEARNING CABIN', short: '小屋', color: '#78955c', x: 51, y: 65, description: '慢慢积累，让下一个想法有能力落地。' },
] as const;
export type DestinationId = typeof destinations[number]['id'];
export type Destination = typeof destinations[number];
export const games = [
  { title: '赛博朋克 2077', subtitle: 'CYBERPUNK 2077', count: '57 / 57', color: '#dec26d', mark: '2077', detail: '已收集 57 项成就，共 57 项。夜之城的这一段旅程，已留下完整的成就记录。' },
  { title: '只狼：影逝二度', subtitle: 'SEKIRO · SHADOWS DIE TWICE', count: '34 / 34', color: '#cd9a85', mark: '狼', detail: '已收集 34 项成就，共 34 项。全成就记录已完成。' },
  { title: '漫威蜘蛛侠 2', subtitle: 'MARVEL’S SPIDER-MAN 2', count: '已全成就', color: '#8ba5bb', mark: 'II', detail: '已完成全成就。当前资料未提供成就总数，因此不展示未经确认的数量。' },
];
export const routes = ['BLUE', 'AURELIA', 'OPEN SKY', 'ASHES'] as const;
export const poems = ['江城归渡', '秋夜江城'] as const;
export const experiments = [
  { title: 'Jack Model Arena', type: '模型实验', text: '模型比较与体验记录的项目档案。' },
  { title: 'Jack Game Lab', type: '游戏实验', text: '围绕游戏体验的个人实验空间。' },
  { title: '多 Agent 实验', type: '协作实验', text: '探索多个 Agent 的分工与协作。' },
  { title: 'AI 工具研究', type: '工具笔记', text: '记录工具的使用体验与研究问题。' },
];
export const learning = ['Python', '数据结构', 'Git / GitHub', '项目实践', 'Unity / C#'];

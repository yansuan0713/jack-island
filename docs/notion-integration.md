# Notion 首页集成建议

以下为建议；本项目不访问或修改 Notion 工作区。

## 首页入口

标题：**Jack's Island · 去我的小岛坐坐**

描述：**探索我的游戏收藏、诗歌、Glass Heaven 工作室与 AI 实验，顺手收集五枚旅行邮戳。**

链接：https://yansuan0713.github.io/jack-island/

建议用 Callout 放标题、描述和“进入小岛”链接，或粘贴链接选择 Bookmark。自动书签预览取决于 Notion 抓取结果，不保证使用指定截图。

## 封面预览

推荐白天全岛地图作为主要视觉，夜间作为备选。可使用 `docs/images/desktop-day.jpg`。Notion 封面会随窗口宽度裁切，地图主体应放在中心安全区域；标题放在正文以保持可读。上传后用 Reposition 调整。封面是静态预览，在正文保留显式站点链接，方便手机直接打开。

## /embed

1. 在 Notion 页面输入 `/embed` 并选中 Embed。
2. 粘贴正式 HTTPS 网址 `https://yansuan0713.github.io/jack-island/`。
3. 将嵌入块拉宽；桌面可先尝试约 800–1000px 高度，再按页面调整。
4. 旁边保留“在浏览器打开小岛”的普通链接。

## 兼容性与验证

- Notion 支持 URL 嵌入，但目标站点若由 `X-Frame-Options` 或 CSP `frame-ancestors` 禁止 iframe，可能无法显示。本站发布验收时未观察到这两种限制性响应头；这不等于已经在 Notion 实测成功。
- 嵌入宽度可能触发手机布局，面板出现在地图下方；要允许嵌入块内滚动。
- 浏览器隐私策略可能分区或禁止 iframe 内 localStorage。邮戳进度可能与独立浏览器不共享；禁止保存时仍能探索，但刷新可能丢失进度。
- 手机 Notion App 内嵌体验需在实际设备验收；若高度或滚动不便，使用外部浏览器链接。
- 页面没有登录、自动播放音频或 Notion API，不需要额外账户权限。

官方说明：[Notion embeds, bookmarks and link mentions](https://www.notion.com/help/embed-and-connect-other-apps)。

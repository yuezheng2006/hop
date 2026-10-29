// Shared by the Electron main process and the sandboxed renderer.
(function (root) {
  const zh = {
  "Looking for nearby devices": "正在查找附近设备",
  "Open Hop on another computer on the same Wi‑Fi network.": "在同一 Wi-Fi 网络的另一台电脑上打开 Hop。",
  "Drag files onto a device to send them": "将文件拖到设备上即可发送",
  "Or click a device to choose files.": "也可以点击设备选择文件。",
  "Sent": "已发送",
  "Received": "已接收",
  "Declined": "已拒绝",
  "Failed": "失败",
  "Waiting…": "等待接收…",
  "Sending": "正在发送",
  "Receiving": "正在接收",
  "No devices nearby": "附近没有设备",
  "Drop onto a device": "拖放到设备上",
  "Drop the files right onto a device.": "请将文件直接拖到设备上。",
  "There are no devices nearby yet.": "暂未发现附近设备。",
  "Wait for the current transfer to finish.": "请等待当前传输完成。",
  "Always accept from this device": "始终接收此设备发来的文件",
  "Decline": "拒绝",
  "Accept": "接收",
  "Done": "完成",
  "Show in Finder": "在访达中显示",
  "Show in Folder": "在文件夹中显示",
  "This Mac": "这台 Mac",
  "This PC": "这台 PC",
  "This device": "本机",
  "Open Hop": "打开 Hop",
  "Show Received Files": "查看收到的文件",
  "Quit Hop": "退出 Hop",
  "This device is no longer online.": "此设备已离线。",
  "Choose Files to Send": "选择要发送的文件",
  "Send": "发送",
  "Choose Where to Save Received Files": "选择接收文件的保存位置",
  "Choose": "选择",
  "Hop couldn’t start": "Hop 无法启动",
  "Appearance": "外观",
  "Automatic": "跟随系统",
  "Light": "浅色",
  "Dark": "深色",
  "Click to rename": "点击重命名",
  "Saving to": "保存到",
  "Change…": "更改…",
  "{0} and {1} more": "{0} 等 {1} 个其他项目",
  "Release to send to {0}": "松开发送给 {0}",
  "{0} would like to share": "{0} 想要分享文件",
  "{0} more": "另有 {0} 项",
  "Receiving from {0}": "正在接收来自 {0} 的文件",
  "Received from {0}": "已接收来自 {0} 的文件",
  "The transfer from {0} was interrupted.": "来自 {0} 的传输已中断。",
  "Couldn’t send: {0}": "发送失败：{0}",
  "{0} of {1} · {2}%": "{0} / {1} · {2}%",
  "Forget {0}": "取消信任：{0}",
  "{0} would like to share {1}.": "{0} 想要分享 {1}。",
  "{0} sent you {1}.": "{0} 发来了 {1}。",
  "file": "个文件",
  "files": "个文件",
  "byte": "字节",
  "bytes": "字节",
  "trusted device": "台受信任设备",
  "trusted devices": "台受信任设备"
};
  function normalize(value) { return /^zh(?:-|_|$)/i.test(value || '') ? 'zh-CN' : 'en'; }
  function create(locale) {
    const language = normalize(locale);
    return (key, ...values) => (language === 'zh-CN' && Object.hasOwn(zh, key) ? zh[key] : key)
      .replace(/\{(\d+)\}/g, (_, index) => String(values[index] ?? ''));
  }
  // Keep protocol and operating system diagnostics intact unless a translation is known.
  const api = { normalize, create };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.hopI18n = api;
})(globalThis);

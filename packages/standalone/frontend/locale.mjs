const TEXT = Object.freeze({
  "工作空间": "Workspace",
  "概览": "Overview",
  "模型工作台（magpie）": "Model workspace (magpie)",
  "客户端与订阅": "Clients & subscriptions",
  "模型清单": "Model catalog",
  "用量统计": "Usage",
  "资源库": "Library",
  "渠道与连接": "Channels & connections",
  "聚合渠道": "API providers",
  "路由组": "Routing groups",
  "EAC 协付渠道": "EAC partner channel",
  "API 接入": "API access",
  "管理": "Management",
  "插件中心": "Plugin Center",
  "服务设置": "Service settings",
  "应用更新": "App updates",
  "项目支持": "Project support",
  "来自赞助商的广告": "Sponsor message",
  "反馈与许愿": "Feedback & ideas",
  "本地模型工作台": "Local model workspace",
  "个人工作空间": "Personal workspace",
  "独立本地服务": "Standalone local service",
  "独立本地存储": "Isolated local storage",
  "本机运行 / 仅监听回环地址": "Runs locally / loopback only",
  "在线": "Online",
  "本机": "This device",
  "使用须知与免责声明": "Usage notes & disclaimer",
  "本地服务": "Local service",
  "推理已暂停": "Inference paused",
  "切换到浅色主题": "Switch to light theme",
  "切换到深色主题": "Switch to dark theme",
  "退出管理": "Sign out",
  "连接你的本地服务": "Connect to your local service",
  "使用启动时打印的一次性链接，或输入保存在本机的登录令牌。": "Use the one-time link printed at startup, or enter the login token stored on this device.",
  "本机管理令牌": "Local management token",
  "进入控制台": "Open console",
  "没有令牌？从本机获取": "No token? Get it from this device",
  "当前系统不支持自动打开终端，请展开下方说明手动获取令牌。": "This system cannot open a terminal automatically. Expand the instructions below to retrieve the token manually.",
  "手动获取与其他系统": "Manual setup and other systems",
  "默认位置：用户目录下的": "Default location: in your user folder,",
  "，取": ", read the",
  "字段。": "field.",
  "获取令牌命令（默认目录）": "Token retrieval command (default location)",
  "复制获取令牌命令": "Copy token command",
  "登录仅用于本机管理。会话在 8 小时后或服务重启后失效。": "Sign-in is only for local administration. The session expires after 8 hours or when the service restarts.",
  "正在连接本地服务…": "Connecting to the local service…",
  "正在加载渠道管理…": "Loading channel management…",
  "正在加载页面…": "Loading page…",
  "当前为本机替身测试模式：账号、模型回答与额度均为测试数据。": "Local mock mode is active: accounts, model responses, and quotas are test data.",
  "关闭": "Close",
  "重试": "Retry",
  "本地运行 · 由你掌控": "Runs locally · Under your control",
  "工作空间概览": "Workspace overview",
  "查看你的模型连接与运行情况。": "View your model connections and runtime status.",
  "更新状态": "Refresh status",
  "正在更新": "Refreshing…",
  "当前公开的模型清单": "Currently listed models",
  "用户回合": "User turns",
  "累计 Token": "Total tokens",
  "已恢复回合": "Recovered turns",
  "最终未完成": "Ultimately incomplete",
  "匿名与 Kilo": "Anonymous & Kilo",
  "无需账号的免费模型": "Free models with no account required",
  "已保存本机授权": "Local authorization saved",
  "尚未保存本机授权": "No local authorization saved",
  "Token 用量": "Token usage",
  "最近 7 天的输入与输出": "Input and output over the last 7 days",
  "最近 7 天": "Last 7 days",
  "还没有调用记录": "No requests recorded yet",
  "接入客户端后，用量会显示在这里": "Usage will appear here after you connect a client",
  "按实际请求记录统计": "Based on actual recorded requests",
  "查看全部用量": "View all usage",
  "OpenAI 兼容 · Chat Completions / Responses": "OpenAI-compatible · Chat Completions / Responses",
  "地址已复制": "Address copied",
  "管理会话：本机独立会话": "Management session: isolated local session",
  "推理鉴权：Bearer API Key": "Inference authentication: Bearer API key",
  "监听范围：仅回环地址": "Listening scope: loopback only",
  "查看接入配置": "View connection settings",
  "推理服务已启用": "Inference service enabled",
  "推理服务已暂停": "Inference service paused",
  "模型来源": "Model sources",
  "所有渠道，共用一个接入地址": "All channels share one connection address",
  "运行检查": "Runtime checks",
  "服务与最近的失败请求": "Service status and recent failed requests",
  "有失败记录": "Failures recorded",
  "暂无失败记录": "No failures recorded",
  "渠道模块": "Channel module",
  "已就绪": "Ready",
  "加载失败": "Failed to load",
  "初始化中": "Initializing",
  "模型自动刷新": "Automatic model refresh",
  "已暂停": "Paused",
  "最近的请求样本中没有失败记录": "No failures in recent request samples",
  "数据仅保存在本机独立目录": "Data is stored only in the isolated local directory",
  "已安装客户端": "Installed clients",
  "运行中": "Running",
  "已启用订阅": "Active subscriptions",
  "第三方 API 接入": "Third-party API connections",
  "正在检测客户端": "Detecting clients",
  "服务未返回可配置的客户端": "The service did not return any configurable clients",
  "重新检测": "Detect again",
  "订阅与额度": "Subscriptions & quotas",
  "本机发现": "Discovered locally",
  "本机订阅": "Local subscriptions",
  "可导入": "Available to import",
  "未发现": "Not detected",
  "未发现本机订阅": "No local subscriptions detected",
  "搜索订阅": "Search subscriptions",
  "搜索账号、供应商或方案": "Search accounts, providers, or plans",
  "订阅账号": "Subscription accounts",
  "5 小时": "5 hours",
  "每周": "Weekly",
  "额度查询已完成。": "Quota check completed.",
  "本机订阅已导入。": "Local subscription imported.",
  "订阅设置已更新。": "Subscription settings updated.",
  "已接入本地网关。": "Connected to the local gateway.",
  "已断开本地网关。": "Disconnected from the local gateway.",
  "请设置客户端可执行文件的绝对路径。": "Set the absolute path to the client executable.",
  "桌面应用": "Desktop app",
  "命令行客户端": "CLI client",
  "选择网关模型": "Select a gateway model",
  "客户端默认模型": "Client default model",
  "手动指定路径": "Specify path manually",
  "工作目录": "Working directory",
  "接入方式": "Connection mode",
  "第三方 API · 本地网关": "Third-party API · local gateway",
  "客户端原生配置": "Native client configuration",
  "可执行文件": "Executable",
  "已检测到": "Detected",
  "未检测到": "Not detected",
  "未知": "Unknown",
  "保存": "Save",
  "最近启动": "Last launched",
  "导入方式": "Import method",
  "JSON 凭据": "JSON credentials",
  "JSON 文件": "JSON file",
  "供应商": "Provider",
  "第三方 API": "Third-party API",
  "Codex 订阅": "Codex subscription",
  "Claude 订阅": "Claude subscription",
  "Gemini 订阅": "Gemini subscription",
  "账号名称": "Account name",
  "凭据 JSON": "Credential JSON",
  "选择本机 JSON 凭据文件": "Choose a local JSON credential file",
  "API 地址": "API URL",
  "协议": "Protocol",
  "模型 ID": "Model ID",
  "仅管理额度": "Manage quota only",
  "取消": "Cancel",
  "导入订阅": "Import subscription",
  "已启用": "Enabled",
  "已停用": "Disabled",
  "停止": "Stop",
  "启动": "Start",
  "选择 JSON 凭据文件": "Choose JSON credential file",
  "5 小时 / 每周额度": "5-hour / weekly quota",
  "确认移除": "Confirm removal",
  "没有匹配的订阅": "No matching subscriptions",
  "正在读取订阅": "Loading subscriptions",
  "尚无订阅账号": "No subscription accounts yet",
  "清除搜索": "Clear search",
  "未设置 API 地址": "API URL is not set",
  "请输入不含用户名和密码的 HTTP(S) API 地址。": "Enter an HTTP(S) API URL without a username or password.",
  "请输入 API Key。": "Enter an API key.",
  "渠道配置已保存。": "Provider settings saved.",
  "连接测试未通过，请检查 API 地址、密钥与模型。": "Connection test failed. Check the API URL, key, and model.",
  "连接测试通过。": "Connection test passed.",
  "测试请求已完成，服务未返回明确的通过状态。": "The test request completed, but the service did not return a clear success status.",
  "输入 API Key": "Enter API key",
  "每行一个模型 ID": "One model ID per line",
  "启用渠道": "Enable provider",
  "测试连接": "Test connection",
  "发现模型": "Discover models",
  "保存配置": "Save settings",
  "保存并连接": "Save and connect",
  "移除本机渠道配置？": "Remove this local provider configuration?",
  "移除连接": "Remove connection",
  "第三方 API 与自有密钥": "Third-party APIs and your own keys",
  "全部渠道": "All providers",
  "全部分类": "All categories",
  "已连接": "Connected",
  "未连接": "Not connected",
  "搜索聚合渠道": "Search API providers",
  "搜索渠道、地址或协议": "Search providers, URLs, or protocols",
  "渠道分类": "Provider category",
  "连接状态": "Connection status",
  "协议 / 模型 / 连接状态": "Protocol / model / connection status",
  "正在读取渠道目录": "Loading provider directory",
  "没有匹配的渠道": "No matching providers",
  "渠道目录为空": "Provider directory is empty",
  "清除筛选": "Clear filters",
  "提示词": "Prompt",
  "技能": "Skills",
  "请输入有效的方案名称（最多 80 字）。": "Enter a valid profile name (up to 80 characters).",
  "新建资源": "New resource",
  "保存当前配置": "Save current configuration",
  "资源已保存。": "Resource saved.",
  "当前客户端配置已保存为方案。": "Current client settings saved as a profile.",
  "名称": "Name",
  "类型": "Type",
  "启用资源": "Enable resource",
  "保存资源": "Save resource",
  "方案名称": "Profile name",
  "保存方案": "Save profile",
  "全部类型": "All types",
  "删除资源": "Delete resource",
  "应用": "Apply",
  "客户端默认": "Client default",
  "自动检测": "Auto-detect",
  "正在读取资源库": "Loading library",
  "没有匹配的结果": "No matching results",
  "尚无资源": "No resources yet",
  "尚无配置方案": "No saved profiles yet",
  "在应用内管理渠道、账号与模型；改动会同步进模型清单。": "Manage providers, accounts, and models in the app; changes sync to the model catalog.",
  "正在启动模型工作台…": "Starting model workspace…",
  "模型工作台未能启动": "Model workspace could not start",
  "重新加载": "Reload",
  "插件页面未能加载": "Plugin page could not be loaded",
  "页面文件可能已被卸载或完整性校验失败。可以回到插件中心重新安装。": "The page file may have been removed or failed its integrity check. Return to Plugin Center and reinstall it.",
  "正在加载插件页面…": "Loading plugin page…",
  "调整本机推理与模型刷新，保存后生效。": "Configure local inference and model refresh. Changes take effect when saved.",
  "推理与模型": "Inference & models",
  "控制客户端调用与模型展示。": "Control client requests and model visibility.",
  "模型刷新": "Model refresh",
  "管理模型清单的周期更新与探测。": "Manage scheduled catalog refreshes and availability checks.",
  "免费车道出口": "Free-lane exits",
  "只让 OpenCode 免费车道走这些出口；免费额度按出口 IP 计数。": "Use these exits only for the OpenCode free lane; free quotas are counted by exit IP.",
  "出口地址（一行一条）": "Exit addresses (one per line)",
  "地址按凭据对待：面板只显示掩码，改动请整段重新粘贴；留空则保持已存列表不变。": "Treat these addresses as credentials: the panel shows masked values only. Paste the full list again to change it; leave blank to keep the saved list.",
  "当前出口": "Current exits",
  "未配置专属出口，回落到全局出口或直连。": "No dedicated exits configured; the global exit or direct connection will be used.",
  "冷却中的出口会在本回合被跳过。": "Exits in cooldown are skipped for this turn.",
  "出口冷却": "Exit cooldown",
  "上游解除封禁后，可用这里立即恢复全部出口。": "After the upstream block is lifted, use this to restore all exits immediately.",
  "清除冷却": "Clear cooldown",
  "正在清除": "Clearing…",
  "有尚未保存的修改": "You have unsaved changes",
  "当前设置已同步": "Settings are up to date",
  "撤销修改": "Discard changes",
  "保存设置": "Save settings",
  "配置保存在当前独立服务的数据目录中。页面读取和保存设置不会直接发送模型推理请求。": "Settings are stored in this standalone service's data directory. Viewing or saving this page does not send model inference requests.",
  "自动探测可用性（已停用）": "Automatic availability checks (disabled)",
  "显示地区受限模型": "Show region-restricted models",
  "启用推理服务": "Enable inference service",
  "自动恢复断流": "Automatically recover interrupted streams",
  "全部能力": "All capabilities",
  "纯文本": "Text only",
  "支持视觉": "Vision",
  "支持思考": "Reasoning",
  "全部状态": "All statuses",
  "取消测试": "Cancel test",
  "测试": "Test",
  "模型 / ID": "Model / ID",
  "渠道与能力": "Provider & capabilities",
  "上下文 / 输出": "Context / output",
  "可用状态": "Availability",
  "操作": "Actions",
  "视觉": "Vision",
  "思考": "Reasoning",
  "上下文": "Context",
  "输出": "Output",
  "未公开": "Not exposed",
  "已探测可用": "Verified available",
  "清单已收录": "Listed",
  "未探测": "Not checked",
  "不可用": "Unavailable",
  "限流中": "Rate limited",
  "地区受限": "Region restricted",
  "匿名模型": "Anonymous model",
  "Kilo 免费池": "Kilo free pool",
  "EAC 协付": "EAC partner",
  "没有匹配的模型": "No matching models",
  "模型清单为空": "Model catalog is empty",
  "调整搜索条件或清空筛选。": "Adjust your search or clear the filters.",
  "刷新清单后重试，或检查渠道连接。": "Refresh the catalog and try again, or check provider connections.",
  "主动探测和测试会产生推理请求": "Manual checks and tests send inference requests",
  "清单收录不代表实时可用。Kilo 免费池可能记录提示词，请勿发送敏感内容。": "Being listed does not guarantee live availability. The Kilo free pool may log prompts; do not send sensitive information.",
  "渠道插件": "Channel plugins",
  "增强插件": "Enhancement plugins",
  "页面插件": "Page plugins",
  "组合插件": "Bundle plugins",
  "安装": "Install",
  "本地安装": "Install locally",
  "卸载": "Uninstall",
  "启停": "Enable / disable",
  "配置": "Configure",
  "密钥": "Secret",
  "自检": "Self-test",
  "刷新市场": "Refresh marketplace",
  "自动更新": "Auto-update",
  "渠道 + 页面": "Channel + page",
  "增强 + 页面": "Enhancement + page",
  "插件": "Plugins",
  "启动中": "Starting",
  "已停止": "Stopped",
  "等待依赖": "Waiting for dependencies",
  "失败": "Failed",
  "本地存储": "Local storage",
  "无额外权限": "No additional permissions",
  "插件中心加载失败": "Failed to load Plugin Center",
  "设置保存失败": "Failed to save settings",
  "插件市场已刷新": "Marketplace refreshed",
  "市场刷新失败": "Marketplace refresh failed",
  "未验证": "Unverified",
  "开发者包": "Developer package",
  "收起配置": "Collapse settings",
  "打开": "Open",
  "保存中…": "Saving…",
  "尚未设置": "Not set",
  "全部更新": "Update all",
  "自动更新插件": "Automatically update plugins",
  "本地内置快照": "Local built-in snapshot",
  "按类型筛选": "Filter by type",
  "全部": "All",
  "渠道": "Channels",
  "增强": "Enhancements",
  "页面": "Pages",
  "停用": "Disable",
  "安装插件": "Install plugin",
  "更新": "Update",
  "这个插件没有可配置项。": "This plugin has no configurable options.",
  "配置已保存": "Settings saved",
  "密钥已保存": "Secret saved",
  "内置": "Built-in",
  "渠道、增强与页面都走同一套签名清单、权限与沙箱；内置能力也在这里登记。": "Channels, enhancements, and pages share the same signed registry, permissions, and sandbox; built-in capabilities are listed here too.",
  "导出清单": "Export registry",
  "没有匹配的插件。": "No matching plugins.",
  "还没有安装插件。到“发现”里挑一个，或在下方用开发者模式安装本地包。": "No plugins installed yet. Choose one in Discover, or install a local package below in Developer mode.",
  "市场为空。": "The marketplace is empty.",
  "没有匹配的内置能力。": "No matching built-in capabilities.",
  "开发者模式": "Developer mode",
  "从本机目录安装未签名的插件包，用于自研与调试。安装后仍运行在同一沙箱里，但会显示“未验证”。": "Install unsigned plugin packages from a local folder for development and debugging. They still run in the same sandbox, but are marked as unverified.",
  "允许本地未签名插件": "Allow local unsigned plugins",
  "插件目录": "Plugin directory",
  "目录内必须有 ofm-plugin.json，并在 files 中列出全部文件": "The directory must contain ofm-plugin.json and list every file in files",
  "我理解未签名插件不受市场审核与签名保护，仅安装我信任的代码。": "I understand unsigned plugins are not reviewed or signature-protected by the marketplace. I will install only code I trust.",
  "安装本地插件": "Install local plugin",
  "最近操作": "Recent activity",
  "暂无记录。": "No activity yet.",
  "确认更新": "Confirm update",
  "确认安装": "Confirm install",
  "这个插件会获得": "This plugin will receive",
  "无额外权限。": "No additional permissions.",
  "更新内容": "What's new",
  "安装前会校验签名市场给出的文件大小与 SHA-256，并在写入前做静态扫描。": "Before installation, the signed marketplace file size and SHA-256 are verified and a static scan is performed.",
  "查看源码": "View source",
  "主页": "Homepage",
  "源码仓库": "Source repository",
  "顺序回退": "Sequential fallback",
  "按成员顺序依次尝试": "Try members in order",
  "轮询": "Round robin",
  "轮换起点，按粘性回合数保持当前成员": "Rotate the starting member and keep it for the configured number of sticky turns",
  "智能重置": "Smart reset",
  "优先选择符合条件且下次额度重置最早的成员": "Prefer eligible members whose quota resets soonest",
  "最低用量": "Lowest usage",
  "优先选择本机已记录调用次数最少的成员": "Prefer the member with the fewest locally recorded calls",
  "每周配速": "Weekly pacing",
  "优先选择每周剩余额度 / 剩余小时最高的成员": "Prefer the member with the highest remaining weekly quota per remaining hour",
  "支持": "Supported",
  "不支持": "Not supported",
  "路由组已删除。": "Routing group deleted.",
  "路由组已停用。": "Routing group disabled.",
  "路由组已启用。": "Routing group enabled.",
  "尚无路由组": "No routing groups yet",
  "新建路由组": "New routing group",
  "路由组已保存。": "Routing group saved.",
  "路由组名称": "Routing group name",
  "选择策略": "Choose strategy",
  "粘性回合数": "Sticky turns",
  "启用路由组": "Enable routing group",
  "成员顺序": "Member order",
  "未知成员": "Unknown member",
  "尚未选择成员": "No members selected",
  "添加成员": "Add member",
  "容量与候选顺序": "Capacity & candidate order",
  "预览": "Preview",
  "上下文窗口": "Context window",
  "最大输出": "Maximum output",
  "暂无符合条件的候选模型": "No eligible candidate models",
  "保存路由组": "Save routing group",
  "模型路由": "Model routing",
  "可选模型": "Available models",
  "删除路由组": "Delete routing group",
  "正在读取路由配置": "Loading routing configuration",
  "没有匹配的路由组": "No matching routing groups",
  "查看本机累计用量与每日趋势。": "View cumulative local usage and daily trends.",
  "累计统计 · 不受下方趋势天数影响": "Cumulative statistics · independent of the trend range below",
  "物理失败请求": "Failed physical requests",
  "思考 Token": "Reasoning tokens",
  "每日 Token 用量": "Daily token usage",
  "左右滑动查看完整日期。": "Scroll horizontally to view all dates.",
  "所选时段没有已记录的 Token 用量，累计统计仍保留历史记录。": "No token usage was recorded in the selected period. Cumulative statistics still include historical records.",
  "还没有调用记录，接入客户端后用量会显示在这里。": "No requests recorded yet. Usage will appear here after you connect a client.",
  "本地自然日": "Local calendar day",
  "未上报的用量不会自动估算为实际 Token": "Unreported usage is not estimated as actual tokens",
  "按模型统计": "Usage by model",
  "累计记录 · 每页最多 20 个模型": "Cumulative records · up to 20 models per page",
  "物理请求最多": "Most physical requests",
  "Token 用量最多": "Highest token usage",
  "失败回合最多": "Most failed turns",
  "模型名称": "Model name",
  "清空搜索": "Clear search",
  "左右滑动查看完整统计。": "Scroll horizontally to view all statistics.",
  "物理请求": "Physical requests",
  "输入 Token": "Input tokens",
  "输出 Token": "Output tokens",
  "失败回合": "Failed turns",
  "恢复回合": "Recovered turns",
  "首字延迟": "Time to first token",
  "生成速度": "Generation speed",
  "还没有模型用量记录": "No model usage recorded yet",
  "试试其他名称或 ID，或清空搜索。": "Try another name or ID, or clear the search.",
  "接入客户端并发送消息后，模型统计会显示在这里。": "Model statistics will appear here after you connect a client and send a message.",
  "统计只记录用量与性能，不保存提示词和回答。": "Statistics record usage and performance only; prompts and responses are not stored.",
  "使用 OpenAI 兼容接口，把本地模型接入你的工具。": "Connect your tools to local models using an OpenAI-compatible API.",
  "连接凭据": "Connection credentials",
  "管理会话与推理密钥相互独立。": "The management session and inference key are separate.",
  "复制地址": "Copy URL",
  "点击查看后显示": "Click to reveal",
  "隐藏密钥": "Hide key",
  "查看密钥": "Show key",
  "密钥已复制。": "Key copied.",
  "密钥用于客户端调用，请妥善保管。": "The key is used by clients. Keep it safe.",
  "快速开始": "Quick start",
  "将 YOUR_API_KEY 替换为上方密钥。": "Replace YOUR_API_KEY with the key shown above.",
  "复制示例": "Copy example",
  "示例已复制。": "Example copied.",
  "轮换 API Key": "Rotate API key",
  "轮换后旧密钥立即失效，需要更新所有客户端。": "The old key becomes invalid immediately. Update every client after rotating.",
  "轮换密钥": "Rotate key",
  "轮换后旧 API Key 会立即失效，确认继续吗？": "The old API key will stop working immediately. Continue?",
  "密钥已轮换，请更新所有客户端配置。": "Key rotated. Update the configuration in every client.",
  "保持桌面客户端为最新版本，配置与账号保留。": "Keep the desktop client up to date while retaining settings and accounts.",
  "桌面客户端": "Desktop client",
  "版本与更新": "Version & updates",
  "检查本项目正式发布的桌面安装包。": "Check for official desktop installers released by this project.",
  "当前版本": "Current version",
  "最新桌面版本": "Latest desktop version",
  "尚未检查": "Not checked yet",
  "上次检查": "Last checked",
  "从未检查": "Never",
  "请在桌面客户端中打开此栏目，浏览器访问不支持安装应用更新。": "Open this section in the desktop client. Installing app updates from a browser is not supported.",
  "当前提供 Windows x64 桌面端内置更新，其他平台请使用对应安装包。": "Built-in updates are currently available for Windows x64. Use the appropriate installer on other platforms.",
  "检查更新": "Check for updates",
  "退出并安装": "Quit and install",
  "当前已是最新桌面版本": "The desktop client is up to date",
  "暂未找到适配此设备的正式桌面安装包": "No official desktop installer was found for this device",
  "正在下载更新": "Downloading update",
  "安装包校验通过。点击安装后会退出客户端，完成覆盖安装后自动重新打开。": "Installer verification passed. Click Install to close the client, replace the existing installation, and reopen automatically.",
  "正在准备安装，请等待客户端退出并重新打开。": "Preparing installation. The client will close and reopen when finished.",
  "更新说明": "Release notes",
  "正式发布": "Official release",
  "此版本未附更新说明。": "No release notes were provided for this version.",
  "免责声明": "Disclaimer",
  "保存失败，请重试。": "Could not save. Please try again.",
  "报告问题": "Report a problem",
  "功能许愿": "Request a feature",
  "标题": "Title",
  "详细描述": "Details",
  "提交反馈": "Submit feedback",
  "已提交": "Submitted",
  "账号": "Account",
  "重置筛选": "Reset filters",
  "账号与模型": "Accounts & models",
  "添加账号，管理免费额度与可用模型。": "Add accounts and manage free quotas and available models.",
  "返回全部渠道": "Back to all providers",
  "已接入渠道": "Connected providers",
  "账号凭据保存在本机独立目录": "Account credentials are stored in the isolated local directory",
  "每日自动签到": "Automatic daily check-in",
  "签到进行中": "Check-in in progress",
  "今日签到已执行": "Today's check-in completed",
  "插件页面": "Plugin page",
  "尚未连接": "Not connected yet",
  "保存请求超时，结果尚未确认。请重试或检查服务状态。": "The save request timed out, so the result is unknown. Retry or check the service status.",
  "无法连接本地服务，修改已保留，请确认服务正在运行后重试。": "Cannot connect to the local service. Your changes were kept; confirm the service is running and try again.",
  "保存失败，修改已保留，请重试。": "Save failed. Your changes were kept; please try again.",
  "设置已保存并生效": "Settings saved and applied",
  "设置已保存；状态刷新失败，稍后会自动重试。": "Settings saved, but refreshing the status failed. It will be retried later.",
  "本地工作台": "Local workspace",
  "当前出口": "Current exits",
  "所有渠道，共用一个接入地址": "All providers share one connection URL",
  "供应商与备份": "Providers & backups",
  "删除": "Delete",
  "编辑": "Edit",
  "新增": "Add",
  "下一页": "Next page",
  "上一页": "Previous page",
  "页面": "Pages",
  "渠道": "Channels",
  "增强": "Enhancements",
  "全部": "All",
  "网络：": "Network: ",
  "密钥：": "Secret: ",
  "本地存储：读写该插件自己的键值空间": "Local storage: read/write this plugin's own key-value namespace",
  "这个插件会获得": "This plugin will receive",
  "市场暂不可用，正在显示本地缓存：": "Marketplace unavailable; showing local cache: ",
  "最近操作": "Recent activity",
  "暂无记录。": "No activity yet.",
  "安装本地插件": "Install local plugin",
  "确认安装": "Confirm install",
  "确认更新": "Confirm update",
  "观察窗口还剩约": "Observation window remaining about",
  "更新到": "Update to",
  "已是最新": "Up to date"
});

const DYNAMIC = [
  [/^第\s*(\d+)\s*\/\s*(\d+)\s*页$/, m => "Page " + m[1] + " of " + m[2]],
  [/^(\d+)\s*个模型$/, m => m[1] + " models"],
  [/^(\d+)\s*个供应商$/, m => m[1] + " providers"],
  [/^(\d+)\s*个客户端$/, m => m[1] + " clients"],
  [/^(\d+)\s*个渠道$/, m => m[1] + " providers"],
  [/^(\d+)\s*个成员$/, m => m[1] + " members"],
  [/^(\d+)\s*个页面$/, m => m[1] + " pages"],
  [/^(\d+)\s*个模型 · (\d+)\s*个可接入$/, m => m[1] + " models · " + m[2] + " routable"],
  [/^(\d+)\s*次物理请求$/, m => m[1] + " physical requests"],
  [/^输入\s*(.+?)\s*·\s*输出\s*(.+)$/, m => "Input " + m[1] + " · Output " + m[2]],
  [/^最近启动\s+(.+)$/, m => "Last launched " + m[1]],
  [/^已清除\s*(\d+)\s*个出口的冷却。$/, m => "Cleared cooldown for " + m[1] + " exits."],
  [/^已发现\s*(\d+)\s*个模型，请保存模型配置。$/, m => "Discovered " + m[1] + " models. Save the model settings."],
  [/^删除方案“(.+)”？$/, m => "Delete profile \"" + m[1] + "\"?"],
  [/^删除资源“(.+)”？$/, m => "Delete resource \"" + m[1] + "\"?"],
  [/^删除路由组“(.+)”？$/, m => "Delete routing group \"" + m[1] + "\"?"],
  [/^移除订阅\s*(.+)？$/, m => "Remove subscription " + m[1] + "?"],
  [/^删除插件“(.+)”？$/, m => "Delete plugin \"" + m[1] + "\"?"],
  [/^(.+)\s*（不可用）$/, m => m[1] + " (unavailable)"]
];

export function translateUiText(value, locale = "zh-CN") {
  const source = String(value ?? "");
  if (!String(locale).toLowerCase().startsWith("en")) return source;
  const leading = source.match(/^\s*/u)?.[0] ?? "";
  const trailing = source.match(/\s*$/u)?.[0] ?? "";
  const body = source.slice(leading.length, source.length - trailing.length);
  if (!body) return source;
  if (Object.prototype.hasOwnProperty.call(TEXT, body)) return leading + TEXT[body] + trailing;
  for (const [pattern, render] of DYNAMIC) {
    const match = body.match(pattern);
    if (match) return leading + render(match) + trailing;
  }
  return source;
}

const STORAGE_KEY = "ofm-ui-locale";
const TEXT_SOURCES = new WeakMap();
const TEXT_OUTPUTS = new WeakMap();
const ATTRIBUTE_SOURCES = new WeakMap();
const ATTRIBUTE_OUTPUTS = new WeakMap();
const TRANSLATABLE_ATTRIBUTES = ["placeholder", "title", "aria-label", "aria-description", "alt", "aria-valuetext"];
let activeObserver;

export function getUiLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "zh-CN";
  } catch {
    return "zh-CN";
  }
}

function translateTextNode(node, locale) {
  const current = node.nodeValue ?? "";
  const lastOutput = TEXT_OUTPUTS.get(node);
  const original = lastOutput === current ? (TEXT_SOURCES.get(node) ?? current) : current;
  TEXT_SOURCES.set(node, original);
  const next = translateUiText(original, locale);
  if (next !== current) {
    TEXT_OUTPUTS.set(node, next);
    node.nodeValue = next;
  } else if (lastOutput === current) {
    // Keep the original source so switching back to Chinese restores the node.
    TEXT_OUTPUTS.set(node, current);
  } else {
    TEXT_OUTPUTS.delete(node);
  }
}

function translateAttributes(element, locale) {
  let sources = ATTRIBUTE_SOURCES.get(element);
  let outputs = ATTRIBUTE_OUTPUTS.get(element);
  if (!sources) { sources = new Map(); ATTRIBUTE_SOURCES.set(element, sources); }
  if (!outputs) { outputs = new Map(); ATTRIBUTE_OUTPUTS.set(element, outputs); }
  for (const name of TRANSLATABLE_ATTRIBUTES) {
    if (!element.hasAttribute(name)) continue;
    const current = element.getAttribute(name) ?? "";
    const original = outputs.get(name) === current ? (sources.get(name) ?? current) : current;
    sources.set(name, original);
    const next = translateUiText(original, locale);
    if (next !== current) {
      outputs.set(name, next);
      element.setAttribute(name, next);
    } else if (outputs.get(name) === current) {
      // Keep the original attribute source for a later locale switch.
      outputs.set(name, current);
    } else {
      outputs.delete(name);
    }
  }
}

function excludedTextNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;
  return !!parent.closest("script, style, code, pre, textarea, svg, [data-no-translate]");
}

function translateSubtree(root, locale) {
  if (root.nodeType === Node.TEXT_NODE) {
    if (!excludedTextNode(root)) translateTextNode(root, locale);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;
  if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root, locale);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!excludedTextNode(node)) translateTextNode(node, locale);
  }
  if (root.nodeType === Node.ELEMENT_NODE) {
    for (const element of root.querySelectorAll("*")) translateAttributes(element, locale);
  }
}

export function setUiLocale(locale) {
  const next = String(locale).toLowerCase().startsWith("en") ? "en" : "zh-CN";
  try { localStorage.setItem(STORAGE_KEY, next); } catch { /* session-only when storage is unavailable */ }
  document.documentElement.lang = next;
  const root = document.getElementById("root");
  if (root) translateSubtree(root, next);
  window.dispatchEvent(new Event("ofm:locale-change"));
  return next;
}

export function toggleUiLocale() {
  return setUiLocale(getUiLocale() === "en" ? "zh-CN" : "en");
}

export function installUiLocale(root) {
  if (!root) return () => {};
  const locale = getUiLocale();
  document.documentElement.lang = locale;
  translateSubtree(root, locale);
  activeObserver?.disconnect();
  activeObserver = new MutationObserver(records => {
    const current = getUiLocale();
    for (const record of records) {
      if (record.type === "characterData") {
        const node = record.target;
        if (!excludedTextNode(node)) translateTextNode(node, current);
      } else if (record.type === "attributes" && record.target instanceof Element) {
        translateAttributes(record.target, current);
      } else {
        for (const added of record.addedNodes) translateSubtree(added, current);
      }
    }
  });
  activeObserver.observe(root, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: TRANSLATABLE_ATTRIBUTES
  });
  return () => activeObserver?.disconnect();
}

(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[414],{4909:(e,a,l)=>{"use strict";l.r(a),l.d(a,{data:()=>n});const n={key:"v-6e7a56da",path:"/advanced/debug.html",title:"常见问题",lang:"zh-CN",frontmatter:{title:"常见问题"},excerpt:"",headers:[{level:3,title:"🏔️ 山重水复疑无路，柳暗花明又一村",slug:"🏔️-山重水复疑无路-柳暗花明又一村",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"硬件相关",slug:"硬件相关",children:[{level:3,title:"系统没有声音",slug:"系统没有声音",children:[]},{level:3,title:"键盘没有反应",slug:"键盘没有反应",children:[]}]},{level:2,title:"服务相关",slug:"服务相关",children:[{level:3,title:"关闭出错服务（错误启动项）",slug:"关闭出错服务-错误启动项",children:[]},{level:3,title:"关机时卡住很久才能关机",slug:"关机时卡住很久才能关机",children:[]}]},{level:2,title:"软件包相关",slug:"软件包相关",children:[{level:3,title:"软件包降级",slug:"软件包降级",children:[]},{level:3,title:"升级系统时",slug:"升级系统时",children:[]}]},{level:2,title:"KDE 桌面环境相关",slug:"kde-桌面环境相关",children:[{level:3,title:"手动开关显示特效混合器（混成器）",slug:"手动开关显示特效混合器-混成器",children:[]}]},{level:2,title:"deepin-wine5 相关",slug:"deepin-wine5-相关",children:[]}],filePathRelative:"advanced/debug.md",git:{updatedTime:1625039827e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:5},{name:"LINUXP",email:"66715738+LagrangeOranges@users.noreply.github.com",commits:1}]}}},8641:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>C});var n=l(6252);const s=(0,n.Wm)("h1",{id:"常见问题排除与解决",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#常见问题排除与解决","aria-hidden":"true"},"#"),(0,n.Uk)(" 常见问题排除与解决")],-1),i=(0,n.Wm)("blockquote",null,[(0,n.Wm)("h3",{id:"🏔️-山重水复疑无路-柳暗花明又一村",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#🏔️-山重水复疑无路-柳暗花明又一村","aria-hidden":"true"},"#"),(0,n.Uk)(" 🏔️ 山重水复疑无路，柳暗花明又一村")]),(0,n.Wm)("p",null,"本节介绍日常使用 archlinux 时可能会遇到的问题以及解决方法")],-1),d=(0,n.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,n.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,n.Uk)(" 🔖 这一节将会讨论：")],-1),t={class:"custom-container details"},r=(0,n.Wm)("summary",null,"目录",-1),u={class:"table-of-contents"},c=(0,n.Uk)("# 🏔️ 山重水复疑无路，柳暗花明又一村"),h=(0,n.Uk)("# 🔖 这一节将会讨论："),o=(0,n.Uk)("# 硬件相关"),m=(0,n.Uk)("# 系统没有声音"),p=(0,n.Uk)("# 键盘没有反应"),b=(0,n.Uk)("# 服务相关"),g=(0,n.Uk)("# 关闭出错服务（错误启动项）"),W=(0,n.Uk)("# 关机时卡住很久才能关机"),f=(0,n.Uk)("# 软件包相关"),v=(0,n.Uk)("# 软件包降级"),k=(0,n.Uk)("# 升级系统时"),w=(0,n.Uk)("# KDE 桌面环境相关"),x=(0,n.Uk)("# 手动开关显示特效混合器（混成器）"),U=(0,n.Uk)("# deepin-wine5 相关"),_=(0,n.uE)('<h2 id="硬件相关" tabindex="-1"><a class="header-anchor" href="#硬件相关" aria-hidden="true">#</a> 硬件相关</h2><h3 id="系统没有声音" tabindex="-1"><a class="header-anchor" href="#系统没有声音" aria-hidden="true">#</a> 系统没有声音</h3><h3 id="键盘没有反应" tabindex="-1"><a class="header-anchor" href="#键盘没有反应" aria-hidden="true">#</a> 键盘没有反应</h3><p>若为联想小新 Pro14 / YOGA 14s 2021 或相似机型，可能发现笔记本内建键盘没有反应。</p>',4),y=(0,n.Uk)("请参阅 "),E=(0,n.Uk)("🥙 杂七杂八"),D=(0,n.Uk)(" 解决。"),K=(0,n.uE)('<h2 id="服务相关" tabindex="-1"><a class="header-anchor" href="#服务相关" aria-hidden="true">#</a> 服务相关</h2><h3 id="关闭出错服务-错误启动项" tabindex="-1"><a class="header-anchor" href="#关闭出错服务-错误启动项" aria-hidden="true">#</a> 关闭出错服务（错误启动项）</h3><h3 id="关机时卡住很久才能关机" tabindex="-1"><a class="header-anchor" href="#关机时卡住很久才能关机" aria-hidden="true">#</a> 关机时卡住很久才能关机</h3><p>一般屏幕会出现形如 <code>A stop job is running for...(1m30s)</code> 的信息，这是经常会遇到的关机卡住 1 分 30 秒的问题，一般来说这种情况是出现了某个进程在关机时不愿停止，需要等到超时时间到达强行停止。</p><p>通用的解决办法是调整缩短这个等待时间，建议从 1 分 30 秒调整至 30 秒，30 秒已经足够几乎所有进程正常结束。</p><ol><li><p>编辑 <code>/etc/systemd/system.conf</code>：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/systemd/system.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>找到其中 <code>DefaultTimeoutStopSec</code> 一项，将其前方的井号去掉，并赋值为 30s 即可</p></li><li><p>最后执行 daemon-reload 使其生效。</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>上述解决方案其实只是将这个等待时间缩小了，并没有解决实际问题。如果你想排查问题真正的原因所在，耐心等待其结束关机，然后重新启动电脑，执行以下命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>journalctl -p5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>按/(斜杠键)搜索<code>Killing</code>关键字，找到你关机的时间附近所在的匹配行，你可以在附近看到到底是哪一个进程导致了 timeout,然后再去排查这个进程有什么问题即可。</p><h2 id="软件包相关" tabindex="-1"><a class="header-anchor" href="#软件包相关" aria-hidden="true">#</a> 软件包相关</h2><h3 id="软件包降级" tabindex="-1"><a class="header-anchor" href="#软件包降级" aria-hidden="true">#</a> 软件包降级</h3><p>在 archlinux 上偶尔会出现某一个包的最新版本有各种问题的情况，此时需要降级该包以正常使用，包可以是普通软件，也可以是内核。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yay -S downgrade\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装此包即可，使用方法也很简单，downgrade 后加上需要降级的包名即可，随后会提示你选择需要降级到的版本，点选即可。</p><h3 id="升级系统时" tabindex="-1"><a class="header-anchor" href="#升级系统时" aria-hidden="true">#</a> 升级系统时</h3><p>可能存在升级系统时异常关机或程序异常退出的情况，移除 pacman 的 db 锁即可</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> /var/lib/pacman/db.lck\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="kde-桌面环境相关" tabindex="-1"><a class="header-anchor" href="#kde-桌面环境相关" aria-hidden="true">#</a> KDE 桌面环境相关</h2><h3 id="手动开关显示特效混合器-混成器" tabindex="-1"><a class="header-anchor" href="#手动开关显示特效混合器-混成器" aria-hidden="true">#</a> 手动开关显示特效混合器（混成器）</h3><p>有时显示特效混合器会因为某些原因需要手动开启或关闭，但是目前在 KDE 下显示特效混合器在设置里无法在不关机的情况下直接关闭，下面命令提供手动开关混成器的效果：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>qdbus org.kde.KWin /Compositor <span class="token function">suspend</span> <span class="token comment"># 禁用</span>\nqdbus org.kde.KWin /Compositor resume <span class="token comment"># 开启</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="deepin-wine5-相关" tabindex="-1"><a class="header-anchor" href="#deepin-wine5-相关" aria-hidden="true">#</a> deepin-wine5 相关</h2>',23),C={render:function(e,a){const l=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[s,i,(0,n.Wm)("blockquote",null,[d,(0,n.Wm)("details",t,[r,(0,n.Wm)("nav",u,[(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#🏔️-山重水复疑无路-柳暗花明又一村"},{default:(0,n.w5)((()=>[c])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#🔖-这一节将会讨论"},{default:(0,n.w5)((()=>[h])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#硬件相关"},{default:(0,n.w5)((()=>[o])),_:1}),(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#系统没有声音"},{default:(0,n.w5)((()=>[m])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#键盘没有反应"},{default:(0,n.w5)((()=>[p])),_:1})])])]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#服务相关"},{default:(0,n.w5)((()=>[b])),_:1}),(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#关闭出错服务-错误启动项"},{default:(0,n.w5)((()=>[g])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#关机时卡住很久才能关机"},{default:(0,n.w5)((()=>[W])),_:1})])])]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#软件包相关"},{default:(0,n.w5)((()=>[f])),_:1}),(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#软件包降级"},{default:(0,n.w5)((()=>[v])),_:1})]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#升级系统时"},{default:(0,n.w5)((()=>[k])),_:1})])])]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#kde-桌面环境相关"},{default:(0,n.w5)((()=>[w])),_:1}),(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#手动开关显示特效混合器-混成器"},{default:(0,n.w5)((()=>[x])),_:1})])])]),(0,n.Wm)("li",null,[(0,n.Wm)(l,{to:"#deepin-wine5-相关"},{default:(0,n.w5)((()=>[U])),_:1})])])])])]),_,(0,n.Wm)("p",null,[y,(0,n.Wm)(l,{to:"/rookie/basic-install-detail.html#%F0%9F%A5%99-%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB"},{default:(0,n.w5)((()=>[E])),_:1}),D]),K],64)}}}}]);
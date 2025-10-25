import type { CssOption } from '../types';

export const centerTextPostsCss: CssOption = {
  key: 'center_text',
  code: '._5rgt._5msi { text-align: center;}',
  description: 'Center text posts',
};

export const hideMessengerSidebar: CssOption = {
  key: 'hide_messenger_sidebar',
  code: '.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.xu1343h.x26u7qi.xy80clv.x1yu6fn4.xs83m0k.x1dt7z5j.x2ixbly {display: none;}',
  description: 'Hide messenger sidebar',
  defaultEnabled: true,
};

export const addSpaceBetweenPostsCss: CssOption = {
  key: 'add_space',
  description: 'Add space between posts',
  code: 'article { margin-top: 50px !important; }',
};

export const hideStoriesCss: CssOption = {
  key: 'hide_stories',
  description: 'Hide stories',
  code: '#MStoriesTray { display: none !important; }',
};

export const fixedBarCss: CssOption = {
  key: 'fixed_bar',
  description: 'Fixed bar',
  defaultEnabled: true,
  code: '#header { position: fixed; z-index: 6; top: 0px; } #root { padding-top: 84px; } .flyout { max-height: 500px; overflow-y: scroll; } .item.more { position: fixed; bottom: 0px; text-align: center !important; }',
};

export const removeMessengerDownloadCss: CssOption = {
  key: 'removeMessengerDownload',
  description: 'Remove messenger download',
  code: '._s15 { display: none; } input { -webkit-user-select: text; } [data-sigil*=m-promo-jewel-header] { display: none; }',
};

export const removeBrowserNotSupportedCss: CssOption = {
  key: 'removeBrowserNotSupported',
  description: 'Remove browser not supported notice',
  code: '#header-notices { display: none; }',
};

export const darkThemeCss: CssOption = {
  key: 'dark_theme',
  description: 'Dark theme',
  code: `body,body._li{background:black!important}._53jh{background:transparent}.loggedout_menubar_container{background:none!important}.fbIndex #globalContainer #dropmenu_container,.fbIndex #globalContainer #content,.fbIndex #globalContainer #pageFooter{display:none!important}.fbIndex .loggedout_menubar_container{position:fixed!important;width:0!important;height:0!important;min-width:0!important;bottom:70%!important;left:1%!important;margin-bottom:-290px!important;margin-left:-15px!important;z-index:-1000!important}.loggedout_menubar{background:rgba(0,0,0,.6)!important;padding:0;-webkit-border-radius:0;border-radius:0;-webkit-box-shadow:rgba(0,0,0,.4);box-shadow:rgba(0,0,0,.4);border:1px solid #333!important}.fbIndex .loggedout_menubar{width:auto!important}.fbIndex .loggedout_menubar_container .lfloat,.fbIndex .loggedout_menubar_container .rfloat{float:none!important}.fbIndex .loggedout_menubar_container .lfloat img,.fbIndex .loggedout_menubar_container .rfloat #login_form table{display:block!important;margin:0 auto!important}.menu_login_container{margin-top:1.2em!important}td .inputtext{background:rgba(0,0,0,.4)!important;border-radius:0!important}*{border-color:transparent!important;font-family:Arial!important;color:#fff!important;background-color:transparent!important}a:hover{text-decoration:none;font-weight:700}#BuddylistPagelet{display:none!important}._3m75 .sideNavItem ._5afe::after{background-color:rgba(0,0,0,.8);border:1px solid #dddfe2;border-radius:2px;bottom:-1px;content:'';display:block;left:-1px;opacity:0;position:absolute;right:-1px;top:-1px;transition:400ms cubic-bezier(.08,.52,.52,1) background-color,400ms cubic-bezier(.08,.52,.52,1) border-color,400ms cubic-bezier(.08,.52,.52,1) opacity;z-index:-1}._3m75 .sideNavItem ._5afe:active{background-color:rgba(0,0,0,.8);border:1px solid #dddfe2;border-radius:2px;bottom:-1px;content:'';display:block;left:-1px;opacity:0;position:absolute;right:-1px;top:-1px;transition:400ms cubic-bezier(.08,.52,.52,1) background-color,400ms cubic-bezier(.08,.52,.52,1) border-color,400ms cubic-bezier(.08,.52,.52,1) opacity;z-index:-1}._2yau::after{background-color:rgba(0,0,0,.8)!important;border:1px solid #dddfe2;border-radius:2px;bottom:-1px;content:'';display:block;left:-1px;opacity:0;position:absolute;right:-1px;top:-1px;transition:400ms cubic-bezier(.08,.52,.52,1) background-color,400ms cubic-bezier(.08,.52,.52,1) border-color,400ms cubic-bezier(.08,.52,.52,1) opacity;z-index:-1}._2yau:active{background-color:rgba(0,0,0,.8);border:1px solid #dddfe2;border-radius:2px;bottom:-1px;content:'';display:block;left:-1px;opacity:0;position:absolute;right:-1px;top:-1px;transition:400ms cubic-bezier(.08,.52,.52,1) background-color,400ms cubic-bezier(.08,.52,.52,1) border-color,400ms cubic-bezier(.08,.52,.52,1) opacity;z-index:-1}._1yv{background-color:rgba(0,0,0,.8)!important}._50d1{background-color:rgba(0,0,0,.8)!important}._4-u2{background-color:rgba(0,0,0,.5)!important}.u_yqurkg_f8,._26z1{display:none}.__tw,._54ng,._5tlx,.fbNubFlyoutOuter{background-color:rgba(0,0,0,.8)!important}.fbNubFlyoutTitlebar{background-color:rgba(0,0,0,.8)!important;border-radius:0!important}._2nlt,._3olsv,._2nlst{background:rgba(255,255,255,.8)!important}#pagelet_bluebar{background-color:rgba(0,0,0,.4)!important}._585- ._42ft{display:none}.jewelItemNew{background-color:rgba(255,255,255,.2)!important}.uiTooltipX{background-color:rgba(0,0,0,.8)!important}._59s7{background-color:rgba(0,0,0,.8)!important}._1enh{border-right:.2em solid rgba(255,255,255,.2)!important}._4_j5{border-left:.2em solid rgba(255,255,255,.2)!important}._5742{border-bottom:.2em solid rgba(255,255,255,.2)!important}._36ic{border-bottom:.2em solid rgba(255,255,255,.2)!important}#u_jsonp_6_7,.stickyHeaderWrap,.uiMenuInner{background-color:rgba(0,0,0,.5)!important}._n3{background-color:rgba(0,0,0,.9)!important}._6_7{background-color:rgba(0,0,0,.6)!important}._513x{display:none!important}._9ah{background-color:rgba(255,255,255,.7)!important}._3zzf{border:1px solid rgba(255,255,255,.7)!important;color:blue!important}._53ij{background-color:rgba(0,0,0,.8)!important}span._59tg{background-color:#3141ac!important}#header{background-color:#080618!important}`,
};

export const darkThemeMessengerCss: CssOption = {
  key: 'dark_theme_messenger',
  description: 'Dark theme messenger',
  code: `.__fb-light-mode{--surface-background:#000;--messenger-card-background:#000;--primary-text:#e5e5e5;--wash:#303030;--comment-background:rgba(38,38,38,.81);--secondary-button-background:rgba(38,38,38,.81);--primary-icon:#fff;--always-black:#fff;--divider:#181818;--media-inner-border:#181818;--disabled-icon:#65636c;--popover-background:#b79ab11a;--filter-primary-icon:invert(100%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%);--hosted-view-selected-state:rgba(201,201,201,.11);--card-background:#000;--fds-gray-20:#181818;--secondary-button-text:#dbdbdb;--web-wash:#000}::-webkit-scrollbar{width:0}::-webkit-scrollbar-thumb{background:#888;border-radius:12px}.xb756pt{box-shadow:0 0 2px #181818}`,
};

export const adaptMessengerPageCss: CssOption = {
  key: 'adaptMessenger',
  description: 'Adapt messenger',
  code: `.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x2lah0s.x193iq5w.xeuugli.x6s0dn4.x78zum5.xn3w4p2.xl56j7k.x1yrsyyn.xsyo7zv.x10b6aqq.x16hj40l.x187nhsf{display:none}.x9f619.x1n2onr6.x1ja2u2z.x1swvt13.x1pi30zi.xsag5q8.x1yrsyyn{padding-left:2px;padding-right:2px}.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xurb0ha.x1sxyh0{padding:0}.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xeuugli.xycxndf.xkhd6sd.x4uap5.xexx8yu.x18d9i69{width:43px}.x12nzpgo.x12nzpgo{width:60px}a.x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xdl72j9.x2lah0s.xe8uvvx.x2lwn1j.xeuugli.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1lliihq.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x889kno.x1iji9kk.x1a8lsjc.x1sln4lm{padding-top:2px;padding-bottom:6px;padding-left:0;padding-right:0}a.x1i10hfl.x1qjc9v5.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xdl72j9.x2lah0s.xe8uvvx.x2lwn1j.xeuugli.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1lliihq.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x889kno.x1iji9kk.x1a8lsjc.x1sln4lm.x1av1boa{padding:7px}.x9f619.x1n2onr6.x1ja2u2z.x78zum5.x1r8uery.xs83m0k.xeuugli.x1qughib.x6s0dn4.xozqiw3.x1q0g3np.xb756pt.x1c4vz4f.xt55aet.xexx8yu.xc73u3c.x18d9i69.x5ib6vp.x1lku1pv.x12nzpgo{display:none}.x6s0dn4.x1ey2m1c.x78zum5.xl56j7k.x10l6tqk.x1vjfegm.xat24cr.x3oybdh.x1g2r6go.x11xpdln.x5w5eug{display:none}.x6s0dn4.x1ey2m1c.x78zum5.xl56j7k.x10l6tqk.x1vjfegm.xat24cr.x3oybdh.x1g2r6go.x11xpdln.x5h36tt{display:none}.x78zum5.x1iyjqo2.x6q2ic0{margin-left:36px!important}.x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x2lwn1j.xeuugli.x1n2onr6.x16tdsg8.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x3nfvp2.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.x1i64zmx.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha{display:none}.wkznzc2l{display:none!important}.kuivcneq{display:none!important}.bafdgad4{display:none!important}.aov4n071.cxmmr5t8.bi6gxh9e.hcukyx3x.jb3vyjys.hv4rvrfc.qt6c0cv9.dati1w0a{display:none!important}.rj1gh0hx{max-width:-webkit-fill-available}.j83agx80{max-width:-webkit-fill-available}`,
};

export const cssList: CssOption[] = [
  centerTextPostsCss,
  addSpaceBetweenPostsCss,
  hideStoriesCss,
  fixedBarCss,
  darkThemeCss,
  hideMessengerSidebar,
];

export const injectCssFunc = (css: string): string => {
  const cleanCss = css.replace(/\s+/g, ' ').replace(/'/g, "\\'").replace(/\n/g, ' ');
  return `
    (function (css) {
      var node = document.createElement('style');
      node.innerHTML = css;
      document.body.appendChild(node);
    })('${cleanCss}');
  `;
};

export const exampleJs = `
javascript:function foo() {
  document.body.innerHTML = '';
}
foo();
`;

export const removeAdsFunc = `
javascript: function removeAds() {
  var adKeywords = [
    "Sponsorisé", "Sponsored", "Patrocinado", "Publicidad", "Gesponsert",
    "Sponsorizzato", "Sponsrad", "Được tài trợ", "贊助內容", "赞助内容",
    "スポンサーされた投稿", "Sponsorowane", "Реклама", "Sponzorirano",
    "प्रायोजित", "স্পনসরড", "பராமரிக்கப்பட்ட", "ప్రచారం చేసిన",
    "ಪ್ರಾಯೋಜಿತ", "സ്പോൺസർ ചെയ്യപ്പെട്ട", "ਸਰਪ੍ਰਸਤ", "प्रायोजित",
    "સ્પોન્સર્ડ", "سپانسرڈ", "โพสต์ที่ได้รับการสนับสนุน"
  ];

  var myDiv = '<div class="_52z5" style="z-index: 0; height: 135px; display: flex; justify-content: center; align-items: center;"><div style="text-align: center;"><h1 style="color: white; font-size: 35px; height: 28px; margin: 0;">Ad Removed</h1><p style="color: white; font-size: 12px; margin: 0;">Thanks to SlimSocial</p></div></div>';

  const adSpans = [...document.querySelectorAll('span')].filter(span =>
    adKeywords.some(keyword => span.textContent?.includes(keyword))
  );

  let adsCount = 0;
  for (const span of adSpans) {
    const post = span.closest("article");
    if(post == null) continue;
    post.innerHTML = myDiv;
    adsCount++;
  }
}
`;

export const removeAdsObserver = `
if (typeof newPostsObserver === 'undefined') {
  const bodyNode = document.body;
  const newPostsObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      const addedSections = Array.from(mutation.addedNodes).filter(node => node.nodeName === 'SECTION');
      if (addedSections.length) {
        if (typeof removeAds === 'function') {
          removeAds();
        }
      }
    });
  });
  const config = { childList: true, subtree: true };
  newPostsObserver.observe(bodyNode, config);
}
`;

export const createFabFunc = `
javascript:function createFab() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = '▲';
  button.className = 'my_fab_btn';
  button.onclick = function() {
    window.scrollTo(0,0);
  };
  var container = document.getElementById('root');
  container.appendChild(button);
}
createFab();
`;

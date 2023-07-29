// chrome.storage.local.set({
//   blockedSites: [],
//   focusMode: true,
//   tabsTime: {
//     "2023-7-22": {
//       "cdn.jsdelivr.net": 44257,
//       "cdnjs.cloudflare.com": 481,
//       "cdnjs.com": 18691,
//       "cdnpkg.com": 3504,
//       "chat.openai.com": 829128,
//       "date-fns.org": 64220,
//       "developer.mozilla.org": 170288,
//       "discord.com": 273126,
//       "github.com": 124522,
//       "google.com": 35955,
//       "jsdelivr.com": 29543,
//       "jsfiddle.net": 11171,
//       "koss.nocorp.me": 20344,
//       "kossnocorp.mit-license.org": 5136,
//       "onecompiler.com": 81620,
//       "stackoverflow.com": 194323,
//     },
//     "2023-7-26": {
//       "chat.openai.com": 7664,
//       "discord.com": 993860,
//       "google.com": 115921,
//     },
//     "2023-7-20": {
//       "accounts.google.com": 2106,
//       "amazon.com": 20779,
//       "annualcreditreport.com": 2620,
//       "api-7af2c673.duosecurity.com": 1145,
//       "app.endtest.io": 18840,
//       "berardiimmigrationlaw.com": 2110,
//       "bugs.chromium.org": 21431,
//       "canvas.tamu.edu": 36871,
//       "careers.jhuapl.edu": 589,
//       "cas.tamu.edu": 6115,
//       "cats256.github.io": 18636,
//       "cdn.discordapp.com": 199269,
//       "cdn.jsdelivr.net": 6179,
//       "cdn.tailwindcss.com": 19760,
//       "chat.openai.com": 8570463,
//       "chromium.googlesource.com": 8558,
//       "codereview.stackexchange.com": 14176,
//       "cty.jhu.edu": 35445,
//       "dev.to": 27151,
//       "developer.chrome.com": 457803,
//       "developer.mozilla.org": 813426,
//       "developers.google.com": 10590,
//       "discord.com": 11511540,
//       "docs.google.com": 1022,
//       "docs.kony.com": 2239,
//       "dps.texas.gov": 172143,
//       "drive.google.com": 24969,
//       "en.wikipedia.org": 113585,
//       "engineering.tamu.edu": 55311,
//       "eslint.org": 383021,
//       "fmx.cpa.texas.gov": 17704,
//       "focuscommit.com": 9773,
//       "focustodo.cn": 14673,
//       "fonts.google.com": 147685,
//       "fonts.googleapis.com": 18925,
//       "francescocirillo.com": 1149,
//       "freecodecamp.org": 3102,
//       "ftc.gov": 6121,
//       "github.com": 1023003,
//       "google.com": 3093986,
//       "howdy.tamu.edu": 4912,
//       "identogo.com": 39289,
//       "imgur.com": 8437,
//       "instagram.com": 40789,
//       "javascript.info": 45477,
//       "javascripttutorial.net": 20986,
//       "jhuapl.edu": 13335,
//       "jsdelivr.com": 4216,
//       "kevink856.github.io": 74780,
//       "kidschaupal.com": 10595,
//       "lawfirm1.com": 232981,
//       "linkedin.com": 246378,
//       "litterati.org": 15018,
//       "madskristensen.net": 17648,
//       "mail.google.com": 1884323,
//       "makeawebsitehub.com": 4135,
//       "mathsisfun.com": 7212,
//       "maze.toys": 3693,
//       "my.uscis.gov": 42172,
//       "myaccount.uscis.gov": 6530,
//       "myintervals.com": 13426,
//       "nextshark.com": 39552,
//       "old.reddit.com": 2658,
//       "onecompiler.com": 118902,
//       "playcode.io": 111608,
//       "pomofocus.io": 33740,
//       "preview.redd.it": 16601,
//       "reddit.com": 2653845,
//       "saniya.dev": 47479,
//       "sebastian.itch.io": 18274,
//       "secjhuapl.edu": 14244,
//       "selfhelp.courts.ca.gov": 22739,
//       "softwareengineering.stackexchange.com": 14714,
//       "stackoverflow.com": 1913104,
//       "streaver.com": 23059,
//       "tailwindcss.com": 3314,
//       "testim.io": 57046,
//       "texaslawhelp.org": 714593,
//       "theuselessweb.com": 5018,
//       "thieme-connect.com": 6419,
//       "toggl.com": 22619,
//       "toptal.com": 63167,
//       "tweak-extension.com": 4262,
//       "twitter.com": 394,
//       "uenroll.identogo.com": 722841,
//       "user.blocksite.co": 63295,
//       "uwide.tamu.edu": 7048,
//       "vivrichards.co.uk": 12705,
//       "w3schools.com": 7495,
//       "walgreens.com": 5476,
//       "web.dev": 9728,
//       "yahoo.com": 1857,
//       "youtube.com": 3051142,
//     },
//   },
//   unblockTimes: {},
// });

chrome.storage.local.get().then((storage) => {
  if (!storage.blockedSites) {
    chrome.storage.local.set({
      blockedSites: [],
      tabsTime: {},
      unblockTimes: {},
      backgroundImage: "icons/dangerous.svg",
      quote: "life begins at the end of your comfort zone",
      pomodoroInformation: {
        cyclesTimes: [],
      },
    });
  }
});

import { getDictionary } from "@/lib/get-dictionary";

export const metadataService = {
  share: {
    manifest: "/manifest.json",
    metadataBase: new URL(`https://${process.env.VERCEL_URL}/`),
    //https://rob-ferguson.me/pwa-tips-and-tricks/
    icons: {
      icon: [
        { url: "/icons/favicon-32x32.png", type: "image/png" },
        { url: "/icons/favicon-16x16.png", type: "image/png" },
      ],
      shortcut: "/icons/favicon.ico",
      apple: [
        {
          url: "/icons/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "mask-icon",
          url: "/icons/safari-pinned-tab.svg",
        },
        {
          media:
            "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_14_Pro_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_14_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_11__iPhone_XR_landscape.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
        },
        {
          media:
            "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
        },
        {
          media:
            "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/12.9__iPad_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/11__iPad_Pro__10.5__iPad_Pro_landscape.png",
        },
        {
          media:
            "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/10.9__iPad_Air_landscape.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/10.5__iPad_Air_landscape.png.png",
        },
        {
          media:
            "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/10.2__iPad_landscape.pn.png",
        },
        {
          media:
            "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
        },
        {
          media:
            "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
          rel: "apple-touch-startup-image",
          url: "/icons/8.3__iPad_Mini_landscape.png",
        },
        {
          media:
            "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_14_Pro_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_14_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_11__iPhone_XR_portrait.png",
        },
        {
          media:
            "screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
        },
        {
          media:
            "screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
        },
        {
          media:
            "screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
        },
        {
          media:
            "screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/12.9__iPad_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
        },
        {
          media:
            "screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/10.9__iPad_Air_portrait.png",
        },
        {
          media:
            "screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/10.5__iPad_Air_portrait.png",
        },
        {
          media:
            "screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/10.2__iPad_portrait.png",
        },
        {
          media:
            "screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
        },
        {
          media:
            "screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          rel: "apple-touch-startup-image",
          url: "/icons/8.3__iPad_Mini_portrait.png",
        },
      ],
    },
    other: {
      "msapplication-TileColor": "#ffc40d",
      "msapplication-config": "/icons/browserconfig.xml",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "#ffffff",
    },
  },
  generateMetadataForHomePage: async () => {
    const dictionary = await getDictionary();
    return {
      title: dictionary.homepage.title,
      keywords: [
        dictionary.jlpt,
        dictionary.subject.kanji,
        dictionary.subject.mean,
      ],
      description: dictionary.homepage.description,
      openGraph: {
        title: dictionary.homepage.title,
        description: dictionary.homepage.description,
        url: `https://${process.env.VERCEL_URL}/`,
        siteName: dictionary.siteName,
        type: dictionary.appType,
      },
    };
  }
};

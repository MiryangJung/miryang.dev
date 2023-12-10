import localFont from "next/font/local";

export const suite = localFont({
  src: [
    {
      path: "./SUITE-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./SUITE-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SUITE-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./SUITE-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./SUITE-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./SUITE-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./SUITE-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

import type React from "react";

interface LogoSvgProps {
  width: number;
  height: number;
}

const LogoSvg: React.FC<LogoSvgProps> = ({ width, height }) => (
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  <svg
    width={width}
    height={height}
    viewBox="0 0 121 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5 45L24 45L24 45L22.5 45ZM31 133.5L31 132H31L31 133.5ZM83.8788 156.879C83.293 157.465 83.293 158.414 83.8788 159C84.4646 159.586 85.4143 159.586 86.0001 159L83.8788 156.879ZM111 36.5L111 35H111V36.5ZM2 104C1.17157 104 0.5 104.672 0.5 105.5C0.5 106.328 1.17157 107 2 107V104ZM2 91C1.17157 91 0.5 91.6716 0.5 92.5C0.5 93.3284 1.17157 94 2 94V91ZM119.5 125L118 125V125L119.5 125ZM21 45V94H24V45H21ZM31 38H74V35H31V38ZM31 135H112V132H31V135ZM74 38V16H71V38H74ZM96 149V135H93V149H96ZM86.0001 159L96.0001 149L93.8788 146.879L83.8788 156.879L86.0001 159ZM82 8V38H85V8H82ZM85 38H111V35H85V38ZM101 27V38H104V27H101ZM31 18H74V15H31V18ZM47 8L85 8L85 5L47 5L47 8ZM21 104V125H24V104H21ZM2 107H22V104H2V107ZM2 94H24V91H2V94ZM118 45V125H121V45H118ZM30.5 16.5C30.5 18.1569 29.1569 19.5 27.5 19.5V22.5C30.8137 22.5 33.5 19.8137 33.5 16.5H30.5ZM27.5 19.5C25.8431 19.5 24.5 18.1569 24.5 16.5H21.5C21.5 19.8137 24.1863 22.5 27.5 22.5V19.5ZM24.5 16.5C24.5 14.8431 25.8431 13.5 27.5 13.5V10.5C24.1863 10.5 21.5 13.1863 21.5 16.5H24.5ZM27.5 13.5C29.1569 13.5 30.5 14.8431 30.5 16.5H33.5C33.5 13.1863 30.8137 10.5 27.5 10.5V13.5ZM46.5 6.5C46.5 8.15685 45.1569 9.5 43.5 9.5V12.5C46.8137 12.5 49.5 9.81371 49.5 6.5H46.5ZM43.5 9.5C41.8431 9.5 40.5 8.15685 40.5 6.5H37.5C37.5 9.81371 40.1863 12.5 43.5 12.5V9.5ZM40.5 6.5C40.5 4.84315 41.8431 3.5 43.5 3.5V0.5C40.1863 0.5 37.5 3.18629 37.5 6.5H40.5ZM43.5 3.5C45.1569 3.5 46.5 4.84315 46.5 6.5H49.5C49.5 3.18629 46.8137 0.5 43.5 0.5V3.5ZM105.5 23.5C105.5 25.1569 104.157 26.5 102.5 26.5V29.5C105.814 29.5 108.5 26.8137 108.5 23.5H105.5ZM102.5 26.5C100.843 26.5 99.5 25.1569 99.5 23.5H96.5C96.5 26.8137 99.1863 29.5 102.5 29.5V26.5ZM99.5 23.5C99.5 21.8431 100.843 20.5 102.5 20.5V17.5C99.1863 17.5 96.5 20.1863 96.5 23.5H99.5ZM102.5 20.5C104.157 20.5 105.5 21.8431 105.5 23.5H108.5C108.5 20.1863 105.814 17.5 102.5 17.5V20.5ZM21 124.5C21 130.828 25.6716 135 31 135L31 132C27.3284 132 24 129.172 24 124.5H21ZM111.5 135C116.328 135 121 130.828 121 125L118 125C118 129.172 114.672 132 111.5 132L111.5 135ZM31.5 35C24.5608 35 21 40.2869 21 45L24 45C24 41.7131 26.4392 38 31.5 38L31.5 35ZM121.006 44.9946C121.006 38.4963 115.647 35 111 35L111 38C114.352 38 118.006 40.4932 118.006 44.9946L121.006 44.9946Z"
      fill="white"
    />
    <path
      d="M43 48.5H98C102.694 48.5 106.5 52.3056 106.5 57V112C106.5 116.694 102.694 120.5 98 120.5H43C38.3056 120.5 34.5 116.694 34.5 112V57C34.5 52.3056 38.3056 48.5 43 48.5Z"
      stroke="white"
      strokeWidth="3"
      shapeRendering="crispEdges"
    />
    <path
      d="M36 52.5H105M38.5 51V118M41.5 50V118M44.5 50V118M47.5 50L47.5 118M50.5 50V62M50.5 50V62M50.5 106V118M53.5 50V62M53.5 50V62M53.5 106V118M56.5 50V62M56.5 50V62M56.5 106V118M59.5 50V62M59.5 50V62M59.5 106V118M62.5 50V62M62.5 50V62M62.5 106V118M65.5 50V62M65.5 50V62M65.5 106V118M68.5 50V62M68.5 50V62M68.5 106V118M71.5 50V62M71.5 50V62M71.5 106V118M74.5 50V62M74.5 50V62M74.5 106V118M77.5 50V62M77.5 50V62M77.5 106V118M80.5 50V62M80.5 50V62M80.5 106V118M83.5 50V62M83.5 50V62M83.5 106V118M86.5 50V62M86.5 50V62M86.5 106V118M89.5 50V62M89.5 50V62M89.5 106V118M92.5 50V65M92.5 103V118M95.5 50V118M98.5 50V118M101.5 50V118M104.5 50V118M36 55.5H105M36 58.5H105M36 61.5H105M36 64.5H48M93 64.5H108M36 67.5H48M93 67.5H108M36 70.5H48M93 70.5H108M36 73.5H48M93 73.5H108M36 76.5H48M93 76.5H108M36 79.5H48M93 79.5H108M36 82.5H48M93 82.5H108M36 85.5H48M93 85.5H108M36 88.5H48M93 88.5H108M36 91.5H48M93 91.5H108M36 94.5H48M93 94.5H108M36 97.5H48M93 97.5H108M36 100.5H48M93 100.5H108M36 103.5H48M93 103.5H108M36 106.5H105M36 109.5H105M36 112.5H105M36 115.5H105M36 118.5H105"
      stroke="white"
      strokeOpacity="0.5"
    />
    <path
      d="M56 61.5H86C90.6944 61.5 94.5 65.3056 94.5 70V100C94.5 104.694 90.6944 108.5 86 108.5H56C51.3056 108.5 47.5 104.694 47.5 100V70C47.5 65.3056 51.3056 61.5 56 61.5Z"
      stroke="white"
      strokeWidth="3"
      fill="none"
    />
  </svg>
);

export default LogoSvg;

const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1:
    "sm:text-5xl md:text-7xl text-4xl bg-gradient-to-r from-linearLeft to-linearRight bg-clip-text font-semibold text-transparent font-title",
  heading2:
    "font-title text-white sm:text-4xl md:text-6xl text-3xl text-bold relative",
  heading3:
    "font-title text-white md:text-4xl sm:text-3xl text-2xl text-bold relative",
  heading4:
    "font-title text-white md:text-3xl sm:text-2xl text-xl text-bold relative",
  paragraph: "font-text text-primary sm:text-base md:text-lg text-sm relative",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-24 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-24 px-6 sm:py-16 py-4",

  marginX: "sm:mx-24 mx-6",
  marginY: "sm:my-16 my-6",
  marginYTitle: "sm:mt-12 sm:mb-6 mt-8 my-4",
  marginYBloc: "ss:mt-[120px] ss:mb-[0px] mt-[100px] mb-[100px]",

  gradientBtn:
    "w-[80px] h-[36px] text-primary bg-background hover:bg-gradient-to-r from-linearLeft to-linearRight hover:text-white transition duration-500 relative rounded-3xl cursor-pointer font-text",
  gradientBtnBg:
    "w-[82px]  h-[38px] -right-[1px] -top-[1px] absolute rounded-3xl ",
  gradientLine:
    "sm:w-[80px] sm:h-[8px] w-[50px]h-[6px] rounded-full bg-gradient-to-r from-linearLeft to-linearRight",

  glassBg:
    "border border-solid border-slate-600 bg-transparent backdrop-blur-sm",
};

export default styles;

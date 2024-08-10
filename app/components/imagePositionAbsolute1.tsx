import historyImg from "~/assets/images/about-us__history1.png";
import historyImg1 from "~/assets/images/about-us__history2.png";

export function ImagePositionAbsolute1() {
  return (
    <div className={"relative inline-block w-fit shrink-0"}>
      <img src={historyImg} alt="" />
      <img
        className={"absolute hidden md:inline-block top-4 -left-16"}
        src={historyImg1}
        alt=""
      />
      <img
        className={"absolute hidden md:inline-block bottom-4 -right-16"}
        src={historyImg1}
        alt=""
      />
    </div>
  );
}

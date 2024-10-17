import Image from "next/image";
import { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import { skill } from "@/types/main";
import { useTheme } from "next-themes";

const Skill = ({ name, image }: skill) => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    new FastAverageColor()
      .getColorAsync(image)
      .then((color) => {
        const rgba = color.rgb.split(")");
        setBgColor(rgba[0] + ",0.07)");
      })
      .catch((e) => {
        console.log(e);
      });
  }, [image]);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        title={name}
        style={{ backgroundColor: bgColor }}
        className={
          "h-100 w-100 md:h-200 md:w-200 rounded-full bg-gray-100 dark:bg-grey-800 flex items-center justify-center"
        }
      >
        <Image
          alt="skill"
          width={500}
          height={500}
          className={`h-100 w-100 md:h-200 md:w-200 object-contain rounded-md ${
            theme === "dark" &&
            (name === "GitHub" ||
            name === "Vercel" ||
            name === "NextJS" ||
            name === "ExpressJS"
              ? "invert"
              : "invert-0")
          }`}
          src={image}
        />
      </div>
      <p className="text-sm md:text-base">{name}</p>
    </div>
  );
};

export default Skill;

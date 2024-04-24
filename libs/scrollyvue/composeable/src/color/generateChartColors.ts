import { MdColor } from '@scrollyvue/common';
import { useGenerateCharColor } from './generateChartColor';

const generateColor = (color?: MdColor) => {
  let resultColor: string | undefined = useGenerateCharColor(color);
  while (!resultColor) {
    resultColor = useGenerateCharColor(color);
  }
  return resultColor;
}

export const useGenerateCharColors = (
  data: Array<any>,
  color?: MdColor,
  colors?: MdColor[]
) => {
  const resultColors: Array<string> = [];
  const maxNewGeneratedColors = 12;

  

  data.forEach(() => {
    let colorToUse: MdColor | undefined = color;

    if(colors && colors.length > 0) {
      const randomColorPosition = Math.floor(Math.random() * colors.length);
      colorToUse = colors[randomColorPosition];
    }
    let resultColor = generateColor(colorToUse);

    if (resultColors.indexOf(resultColor) != -1 || !resultColor) {
      for (let i = 0; i < maxNewGeneratedColors; i++) {
        resultColor = generateColor(colorToUse);
        if(resultColors.indexOf(resultColor) == -1) {
          break;
        }
      }
    }

    resultColors.push(resultColor);
  });
  return resultColors;
};

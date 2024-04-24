import { MdColorEnum, MdColor } from '@scrollyvue/common';
import colors from 'vuetify/util/colors'

const defaultColor = MdColorEnum.purple;

export const useGenerateCharColor = (color?: MdColor) => {
  const randomColorPosition = Math.floor(Math.random() * Object.keys(MdColorEnum).length);
  const colorPalete = [
    colors[color ?? defaultColor]['base'],
    colors[color ?? defaultColor]['lighten5'],
    colors[color ?? defaultColor]['lighten4'],
    colors[color ?? defaultColor]['lighten3'],
    colors[color ?? defaultColor]['lighten2'],
    colors[color ?? defaultColor]['lighten1'],
    colors[color ?? defaultColor]['darken1'],
    colors[color ?? defaultColor]['darken2'],
    colors[color ?? defaultColor]['darken3'],
    colors[color ?? defaultColor]['darken4'],
    colors[color ?? defaultColor]['accent1'],
    colors[color ?? defaultColor]['accent2'],
    colors[color ?? defaultColor]['accent3'],
    colors[color ?? defaultColor]['accent4'],
  ];
  return colorPalete[randomColorPosition];
};


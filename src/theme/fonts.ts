type CreateFontsUtilsOptions = {
  /**
   * The base font size to use for the font scale.
   * @default 16
   */
  baseFontSize?: number
  /**
   * The fonts to use in the app.
   * Must include a default font.
   */
  fonts: Record<string, { name: string; weights: Record<string, boolean> }>
}

export function createFontsUtils({
  baseFontSize = 16,
  fonts,
}: CreateFontsUtilsOptions) {
  // These sizes are based on the Tailwind CSS scale but reduced slightly for mobile device.
  const fontSizes = {
    xs: baseFontSize * 0.75,
    sm: baseFontSize * 0.875,
    md: baseFontSize * 1,
    lg: baseFontSize * 1.125,
    xl: baseFontSize * 1.25,
    ['2xl']: baseFontSize * 1.5,
    ['3xl']: baseFontSize * 1.875,
    ['4xl']: baseFontSize * 2.25,
    ['5xl']: baseFontSize * 3,
    ['6xl']: baseFontSize * 4,
    ['7xl']: baseFontSize * 5,
    ['8xl']: baseFontSize * 6,
    ['9xl']: baseFontSize * 8,
  } as const

  type FontSize = keyof typeof fontSizes
  type Fonts = typeof fonts
  type Font = keyof typeof fonts

  return {
    fonts,
    fontSizes,
    utils: {
      font: <T extends Font>(
        weight: keyof Fonts[T]['weights'],
        // @ts-expect-error
        font: T = 'default',
        italic = false
      ) => `${fonts[font].name}-${weight}${italic ? '-Italic' : ''}`,
      fontSize: (size: FontSize) => ({ fontSize: fontSizes[size] }),
    },
  }
}

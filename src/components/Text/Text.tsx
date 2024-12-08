import React from 'react'

import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'
import Animated from 'react-native-reanimated'
import {
  createStyleSheet,
  UnistylesTheme,
  UnistylesVariants,
  useStyles,
} from 'react-native-unistyles'

import { MarginProps } from '../../theme/types'
import { extractSpacingStyles } from '../../theme/utils'

type StyleProps = {
  color?: keyof UnistylesTheme['colors']
  rawColor?: string
  font?: keyof UnistylesTheme['fonts']
  italic?: boolean
  weight?: keyof UnistylesTheme['fonts'][keyof UnistylesTheme['fonts']]['weights']
  size?: keyof UnistylesTheme['fontSizes']
}

export interface TextProps
  extends NativeTextProps,
    MarginProps,
    StyleProps,
    UnistylesVariants<typeof stylesheet> {
  animated?: boolean
}

export const Text = React.forwardRef<NativeText, TextProps>(
  (
    {
      animated = false,
      style,
      color,
      rawColor,
      center,
      font,
      italic,
      weight,
      size,
      ...props
    },
    ref
  ) => {
    const { styles, theme } = useStyles(stylesheet, { center })

    const [restProps, spacingStyle] = React.useMemo(
      () => extractSpacingStyles(props, theme.stacks.spacing),
      [props, theme]
    )

    const Component = animated ? Animated.Text : NativeText

    return (
      <Component
        ref={ref}
        {...restProps}
        style={[
          styles.root({ color, rawColor, font, italic, weight, size }),
          spacingStyle,
          style,
        ]}
      />
    )
  }
)

const stylesheet = createStyleSheet((theme) => ({
  root: ({
    color,
    rawColor,
    font = 'default',
    italic = false,
    weight = 'regular',
    size = 'md',
  }: StyleProps) => ({
    color: color ? theme.colors[color] : (rawColor ?? theme.colors.text),
    fontFamily: theme.utils.font(weight, font, italic),
    fontSize: theme.fontSizes[size],
    variants: {
      center: {
        true: {
          textAlign: 'center',
        },
      },
    },
  }),
}))

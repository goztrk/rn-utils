import { FlexStyle } from 'react-native'

/**
 * Represents the type of spacing, either "margin" or "padding".
 */
type SpacingType = 'margin' | 'padding'

/**
 * Represents the direction of spacing, such as "Top", "Right", "Bottom", "Left", "X", or "Y".
 */
type SpacingDirection = 'Top' | 'Right' | 'Bottom' | 'Left' | 'X' | 'Y'

/**
 * Represents the properties for a given spacing type, allowing for optional numeric values.
 * It includes the base type (e.g., "margin") and directional types (e.g., "marginTop").
 */
type SpacingProps<T extends SpacingType> = {
  [K in `${T}` | `${T}${SpacingDirection}`]?: number
}

/**
 * Represents the properties specific to margin spacing.
 */
export type MarginProps = SpacingProps<'margin'>

/**
 * Represents the properties specific to padding spacing.
 */
export type PaddingProps = SpacingProps<'padding'>

export type AllSpacingProps = MarginProps & PaddingProps

export type MarginStyle = Pick<
  FlexStyle,
  | 'margin'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
>
export type PaddingStyle = Pick<
  FlexStyle,
  | 'padding'
  | 'paddingHorizontal'
  | 'paddingVertical'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
>
export type SpacingStyle = MarginStyle & PaddingStyle

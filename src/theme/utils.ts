import { AllSpacingProps, SpacingStyle } from './types'

export function extractSpacingStyles<P extends AllSpacingProps>(
  props: P,
  multiplier: number = 1
): [Extract<P, SpacingStyle>, SpacingStyle] {
  const restProps: Partial<P> = {}
  const spacingStyle: SpacingStyle = {}

  Object.keys(props).forEach((key: string) => {
    const propKey = key as keyof P
    if (key.startsWith('margin') || key.startsWith('padding')) {
      const value = (props[propKey] as number) * multiplier
      if (key.endsWith('X')) {
        spacingStyle[key.replace('X', 'Horizontal') as keyof SpacingStyle] = value
      } else if (key.endsWith('Y')) {
        spacingStyle[key.replace('Y', 'Vertical') as keyof SpacingStyle] = value
      } else {
        spacingStyle[key as keyof SpacingStyle] = value
      }
    } else {
      restProps[propKey] = props[propKey]
    }
  })

  return [restProps as Extract<P, SpacingStyle>, spacingStyle] as const
}

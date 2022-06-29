export enum AllowedBreakpoints {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

type TBreakpoints = {
  [key in AllowedBreakpoints]: string;
};

export const breakpoints = {
  xs: '499.98px',
  sm: '639.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1799.98px',
} as TBreakpoints;

export const deviceBreakpoints = {
  xs: `min-width: ${breakpoints.xs}`,
  sm: `min-width: ${breakpoints.sm}`,
  md: `min-width: ${breakpoints.md}`,
  lg: `min-width: ${breakpoints.lg}`,
  xl: `min-width: ${breakpoints.xl}`,
  xxl: `min-width: ${breakpoints.xxl}`,
} as TBreakpoints;

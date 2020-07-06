/* eslint-disable unicorn/filename-case */
/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.jpeg" {
  const value: string
  export = value
}

declare module "*.jpg" {
  const value: string
  export = value
}

declare module "*.png" {
  const value: string
  export = value
}

declare module "*.react.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>

  export default content
}

declare module "*.svg" {
  const value: string
  export = value
}

declare module "*.gif" {
  const value: string
  export = value
}

declare module "*.ico" {
  const value: string
  export = value
}

declare module "*.webp" {
  const value: string
  export = value
}

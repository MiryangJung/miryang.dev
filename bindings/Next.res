module Link = {
  @module("next/link") @react.component
  external make: (
    ~children: React.element,
    ~href: string,
    ~passHref: option<bool>=?,
  ) => React.element = "default"
}

module Image = {
  @module("next/image") @react.component
  external make: (
    ~alt: string=?,
    ~className: string=?,
    ~loading: [
      | #"lazy"
      | #eager
    ]=?,
    ~objectFit: [
      | #fill
      | #contain
      | #cover
      | #none
      | #"scale-down"
    ]=?,
    ~src: string,
    ~width: float=?,
    ~height: float=?,
  ) => React.element = "default"
}


module Script = {
  @module("next/script") @react.component
  external make: (
    ~src: string,
    ~strategy: [#beforeInteractive | #afterInteractive | #lazyOnload | #worker],
    ~onLoad: unit => unit=?,
  ) => React.element = "default"
}
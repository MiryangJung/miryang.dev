// refer : https://github.com/MoOx/rescript-next/blob/main/src/Next.res

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

module Router = {
  type routerEvent

  type routerEventOptions = {shallow: bool}

  @send
  external on: (
    routerEvent,
    @string
    [
      | #routeChangeStart((string, routerEventOptions) => unit)
      | #routeChangeComplete((string, routerEventOptions) => unit)
      | #routeChangeError((string, routerEventOptions) => unit)
      | #beforeHistoryChange((string, routerEventOptions) => unit)
      | #hashChangeStart((string, routerEventOptions) => unit)
      | #hashChangeComplete((string, routerEventOptions) => unit)
    ],
  ) => unit = "on"

  @send
  external off: (
    routerEvent,
    @string
    [
      | #routeChangeStart((string, routerEventOptions) => unit)
      | #routeChangeComplete((string, routerEventOptions) => unit)
      | #routeChangeError((string, routerEventOptions) => unit)
      | #beforeHistoryChange((string, routerEventOptions) => unit)
      | #hashChangeStart((string, routerEventOptions) => unit)
      | #hashChangeComplete((string, routerEventOptions) => unit)
    ],
  ) => unit = "off"

  type router = {
    pathname: string,
    query: Js.Dict.t<string>,
    asPath: string,
    isFallback: bool,
    basePath: string,
    locale: string,
    locales: array<string>,
    defaultLocale: string,
    // domainLocales: Array<{domain, defaultLocale, locales}>, // @todo
    isReady: bool,
    isPreview: bool,
    events: routerEvent,
  }

  type path = {
    pathname: string,
    query: Js.Dict.t<string>,
  }

  type options = {
    scroll: bool,
    shallow: bool,
    locale: string,
  }

  @send external push: (router, string) => unit = "push"
  @send external pushWithOptions: (router, string, options) => unit = "push"
  @send external pushObj: (router, path) => unit = "push"
  @send external pushObjWithOptions: (router, path, options) => unit = "push"

  @send external replace: (router, string) => unit = "replace"
  @send external replaceWithOptions: (router, string, options) => unit = "replace"
  @send external replaceObj: (router, path) => unit = "replace"
  @send external replaceObjWithOptions: (router, path, options) => unit = "replace"

  @send external prefetch: (router, string) => unit = "prefetch"
  @send
  external beforePopState: (router, (string, string, options) => unit) => unit = "beforePopState"
  @send external back: router => unit = "back"
  @send external reload: router => unit = "reload"

  @module("next/router") external useRouter: unit => router = "useRouter"
}

@react.component
let default = () => {
  <>
    <Next.Script
      strategy=#lazyOnload
      src={`https://www.googletagmanager.com/gtag/js?id=${Metadata.analytics["google"]}`}
    />
    <Next.Script
      strategy=#lazyOnload
      src={`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${Metadata.analytics["google"]}');
        `}
    />
  </>
}

import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://fda1d94fc3d43dd3eaa46be2b4c0247c@o4507921699569664.ingest.de.sentry.io/4507921702781008",
    tracesSampleRate: 1,
    autoInstrumentRemix: true
})
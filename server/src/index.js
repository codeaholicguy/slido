import App from './app'

export const app = new App({
  port: process.env.PORT
})

app.listen()

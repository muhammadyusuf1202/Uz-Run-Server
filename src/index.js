import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html lang="uz">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Uz-Run | Kelajakni joylang</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
        <style>
          :root {
            --bg: #000000;
            --accent: #0070f3;
            --text: #ffffff;
            --gray: #888888;
          }

          body {
            margin: 0;
            background-color: var(--bg);
            color: var(--text);
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
          }

          /* Vercel uslubidagi orqa fon nuri */
          .glow {
            position: absolute;
            width: 60vw;
            height: 60vw;
            background: radial-gradient(circle, rgba(0, 112, 243, 0.1) 0%, rgba(0,0,0,0) 70%);
            z-index: -1;
            filter: blur(50px);
          }

          /* --- PROFESSIONAL LOGO --- */
          .logo-box {
            position: relative;
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 50px;
          }

          .icon-shape {
            width: 70px;
            height: 70px;
            background: #fff;
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotate(-5deg);
            transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 10px 30px rgba(255,255,255,0.1);
          }

          .logo-box:hover .icon-shape {
            transform: rotate(0deg) scale(1.1);
            background: var(--accent);
          }

          .icon-shape svg path {
            transition: 0.3s;
          }

          .logo-box:hover .icon-shape svg path {
            stroke: #fff;
          }

          .brand-text {
            font-size: 48px;
            font-weight: 900;
            letter-spacing: -3px;
          }

          .run-color {
            background: linear-gradient(90deg, #0070f3, #f81ce5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* --- KONTENT --- */
          h1 {
            font-size: 64px;
            font-weight: 900;
            margin: 0;
            letter-spacing: -4px;
            line-height: 1;
            text-align: center;
          }

          p {
            color: var(--gray);
            font-size: 20px;
            max-width: 500px;
            text-align: center;
            margin: 30px 0;
            line-height: 1.5;
          }

          /* --- TUGMALAR --- */
          .btn-container {
            display: flex;
            gap: 20px;
          }

          .btn-main {
            background: #fff;
            color: #000;
            padding: 16px 40px;
            border-radius: 7px;
            text-decoration: none;
            font-weight: 700;
            font-size: 18px;
            transition: 0.2s;
            border: 2px solid #fff;
          }

          .btn-main:hover {
            background: transparent;
            color: #fff;
          }

          .btn-outline {
            background: transparent;
            color: var(--gray);
            padding: 16px 40px;
            border-radius: 7px;
            text-decoration: none;
            font-weight: 700;
            font-size: 18px;
            border: 1px solid #333;
            transition: 0.2s;
          }

          .btn-outline:hover {
            border-color: #fff;
            color: #fff;
          }

          footer {
            position: absolute;
            bottom: 40px;
            color: #333;
            font-size: 14px;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
        </style>
      </head>
      <body>
        <div class="glow"></div>

        <div class="logo-box">
          <div class="icon-shape">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 30L50 80L80 30" stroke="black" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M35 15H65" stroke="black" stroke-width="10" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="brand-text">Uz-<span class="run-color">Run</span></div>
        </div>

        <h1>Tezkor. Sodda. <br> <span style="color: var(--accent)">Global.</span></h1>
        
        <p>Uz-Run platformasi bilan loyihalaringizni soniyalar ichida dunyoga yoying.</p>

        <div class="btn-container">
          <a href="https://github.com/new" target="_blank" class="btn-main">Loyiha yuklash</a>
          <a href="/about" class="btn-outline">Hujjatlar</a>
        </div>

        <footer>© 2026 Uz-Run Cloud Systems</footer>
      </body>
    </html>
  `)
})

// Boshqa route'larni ham saqlab qolamiz
app.get('/about', (req, res) => { res.send('Uz-Run haqida sahifa tayyorlanmoqda...') })

export default app

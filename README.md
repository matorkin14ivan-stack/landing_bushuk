# Landing (Figma export) — GitHub Pages ready

Этот проект пересобран в полноценный Vite + React + TypeScript проект и готов к деплою на GitHub Pages.

## Локальный запуск

```bash
npm install
npm run dev
```

## Деплой на GitHub Pages (рекомендуемый способ)

1. Загрузите весь проект в репозиторий GitHub.
2. В репозитории откройте **Settings → Pages**.
3. В разделе **Build and deployment → Source** выберите **GitHub Actions**.
4. Зайдите во вкладку **Actions** и дождитесь завершения workflow `Deploy Vite site to GitHub Pages`.
5. GitHub покажет ссылку на опубликованный сайт.

> Примечание: в `vite.config.ts` используется `base: "./"`, поэтому сайт корректно работает и на `https://<user>.github.io/<repo>/`, и на кастомном домене.

## Кастомный домен

Добавьте домен в **Settings → Pages → Custom domain** и включите **Enforce HTTPS** (после успешной проверки DNS).

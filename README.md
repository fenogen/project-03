# project-03

Finance control - Web application

Design: https://www.figma.com/file/IHc8T3LE4yfMVp6c2CL1aP/

Backend: https://kapusta-backend.goit.global/api-docs/#/

Project: https://fenogen-finance-control.netlify.app/


#### Запуску проекту:
Щоб запусти проект тепер потрібна NodeJS 15:
1) В PowerShell маэ бути встановлений менеджер fnm (аналог nvp):
1.1 Змінюємо на режим "небезпечний" (потрібно запустити від імені Адмінімтратора)
Set-ExecutionPolicy Restricted
1.2 Після всіх налаштуваннь (після п.2.2)  повертаємо назад режим "безпечно"
Set-ExecutionPolicy RemoteSigned
2) в VS code:
2.1 Вибирамо контретну версію для використання (попердньо версія має бути встановлена):
fnm use 15.14.0
2.2 Перевіряємо версію яка зараз діє
node --version
3) Щоб задеплоїти на Netlify необхідно:
npm install netlify-cli -g (встановлюємо, якщо до цього ми його не встановлювали "глобально")
netlify login (можливо прийдеться залогінитись)
npm run deploy (заливаємо на хостінг)


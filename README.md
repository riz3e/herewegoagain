This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Всё, что связано с призмой
    npm install prisma --save-dev
    #если сам ебашишь свою дб, не пиздя у меня - всё что снизу
    npx prisma init 
    # здесь инфа - https://www.prisma.io/docs/getting-started/quickstart
    Model your data in the Prisma schema
    npx prisma migrate dev
    npx prisma generate

Установка DaisyUI ( https://daisyui.com/docs ) - Плагин на TailwindCSS, который добавляет заготовленные элементы(приколяны) 
    npm i -D daisyui@latest
    # Оригинальный гайд по установке - https://daisyui.com/docs/install/
    # Всё, что дальше - если сам проект новый делаешь
    Затем добавьте daisyUI в tailwind.config.js:
        module.exports = {
        //...
        plugins: [require("daisyui")],
        }
    Поставить темы:
        https://daisyui.com/docs/themes/
        в tailwind.config.js
            module.exports = {
                //...
                daisyui: {
                    themes: ["light", "dark", "cupcake"],
                },
            }
        потом в layout.tsx добавить нужную тему в data-theme:
            <html data-theme="cupcake"></html>

Установка Next-Auth - основная хуйня для авторизации
    npm install next-auth

    дальше если на свой проект хочешь добавить, то чекай эту тему:
    https://next-auth.js.org/configuration/initialization#route-handlers-app

    вот этот мужик ахуенно объяснил, но он если че Raw SQL юзает, потому что с большими яйцами - https://www.youtube.com/watch?v=v6TPcU23wP8&ab_channel=WebDevEducation
    Призму как юзать в общем можешь чекнуть на сайте - https://playground.prisma.io

    для того, чтобы криптить пароль \|/
    npm i @types/bcrypt

    для валидации npm i zod

    хостинг для дб - https://supabase.com
    
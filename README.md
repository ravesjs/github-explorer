# Github Explorer
![explorer](https://github.com/ravesjs/github-explorer/blob/main/image/explorer.png)

 В зависимости от того, что выбрано в селекте,
 при отправке формы приложение делает запрос
 на один из следующих эндпоинтов:

 https://api.github.com/users/${nickname}
 пример значений: defunkt, ktsn, jjenzz, ChALkeR, Haroenv

 https://api.github.com/repos/${repo}
 пример значений: nodejs/node, radix-ui/primitives, sveltejs/svelte

 после чего, в списке выводится полученная информация;
 - если это юзер, то его full name и число репозиториев;
 - если это репозиторий, то его название и число звезд.
## Инструкция

1. Клонируйте репозиторий
    
    ```bash
    git clone https://github.com/ravesjs/github-explorer
    ```

    ## Установка
    
2. Установите зависимости
    ```bash
    npm install
    ```

    ### Development
    ```bash
    npm start
    ```
    ### Production
    
    ```bash
    npm run build
    ```

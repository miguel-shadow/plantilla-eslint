# 1. ESLint
Configuración de ***ESLint*** y ***ESLint Stylistic*** para proyectos de ***Node JS***


## 1.1. Instalación
Se puede instalar mediante cualquier gestor de paquetes de Node JS. En este caso se utiliza `pnpm`

- *ESLint* (versión `9.17.0`)

    ```powershell
    pnpm install eslint@9.17.0 --save-dev
    pnpx eslint --init
    # Seguir los pasos de configuración:
    #   > To check syntax and find problems
    #   > JavaScript modules (import/export)
    #   > Seleccionar un framework o ninguno
    #   > Seleccionar si se usa TypeScript o no
    #   Elegir donde corre el código:
    #     > Browser
    #     > Node
    #     > Ambos (tecla a)
    #   Instalar dependencias extra.
    #     > Seleccionar package manager
    ```

- *ESLint Stylistic* (versión `2.12.1`)

    ```powershell
    pnpm install @stylistic/eslint-plugin-js@2.12.1 --save-dev --save-exact
    ```

> [!TIP]
> Para evitar que **no** se **actualicen autmáticamente** las dependencias, modificar `package.json` del proyecto para **eliminar** los `^`


## 1.2. Configuración

- **Copiar** el contenido del archivo [eslint.config.mjs](eslint.config.mjs) en el archivo `eslint.config.mjs` del proyecto

- **Añadir** los siguientes `type` y `scripts` al archivo `package.json` del proyecto

    ```json
    {
        ...,
        "type": "module",
        "scripts": {
            "lint": "eslint",
            "lint-f": "eslint --fix"
        },
        ...
    }
    ```

    > [!TIP]
    > Para **ejecutar** los scripts: `pnpm run lint` y `pnpm run lint-f`

    > [!NOTE]
    > Ejemplo de `package.json`: [ver ejemplo package.json](package.json)


## 1.3. VS Code
Para que VS Code muestre los errores de ***ESLint***, se debe instalar la extensión [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) de Microsoft

Para establecer ESLint como **formateador por defecto**, añadir la siguiente configuración en `settings.json` (global, perfil o proyecto) de VS Code

```json
"eslint.format.enable": true,
"[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
```

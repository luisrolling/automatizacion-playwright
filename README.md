# Automatización de pruebas con Playwright

Proyecto de pruebas automatizadas para el sitio de demo [SauceDemo](https://www.saucedemo.com) y la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com). Incluye:

- **UI (login):** flujo válido y usuario bloqueado.
- **API:** pruebas GET y POST, con validación de código de estado y campos del JSON.
- **Mobile:** login simulado con el perfil Pixel 5.

## Requisitos

- Node.js LTS (versión 18 o superior)

## Instalación

```bash
npm install
npx playwright install
```

## Ejecución

Ejecutar toda la suite en Chromium:

```bash
npx playwright test --project=chromium
```

Ejecutar archivos específicos:

```bash
npx playwright test tests/login.spec.js --project=chromium
npx playwright test tests/api.spec.js --project=chromium
npx playwright test tests/mobile.spec.js --project=chromium
```

Para ver el navegador durante la ejecución, agrega `--headed`. Para ver el reporte HTML:

```bash
npx playwright show-report
```

## Estructura

```
automatizacion/
├── tests/
│   ├── login.spec.js    # Pruebas de login en UI
│   ├── api.spec.js      # Pruebas de API
│   └── mobile.spec.js   # Prueba de login en viewport móvil
├── pages/
│   └── LoginPage.js     # Page Object con los selectores y acciones del login
└── playwright.config.js # Configuración de navegadores y proyectos
```

- **`tests/`**: contiene los archivos de prueba. Cada archivo termina en `.spec.js`.
- **`pages/`**: contiene las clases de página. `LoginPage.js` centraliza los selectores del login, para que un cambio en la página solo se corrija en un lugar.

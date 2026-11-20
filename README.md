# TransferECO

**Acceso para celular:** https://arqlal-byte.github.io/TransferECO/

**Aplicación de Google Apps Script:** https://script.google.com/macros/s/AKfycbwpWS4HwQWJ8dFGPEt-75Nd3QZZM44KGW_W8gY6UmTf5VFOjgG7YYI_GavIsRDukRwIHQ/exec

## Instalación en el celular

Se muestra una pantalla de instalación inicial **semejante a Mi Persona ECO**. Incluye el ícono rojo de TransferECO, instrucciones separadas para ambos sistemas y un botón **Continuar en el navegador** para quien no quiera instalar.

### iPhone y iPad (Safari)

1. Pulsa **Compartir**.
2. Selecciona **Añadir a pantalla de inicio**.
3. Pulsa **Añadir**.

### Android (Chrome)

1. Pulsa el menú **⋮** del navegador.
2. Selecciona **Instalar aplicación** o **Añadir a pantalla de inicio**, según la opción disponible.
3. Confirma **Instalar** o **Añadir**.

Una vez instalada, la pantalla de instrucciones ya no se muestra y aparece el botón **Abrir aplicación**. Si se continúa en el navegador sin instalar, la misma pantalla de acceso estará disponible durante esa visita.

**Nota:** TransferECO en GitHub Pages es únicamente una pantalla de acceso y de instalación. La aplicación real sigue en Google Apps Script. Por restricciones de navegación entre dominios, el sistema de Apps Script puede abrirse fuera de la ventana independiente de la PWA.

## Acceso administrativo

La esquina superior derecha de la pantalla de instalación y de acceso incluye un engrane pequeño que abre el panel administrativo del mismo despliegue de Apps Script mediante `?portal=admin`. El panel conserva sus mecanismos propios de autenticación y autorización. El engrane aparece en la pantalla de GitHub Pages; no modifica la interfaz interna del vendedor alojada en Apps Script.

## Archivos

- `index.html`: pantalla de instalación y acceso.
- `manifest.webmanifest`: metadatos PWA para el acceso.
- `sw.js`: caché local del acceso; no intercepta el dominio de Apps Script.
- `icons/`: versiones del ícono rojo de TransferECO.

## Configuración de publicación

GitHub Pages: rama `main`, carpeta `/ (root)`.

No guardar credenciales, registros de cobro, tokens ni datos personales en este repositorio público.

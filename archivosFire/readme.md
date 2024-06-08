# Subir archivos a Storage de Firebase

Aplicación móvil para subir archivos al Storage de Firebase.

**Web**: https://moviles-21d05.web.app/home

## Requisitos previos

- Git
- Node.js
- Ionic
- Angular Cli
- Firebase
- Proyecto y aplicación en Firebase

## Entorno

Copia en la ruta
```bash
  loginFire/src/environments/environment.ts
```
tus credenciales de aplicación en Firebase.

Tu entorno debería verse así:
```bash
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'tus_datos',
    authDomain: 'tus_datos',
    databaseURL: 'tus_datos',
    projectId: 'tus_datos',
    storageBucket: 'tus_datos',
    messagingSenderId: 'tus_datos',
    appId: 'tus_datos',
    measurementId: 'tus_datos',
  },
};
```

## Ejecución
Descarga el .zip del proyecto

Ubícate en la ruta del proyecto

Instala las dependencias 
```bash
npm install
```
Inicia su versión web
```bash
ionic serve
```
## Despliegue

**Web con Hosting de Firebase**

Ejecuta el comando que creará la carpeta _www_ en la raíz del proyecto
```bash
ionic build
```
Crea una carpeta para el hosting en Firebase
```bash
mkdir <nombre de la carpeta>
```

Ubícate en la carpeta creada
```bash
cd <nombre de la carpeta>
```
Inicia Firebase
```bash
firebase init
```
Elige la opción `hosting`

Copia el contenido de la carpeta _www_ en la carpeta que creaste `<nombre de la carpeta>/public`, reemplaza el `index.html`

Ejecuta el comando para el despliegue
```bash
firebase deploy
```

**Android**

Ejecuta el comando
```bash
  ionic capacitor build android
```
En Android Studio, con el proyecto ya abierto, ve a ` Build > Build Bundle(s)/APK(s) > Build APK(s)` y espera a que se genere el archivo `.apk`

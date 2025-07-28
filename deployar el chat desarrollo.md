# Guía de Despliegue - Chat en Desarrollo

Esta guía detalla los pasos necesarios para levantar el proyecto de chat en modo desarrollo.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:
- Docker y Docker Compose
- Node.js (versión 16 o superior)
- NPM

## Pasos para Desplegar en Desarrollo

### 1. Levantar el Proyecto con Docker Compose

Desde el directorio principal del proyecto, ejecuta:

```bash
docker-compose up -d
```

Este comando levantará todos los servicios necesarios (base de datos, Redis, etc.) en segundo plano.

Para verificar que los contenedores están ejecutándose correctamente:

```bash
docker-compose ps
```

### 2. Ejecutar el Backend

Una vez que Docker Compose esté ejecutándose, inicia el servidor backend:

```bash
npm run back-end
```

Este comando iniciará el servidor API en modo desarrollo. El backend estará disponible por defecto en `http://localhost:3080`.

### 3. Ejecutar el Frontend

Abre una nueva terminal y navega al directorio del cliente:

```bash
cd client
```

Luego ejecuta el servidor de desarrollo del frontend:

```bash
npm run dev
```

El frontend estará disponible por defecto en `http://localhost:3090`.

## Verificación

Una vez completados todos los pasos:

1. ✅ Docker Compose ejecutándose
2. ✅ Backend corriendo en `http://localhost:3080`
3. ✅ Frontend corriendo en `http://localhost:3090`

Ahora puedes acceder a la aplicación a través de tu navegador en `http://localhost:3090`.

## Comandos Útiles

### Detener los servicios
```bash
# Detener Docker Compose
docker-compose down

# Detener backend: Ctrl+C en la terminal correspondiente
# Detener frontend: Ctrl+C en la terminal correspondiente
```

### Reiniciar servicios
```bash
# Reiniciar Docker Compose
docker-compose restart

# Para reiniciar backend y frontend, simplemente detén y vuelve a ejecutar los comandos npm
```

## Solución de Problemas

- **Si los puertos están ocupados**: Verifica que no haya otros servicios ejecutándose en los puertos 3080 y 3090
- **Si Docker Compose falla**: Asegúrate de que Docker esté ejecutándose y que tengas permisos suficientes
- **Si npm falla**: Ejecuta `npm install` en el directorio raíz y en el directorio `client/` para instalar las dependencias

---

**Nota**: Este setup es solo para desarrollo. Para producción, consulta la documentación de despliegue correspondiente.
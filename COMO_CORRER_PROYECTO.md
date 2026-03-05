# Guía para correr el proyecto y asegurar datos iniciales

Esta guía explica cómo ejecutar el proyecto en cualquier PC y garantizar que los datos iniciales (tipos de documento y roles) estén siempre presentes, evitando problemas en el frontend.

## 1. Requisitos previos
- Docker y Docker Compose instalados.
- Clonar el repositorio completo (incluyendo las carpetas `db`, `be`, `fe`).
- Archivo `.env` correctamente configurado (puedes copiar y renombrar `.env.example`).

## 2. Comandos para iniciar el proyecto
Desde la raíz del proyecto:

```sh
docker compose up --build
```
Esto levantará la base de datos, el backend (FastAPI) y el frontend (React).

## 3. ¿Por qué no tendrás problemas con los tipos de documento?
El backend incluye un mecanismo automático de "seeding" (carga de datos iniciales) implementado en Python. Cada vez que el backend arranca, verifica y crea los tipos de documento y roles si no existen. Esto ocurre automáticamente, sin intervención manual.

- El script de seeding está en `be/app/seed_data.py`.
- Se ejecuta en el ciclo de vida de FastAPI (al iniciar el backend).
- Es idempotente: no duplica datos si ya existen.

## 4. Consideraciones
- No elimines ni modifiques el script de seeding ni su llamada en el backend.
- Si necesitas reiniciar todo desde cero (incluyendo la base de datos):
  ```sh
  docker compose down -v
  docker compose up --build
  ```
- El frontend mostrará siempre los tipos de documento si el backend y la base de datos están corriendo correctamente.

## 5. Solución de problemas
- Si el frontend no muestra los tipos de documento:
  1. Verifica que todos los servicios estén corriendo: `docker compose ps`.
  2. Consulta los logs del backend: `docker compose logs be`.
  3. Asegúrate de no tener errores en la configuración de `.env`.

## 6. Resumen
Gracias al seeding automático en el backend, los datos iniciales estarán siempre presentes, sin importar en qué PC corras el proyecto.

---

¿Dudas o problemas? Consulta el script `be/app/seed_data.py` o revisa los logs del backend para más detalles.

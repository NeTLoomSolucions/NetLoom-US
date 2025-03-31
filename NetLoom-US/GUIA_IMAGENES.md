# Guía para Imágenes de Demostración - NetLoom ChatBot

Esta guía te ayudará a gestionar las imágenes y materiales visuales para la demostración de NetLoom ChatBot en tu portafolio.

## Estructura de directorios

Para mantener organizadas las imágenes de demostración, sigue esta estructura:

```
netloom/
├── images/
│   ├── dashboard/          # Capturas del dashboard principal
│   ├── features/           # Imágenes de características específicas
│   ├── interface/          # Capturas de la interfaz conversacional
│   ├── models/             # Visualización de modelos predictivos
│   └── mockups/            # Mockups y diseños conceptuales
```

## Dimensiones recomendadas

- **Dashboard y pantallas principales**: 1200 x 800 px
- **Capturas de funcionalidades**: 800 x 600 px
- **Logos e iconos**: Formato SVG preferiblemente
- **Mockups de dispositivos**: 1200 x 900 px

## Formatos de imagen recomendados

- **Fotografías y capturas**: `.jpg` o `.png` (optimizadas para web)
- **Gráficos e ilustraciones**: `.svg` o `.png` con fondo transparente
- **Animaciones**: `.gif` para animaciones cortas o `.mp4` para videos

## Optimización de imágenes

Para asegurar que tu sitio cargue rápidamente:

1. Comprime todas las imágenes jpg/png usando herramientas como [TinyPNG](https://tinypng.com/)
2. Utiliza el atributo `width` y `height` en las etiquetas img
3. Considera usar el formato WebP para mejor rendimiento

## Imágenes de demostración sugeridas

Para una presentación completa, recomendamos preparar:

### 1. Dashboard principal
Una captura de pantalla del panel de control principal que muestre gráficos, estadísticas y la interfaz general.

### 2. Interfaz conversacional
Capturas que muestren ejemplos de la interfaz de chat con algunas conversaciones y consultas.

### 3. Visualización de datos
Ejemplos de gráficos, tablas y visualizaciones generadas por la plataforma.

### 4. Flujo de trabajo
Una secuencia que ilustre el proceso de creación de un modelo predictivo paso a paso.

### 5. Resultados de predicciones
Ejemplos visuales de predicciones y su precisión, preferiblemente con datos reales.

## Configuración en el código

Para agregar las imágenes al sitio, edita los siguientes archivos:

### En index.html (sección ChatBot)

Busca esta sección:
```html
<div class="product-image">
    <img src="images/chatbot-dashboard.png" alt="Dashboard de NetLoom ChatBot" onerror="this.src='grid-pattern.svg'; this.style.padding='80px'; this.style.background='#f7f9fc';">
</div>
```

Y reemplázala con la ruta de tu imagen real.

### En chatbot-details.html (header)

```html
<div class="product-image">
    <img src="images/chatbot-dashboard.png" alt="Dashboard de NetLoom ChatBot" onerror="this.src='grid-pattern.svg'; this.style.padding='120px'; this.style.background='#f7f9fc';">
</div>
```

## Galería de imágenes

Para crear una galería de imágenes, puedes agregar esta sección a chatbot-details.html:

```html
<section class="section-padding">
    <div class="container">
        <div class="section-header">
            <h2>Galería</h2>
            <p>Explora las funcionalidades de NetLoom ChatBot</p>
        </div>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="images/features/feature-1.jpg" alt="Análisis de datos">
                <div class="gallery-caption">Análisis de fuentes de datos múltiples</div>
            </div>
            <!-- Añade más imágenes aquí -->
        </div>
    </div>
</section>
```

## Consejos adicionales

1. **Consistencia visual**: Mantén una apariencia consistente en todas las imágenes (misma paleta de colores, estilo, etc.)
2. **Datos de ejemplo**: Utiliza datos realistas pero no sensibles para las demostraciones
3. **Responsividad**: Asegúrate de que las imágenes se vean bien en dispositivos móviles
4. **Texto alternativo**: Siempre incluye descripciones alt en las etiquetas img para accesibilidad

---

Con estas indicaciones podrás mantener organizadas y optimizadas todas las imágenes de demostración para el proyecto NetLoom ChatBot. 
# Landing Page Portátiles Distritec

Landing page comercial para promocionar portátiles HP mediante campañas digitales, tráfico orgánico y conexión con el CRM Soft-IA.

## Objetivo

Captar clientes potenciales interesados en adquirir un portátil para estudio, universidad, trabajo de oficina, pequeños negocios, emprendimientos, redes sociales y productividad diaria.

CTA principal:

**Quiero mi crédito**

## Concepto de campaña

La landing incorpora el concepto:

**Regreso a clases**

Mensajes principales:

- El portátil más vendido en Distritec.
- Tu día. Tu ritmo. Tu HP.
- Potencia para lo que haces.
- Estudio de crédito aproximado en 5 minutos.
- Este regreso a clases, estrena sin detener tus planes.
- Quiero mi crédito.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Google Fonts: Montserrat + Inter

## Estructura del proyecto

```text
distritec_portatiles_landing/
│
├── index.html
├── styles.css
├── script.js
│
└── assets/
    ├── logo-distritec.png
    ├── hp-front.png
    ├── hp-back.jpg
    ├── hp-ports.jpg
    └── finance/
        ├── krediya.png
        ├── payjoy.png
        ├── credismart.png
        ├── alo-credit.png
        ├── addi.png
        ├── teavalo.png
        ├── sistecredito.png
        └── banco-bogota.png
```

## index.html

Contiene:

- Header.
- Franja Regreso a Clases.
- Hero principal.
- CTA de crédito.
- Segmentación por tipo de usuario.
- Características del portátil.
- Slider de imágenes.
- Beneficios.
- Slider de financieras.
- CTA final.
- Footer simplificado.

## styles.css

Incluye:

- Identidad visual Distritec.
- Fondos oscuros con acentos verdes.
- Tramas tecnológicas minimalistas.
- Animaciones fade-in.
- Efecto flotante del producto.
- Botones con efecto pulse.
- Slider horizontal de financieras.
- Diseño responsive.

## script.js

Gestiona:

- Animaciones al hacer scroll con Intersection Observer.
- Slider automático de imágenes.
- Navegación por indicadores.
- Acción del botón "Quiero mi crédito".

## Imagen principal del portátil

Para usar un PNG transparente sin fondo blanco:

```css
.product-card {
  position: relative;
  background: transparent;
  border-radius: 0;
  padding: 10px;
  box-shadow: none;
  transform: rotate(-2deg);
}

.product-card img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}
```

## Slider de financieras

Los logos deben guardarse en:

```text
assets/finance/
```

Nombres utilizados:

```text
krediya.png
payjoy.png
credismart.png
alo-credit.png
addi.png
teavalo.png
sistecredito.png
banco-bogota.png
```

Ejemplo para agregar un logo:

```html
<div class="finance-logo">
  <img src="assets/finance/nueva-financiera.png" alt="Nueva Financiera">
</div>
```

Para mantener el carrusel infinito, conviene repetir el grupo completo de logos dentro de `.logo-track`.

## CTA principal

Texto:

**Quiero mi crédito**

En `script.js`, el enlace puede apuntar a:

- Soft-IA.
- WhatsApp.
- Formulario.
- Página de estudio de crédito.

Ejemplo:

```javascript
document.getElementById('creditButton').addEventListener('click', (e) => {
  e.preventDefault();

  window.location.href =
    'https://wa.me/573173741958?text=Hola%20Distritec,%20quiero%20realizar%20mi%20estudio%20de%20crédito.';
});
```

## Características comerciales mostradas

- Intel Celeron N4500.
- 8 GB RAM.
- 512 GB SSD.
- Pantalla de 14 pulgadas.

Antes de publicar, verificar que las especificaciones coincidan exactamente con el inventario disponible.

## Financiación

Texto recomendado:

> La aprobación, monto, cuota inicial y condiciones dependen de la evaluación de cada entidad financiera.

## Responsive

Puntos principales:

```css
@media (max-width: 900px)
```

```css
@media (max-width: 560px)
```

## Recomendaciones antes de publicar

1. Verificar especificaciones del portátil.
2. Usar imágenes finales optimizadas.
3. Confirmar logos vigentes de financieras.
4. Cambiar el CTA al enlace definitivo de Soft-IA.
5. Validar el WhatsApp comercial.
6. Comprimir imágenes.
7. Probar en móvil.
8. Agregar Pixel de Meta y Google Analytics si habrá pauta.
9. Medir clics en "Quiero mi crédito" como conversión.

## Embudo sugerido

```text
Meta Ads / TikTok / Orgánico
            ↓
Landing Portátiles Distritec
            ↓
CTA "Quiero mi crédito"
            ↓
CRM Soft-IA
            ↓
Perfilamiento
            ↓
Estudio de crédito
            ↓
Asesor comercial
            ↓
Cierre
```

## Identidad visual

- Negro: fondos.
- Verde Distritec: CTA y destacados.
- Blanco: textos principales.
- Gris: textos secundarios.

Conceptos visuales:

- Tecnología.
- Confianza.
- Modernidad.
- Facilidad.
- Financiación.
- Respaldo.

## Footer

Footer simplificado para evitar distracciones.

Incluye:

- Logo Distritec.
- Mensaje de marca.
- Contacto.
- Ubicación principal.

## Estado del proyecto

**V0.1 – Propuesta comercial inicial**

Pensada para:

- Validación interna.
- Presentación a gerencia.
- Pruebas de tráfico.
- Piloto de campañas.
- Integración con Soft-IA.

## Proyecto

**Landing Comercial Portátiles Distritec**

Concepto:

**Tu día. Tu ritmo. Tu HP.**

Campaña:

**Regreso a Clases**

CTA:

**Quiero mi crédito**

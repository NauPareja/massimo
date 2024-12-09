## Cómo probar la solución

Aplicación desarrollada con Angular 19.

Instalar las dependencias:
```bash
npm install
```

Iniciar la aplicación:
```bash
ng serve
```

Navegar a la ruta `http://localhost:4200/`


## Decisiones de desarrollo

### Uso de la líbreria HolyGrail
He utilizado la documentación y el código CSS compilado (debido a las limitaciones de la propia documentación).

### Mobile First
La aplicación ha sido implementada siguiendo las buenas prácticas de Mobile First, es decir, el contenido crece desde pantallas de 0px hacia arriba, adaptándose a diferentes tamaños de pantalla.

### 'Error' en el enunciado de la Sección 1
La Sección 1 especifica: "Un contenedor flexible que muestre dos bloques en una fila para pantallas grandes y que los invierta en pantallas pequeñas (sm:reverse)."

Teniendo en cuenta que la web ha sido implementada en base a las buenas prácticas de Mobile First, la lógica implementada es la inversa. Por tanto, los bloques se invierten en pantallas grandes y no en pantallas pequeñas.

###  Estructura de la web
```html
<main>
  <h1>Página de inicio</h1>
  <section app-section-one>
      <h2>Sección 1: Layout Estructural con Cambio de Orden</h2>
      ....
  </section>
  <section app-section-two>
    <h2>Sección 2: Pieza de Producto</h2>
    <ul>
        @for (product of products$) {
            <li>
                <article app-product-card>
                  <h3>Título del producto</h3>
                  ...
                </article>
            </li>
        }
    </ul>
  </section>
  <section app-section-three>
    <h2>Sección 3: Layout tipo Parrilla de Productos</h2>
    <ul>
        @for (product of products$) {
            <li>
                <article app-product-card>
                  <h3>Título del producto</h3>
                  ...
                </article>
            </li>
        }
    </ul>
  </section>
</main>
```

Consideraciones
- main: Representa el contenido principal de la página, es único en el documento y excluye cualquier contenido que se repita a través de un conjunto de documentos (por ejemplo, el header o el footer).
- h1...h6: He modificado las especificaciones del enunciado para proveer una jerarquía de títulos clara en el contenido.
- section: Tres secciones que representan partes independientes del documento, cada una con su título relacionado.
- article: Envuelven las product-card, las cuales son una composición auto-contenida, independiente y reutilizable.
- ul, li: Las product-card se presentan como un listado de elementos no ordenados, ya que su orden no es relevante.

Esta semántica permite crear una web con un código fácil de entender, accesible y orientado al SEO.

###  Accesibilidad
Al pasar la validación con la herramienta Wave, podemos ver que no hay errores y que se muestra un árbol de navegación fácil de seguir para los usuarios.


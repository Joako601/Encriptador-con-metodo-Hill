# Tecnológico de Software
## Materia: Fundamentos de álgebra
## Alumno: Joaquin Uriona
## Actividad \#21 Cifrado Hill

---

## Descripción del proyecto

Este proyecto implementa el Cifrado Hill, un algoritmo clásico de criptografía basado en álgebra lineal.  

### El objetivo es permitir:

+ Encriptar mensajes mediante una matriz.  
+ Desencriptar mensajes utilizando la matriz inversa.

---

## Instrucciones de uso

Esta sección explica cómo utilizar el encriptador y desencriptador Hill.

### Encriptar un mensaje:

1. En el campo “Mensaje”, escribe el texto que deseas encriptar (máximo 30 caracteres).
+ El contador debajo te indicará cuántos caracteres has escrito.

2. Se genera automáticamente la matriz del mensaje, donde cada letra se convierte en su valor numérico según el alfabeto.

3. En la sección “Matriz clave (2x2)”, ingresa los cuatro valores numéricos que conforman tu matriz clave:
+ a → `k11`
+ b → `k12`
+ c → `k21`
+ d → `k22`

4. Haz clic en el botón “Encriptar”.

5. El resultado aparecerá en la sección “Resultado”, mostrando el texto encriptado generado.

### Desencriptar un mensaje:

1. En la sección “Mensaje encriptado”, pega el texto cifrado.
+ Asegúrate de que la misma matriz clave utilizada para encriptar esté escrita en los campos k11, k12, k21 y k22.
+ Sin esta matriz, no es posible invertir la operación.

2. Haz clic en “Desencriptar”.

3. El texto descifrado aparecerá en la sección “Resultado desencriptado”.

### Datos a considerar para su uso:

1. La matriz clave debe ser invertible módulo 26.
+ Si no lo es, aparecerá un mensaje como: “Error: La matriz no es invertible módulo 26”.

2. El cifrado solo admite caracteres del alfabeto estándar (A–Z).

### Posibles matrices 2x2 para usar:

$$ Matriz =
\begin{pmatrix}
3 & 3 \\
2 & 5 \\
\end{pmatrix}
$$

$$ Matriz =
\begin{pmatrix}
2 & 5 \\
1 & 3 \\
\end{pmatrix}
$$

$$ Matriz =
\begin{pmatrix}
7 & 8 \\
3 & 5 \\
\end{pmatrix}
$$

+ PD: usados por el programador para hacer pruebas y se olvidaba sus matrices 2x2.

---

## Matematicas usadas:

1. Cada letra se convierte en un número del `0 al 25`:
2. Esta conversion se hace con:
+ El mensaje se divide en pares (vectores de 2 elementos)(Si la longitud es impar, se agrega una `X` como relleno).
3. Cuando el usuario ingresa una matriz (`2x2`):

$$ Matriz =
\begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix}
$$

+ La matriz debe ser invertible módulo 26, de lo contrario NO se puede desencriptar.

4. Determinante de la matriz se calcula: `det = (ad - bc) mod 26`
+ El determinante debe tener un inverso multiplicativo por mod 26

5. La matriz inversa se calcula como:`K⁻¹ = (1/det) * | d -b || -c a | mod 26`
+ Se ajustan valores negativos sumando 26.

## Encriptación
Cada par del mensaje se transforma con la formula:
`C = K * P mod 26`

+ `P` = par del mensaje original  
+ `K` = matriz clave  
+ `C` = par encriptado

## Desencriptación
Se realiza la operación inversa con la siguiente formula:

`P = K⁻¹ * C mod 26`

+ usando la matriz inversa calculada previamente.

---

## Personalización Realizada en la pagina:

### 1. Diseño Visual 
+ Se utilizó un fondo con gradiente diagonal en tonos turquesa (`#408f94 → #1dd3d6`).
+ La interfaz principal está contenida en una tarjeta central blanca, con bordes redondeados y sombras.
+ Todos los elementos están centrados responsivamente para mantener una presentación equilibrada en computadoras y celulares.

### 2. Animaciones y Transiciones
+ La caja principal se muestra con una animación personalizada `fadeSlideIn`, logrando un efecto suave de aparición.
+ Inputs, botones y áreas de texto incluyen transiciones de color al interactuar.

### 3. Estilo de Formularios y Matriz
+ Las entradas numéricas de la matriz clave están organizadas en un grid de 2×2, lo que facilita la comprensión del cifrado Hill.
+ Los `textarea` y cuadros de resultado tienen sombra, bordes redondeados.
+ Se agregó un contador de caracteres con estilo en color turquesa.

### 4. Botones Interactivos
+ Los botones cuentan con:
  + Un color principal turquesa.
  + Hover con transición.
  + Pequeña animación de presión (`scale`) al hacer clic.

### 5. Manejo de Errores
+ Los mensajes de error se muestran en rectangulos de tonos rojos suaves (`#ffebee`).

### 6. Personalización del Footer
+ El pie de página utiliza el color temático (`#1dd3d6`), con texto blanco, sombras y bordes redondeados.

---

## Historial de Commits

### Ver mi historial completo

git log --oneline --graph --decorate

*Commits destacados:*

- feat: Cambios visuales y animacion en el body y container
- feat: agregar estilo a los imputs y matrices
- feat: agregar cambios visuales finales
- feat: agregar funcionalidad al boton de desencripta
- feat: declarar funcion de desencriptar
- feat: agregar desencriptado en funcion desencriptar

---






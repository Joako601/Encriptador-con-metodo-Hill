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

Nuestra aplicación consiste en una web donde un administrador te asigna unos planes de dieta para cada dia junto con recetas para todos los días, el administrador tiene la capacidad de dar altas de nuevo usuario, de planes, recetas, citas; luego el usuario, con una contraseña asignada por el administrador podrá ver las citas que tiene con el dietista, los planes asignados a todos los días y las recetas de cada plato asignado.

## Índice

- [Estructura de archivos](#estructura-de-archivos)
- [Funcionamiento de la aplicación desde el Usuarrio](#funcionamiento-de-la-aplicación-desde-el-usuario)
- [Funcionamiento de la aplicación desde el Administrador](#funcionamiento-de-la-aplicación-desde-el-Administrador)

## Estructura de archivos

```
.
├── src
│   ├── assets
│   │    └── img
│   │         ├── fondot.png
│   │         ├── iconD.ico
│   │         └── logo.png
│   ├── components
│   │     ├── Alldietary.jsx
│   │     ├── Boton.jsx
│   │     ├── CalendarApp.jsx
│   │     ├── Dashboard.jsx
│   │     ├── Dietary.jsx
│   │     ├── GetAgenda.jsx
│   │     ├── GetDiaries.jsx
│   │     ├── GetRecipes.jsx
│   │     ├── GetUserById.jsx
│   │     ├── GetUsers.jsx
│   │     ├── Header.jsx
│   │     ├── HeaderAdmin.jsx
│   │     ├── Home.jsx
│   │     ├── LineChart.jsx
│   │     ├── LineDiary.jsx
│   │     ├── LineRecipe.jsx
│   │     ├── LineTracking.jsx
│   │     ├── MyAgenda.jsx
│   │     ├── Mytracking.jsx
│   │     ├── NewDiary.jsx
│   │     ├── NewPlan.jsx
│   │     ├── NewRecipe.jsx
│   │     ├── NewTracking.jsx
│   │     ├── NewUser.jsx
│   │     ├── Recetas.jsx
│   │     ├── UpdatePlan.jsx
│   │     ├── User.jsx
│   │     └── UseTraking.jsx
│   ├── config
│   │     └── firebase.js
│   ├── context
│   │     └── DietContext.jsx
│   ├── middleware
│   │     └── middleware.js
│   └── routes
│         └── RoutesApp.jsx
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── .env
 
```

## Funcionamiento de la aplicación desde el usuario

- Aplicación desde el usuario:
Lo primero que nos encontramos es una página en la cual nos pedirá un email y una pasword, el email es el proporcionado por el usuario y la contraseña será administrada previamente por el dietista.

Una vez ingresado el email y la contraseña correspondiente, llegamos a otra página el la cual nos aparece el nombre del usuario y tres botones, `Mis Dietas, Mi Seguimiento y Mi Agenda`.
- Mis Dietas: Una vez que entramos en la opción de Mis Dietas, accedemos a otra página en la cual tenemos una barra de navegación superior con las siguientes opciones: `Planes Dietéticos, Mi Seguimiento, Mi Agenda y LogOut`, con esta barra de navegación nos permite movernos a los menús que teniamos en la pantalla anterior si tener que salir de donde estamos, un poco más abajo tendremos el título de la página en la que estamos, en este caso Planes dietéticos, y de bajo nos apareceran los planes que tendremos asignados. Si pinchamos en cualquiera de los planes asignados, aparecemos en otra página llamada `Mis dietas`, en ls cual nos muestra todos los desayunos, comidas y cenas que tenemos asignados a ese plan de una semana. Al pinchar en cualquiera de las opciones de desayuno comida o cenas se nos habilitará un Pop Up donde tendremos explicado la receta de ese plato en cuestion.
- Mi Seguimiento: Una vez clicada esta opción  nos llevará a una página llamada Mi Seguimiento, donde tendremos tambien la barra de navegación citada anteriormente, el título de la página `"Mi Seguimiento"`, y de bajo del título unas graficas donde no irá mostrando nuestros avances en tema de peso y tanto por ciento de grasa corporal.
- Mi agenda: Por último en esta opción, se nos muestra una página llamada `Agenda` en la cual se nos muestra un calendario donde estarán apuntadas la citas que tenemos reservadas con el dietista, así como pinchando en el día de la cita, se habilita una vista detalle del día en cuestión.

- Aplicación desde el Administrador:

Al igual que en el apartado anterior, accederemos a nuestra aplicación mediante un correo y una contraseña de tipo Administrador, una vez dentro, llegaremos a la primera página que es la de `Dashboard`, donde nos aparecen cuatro botones:
- Botón `Mis Pacientes`: Una vez clicada esta opción, nos llevará a la página `Mis Pacientes`, donde se nos muestra una barra de navegación con las opciones `"Dashboard, Mis Pacientes, Recetas, Diarios, Agenda y LogOut"`, más abajo nos aparece el título de la página `Mis Pacientes`, más abajo no salen todos los pacientes que tenemos en nuestra base de datos. Si pinchamos en cualquiera de esos pacientes iremos a la siguiente subpágina.
    - Seguimiento:
                    En esta esta página se nos muestra la misma barra de navegación cita anteriormente, el título de la página seguido del nombre de usuario            selecionado, más abajo dos botones: `Nuevo Seguimiento y Actualizar Usuario` .
                    Después de los botones se nos muestran unos graficos detallados de el peso y el tanto por ciento de grasa corporal, de bajo de las gráficas tenemos el botón de `Nuevo Plan` y de abajo del botón se nos muestra los planes asociados a ese usuario, si pinchamos en cualquiera de los planes asociados, nos lleva a la pagina de actualizar Plan Dietético; en esta pagina se nos muestra un botón de volver a la página anterior y una card con todos los campos que se pueden modificar.
        - Botones de la página Seguimiento y su cometido:
           - Botón:`Nuevo Seguimiento`:
                     Una vez pinchada esta opción nos lleva a otra página en la cual se nos muestra la misma barra de navegación, el título de la página   `"Nuevo seguimiento y el nombre de el usuario`, más abajo no aparecen los campos rellenables; `Descripción, Fecha que es un desplegable el campo Hora` y un botón de añadir, más abajo nos muestra todos lo seguimientos asociados a ese usuario los cuales se pueden modificar con un botón pencil a la izquierda de cada seguimiento.
           - Botón: `Actualizar Usuario`:
                     Una vez pinchada este botón, nos lleva a la pagina donde se nos muestra la barra de navegación citada anteriormente, el titulo de la página seguido del nombre del usuario, un botón de volver, que al pincharlo nos lleva a la página anterior y una card con los campos `Nombre, Apellido, Email y contraseña` a modificar, seguido del botón pencil para confirmar los cambios.        
           - Botón: `Nuevo Plan`:
                     A presionar este botón, entramos en una nueva página llamada nuevo Plan donde tendremos la barra de navegación de las otras pantallas el título de la página y una card con los campos a rellenar para crear nuestro plan personalizado y su botón de Añadir para poder enviar los cambios a la base de datos.
    - Recetas:
             Al pinchar en este botón entramos en la página de Recetas. Esta página esta formada por la barra de navegación citada en este proyecto, el título de la  pagina "`Recetas`", cuatro botones "`Desayuno, Comida, Cena y Nueva receta`" y nos muestra un listado con las recetas en función del botón clicado anteriormente "`Desayuno, Comida o Cena`", por defeceto nos saca la información de los `Desayunos`. A la derecha de cada receta nos aparecen los botones de actualizar o borrar la receta en cuestión.
        - Botón: `Nueva Receta`:
                     Al Pinchar en el botón de `Nueva Receta`, nos lleva a sus página que consta de la barra de navegación, el título `Nueva Receta` y una card con los campos `Tipo Receta`; Se puede elejir entre 3 opciones, desayuno, comida o cena, Título, Ingredientes y Preparación, una vez rellenados los campos necesareos tenemos a bajo el botón de añadir que su función es pasar la información añadida a la base de datos.
    - Diarios:
             Al clicar este botón en nuetro menú `Dashboard`, entramos en la página `Diarios`, con su barra de navegación su título "`Diarios`", un botón de `Nuevo diario` y toda la información de desayuno, comida y cena mostrada por los 7 días de la semana cada día tiene la opción de editar o borrar cualquiera de los campos. con los dos botones pencil o paper bin.
        - Botón: `Nuevo diario`:
                    Al pinchar en este botón, nos lleva a la página de `Nuevo Diario`, la cual consta de la barra de navegación, título "`Nuevo Diario`" una card en donde podremos introducir los campos; `Título, Fecha, Desayuno, Comida y Cena` y pulsa el botón `Añadir` para añadir valga la redundancia, el registro nuevo a la base de datos.
    - Agenda:
             Por último en nuestro menú `Dashboard` tenemos el botón `Agenda` que nos lleva a la página `Agenda` que consta de la barra de navegación el título "`Agenda`" y un calendario donder poder ver las citas de el usuario en cuestión y en caso de querer tener una vista más detallada con solo pichar en el día selecionado se cambiará a una vista detalla del día por horas.

        










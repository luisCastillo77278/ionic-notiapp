# NotiApp´news

## Nota
El proyecto solo puede ejecutarse de manera local, ya que la Api de noticas utilizada, solo permite la utilización de forma gratuita en un ambiente local. Si quiere hacer un deploy del proyecto fuera de un ambiente local hay que cambiar la cuenta por una de pago. [Saber mas.](https://newsapi.org/pricing)

## Pasos para correr el proyecto
Clone el proyecto con
```
https://github.com/luisCastillo77278/ionic-notiapp.git
```

Muevase a la carpeta
```
cd ionic-notiapp
```

Crear una apiKey en el sitio [NewsApi](https://newsapi.org/)

Remplazar la apiKey que se encuentra en la carpeta /src/enviroment/enviroment.ts **OJO favor de usar su apikey**

Crear los modulos de node
basta con ejecutar
```
npm install
```

Ejecutar el proyecto en entorno de desarrollo basta con ejecutar
```
ionic serve
```

# PWA NotiApp´news
Para generar la pwa y desplegarla en un hosting, se tuvo que crear un archivo llamado mock-news.ts el cual no es mas que un archivo que contiene un objeto de tipo **ArticlesByCategoryAndPages** para poder hacer la pruba de deploy en firebase.


## Nota
tener el proyecto construido o compilado como le quieran llamar, esto se hace con, si les lanza un error al compilarse o construirse como le quieran decir, se detienen; se saltean el paso del deploy a firebase que esta a continuacion ya que hay explicamos como se soluciono y luego prosiguen a realizar el deploy.

```
ionic build --prod
```


Para hacer el deploy, basta con ir a [firebase](https://firebase.google.com/?hl=es-419&gclid=CjwKCAiA6seQBhAfEiwAvPqu1-BO5nLTylPBGca33WbxEUXGaTju7Hv9oRXEnqFaelNUuZiEXnbXLRoCQukQAvD_BwE&gclsrc=aw.ds), dar click en ir a la consola, crear un proyecto, dirigirse al apartado de hosting, darle en comenzar y seguir los pasos que se indican.

```
npm install -g firebase-tools
```
**Ojo** posicionarse en la carpeta del proyecto y hacer

```
firebase init
```

les saltaran una series de preguntas ustedes las iran contestando de acuerdo a sus necesidades, ya por ultimo realizan el.

```
firebase deploy
```

## Al generar el proyecto para produción
```
ionic build --prod
```

Les da un error, favor de añadir lo siguiente en el archivo .browserslistrc
```
not IE 9-11
not ios_saf 15.2-15.3
not safari 15.2-15.3
````

Y proceden a realizar el deploy a firebase que esta en la parte de arriba.

- [Documentación de NewsApi](https://newsapi.org/docs)
- [Documentación de ionic](https://ionicframework.com/docs/)
- [Documentación de angular](https://angular.io/docs)
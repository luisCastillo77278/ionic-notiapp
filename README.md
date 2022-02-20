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

### Al generar el proyecto para produción
```
ionic build --prod
```
**Nota**
hay un error favor de añadir lo siguiente en el archivo .browserslistrc
```
not IE 9-11
not ios_saf 15.2-15.3
not safari 15.2-15.3
````

- [Documentación de NewsApi](https://newsapi.org/docs)
- [Documentación de ionic](https://ionicframework.com/docs/)
- [Documentación de angular](https://angular.io/docs)
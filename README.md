# Observatorio de Derecho Informático Argentino

Ámbito de intercambio y aprendizaje mutuo entre abogades e informátiques.

* [Quiénes somos](markdown/quienes_somos.md)
* [Nuestro trabajo](markdown/trabajo.md)
* [Debates](markdown/debates.md)
* [Colaboración](markdown/colaboracion.md)

## Redes sociales

* [Twitter](https://twitter.com/odiaasoc)
* [Facebook](https://www.facebook.com/ODIAasoc)
* [LinkedIn](https://www.linkedin.com/company/odiaasoc/)
* [Medium](https://medium.com/@odiaasoc)
* [GitHub](https://github.com/odia/)

## Para actualizar la página

```
rm -rf out && npm run export && touch out/.nojekyll && echo -n odia.legal > out/CNAME && gh-pages -t -d out
```

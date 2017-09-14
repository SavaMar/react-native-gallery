## Use:
- Redux
- es6
- Flexbox
- [React Navigation компонент](https://facebook.github.io/react-native/docs/navigation.html#react-navigation)
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) 

Реализовать галерею на базе React-Native (иначе React) которая будет отображать фотографии из 500px. Это приложение должно извлекать ресурс в формате JSON по следующему вызову [REST API](https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF) :

Следующие страницы могут быть извлечены добавлением параметра [‘page=N’](https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=2)

Приложение должно содержать два экрана(страницы):
* Список
- мини изображение с названием и автором
- когда пользователь нажимает на изображение, открывается экран фотографии 
* Фотография
- отображает одну фотографию с максимальной площадью
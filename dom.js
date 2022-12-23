//								Свойства Document
// document.title = '';		+
// document.forms				+
// document.body				+
// document.head				+


// 							Методы поиска Элемента
// document.getElementById("")					+  (НЕ КОЛЛЕКЦИЯ)
// document.getElementsByClassName("")			+  (HTML COLLECTION) ЖИВАЯ
// document.getElementsByTagName("")			+  (HTML COLLECTION) ЖИВАЯ
// document.querySelector("")						+  (НЕ КОЛЛЕКЦИЯ)
// document.querySelectorAll("")					+  (NODE LIST) НЕ ЖИВАЯ


//							HTMLCollection и NodeList
// NodeList						+  +Может хранить Любые типы узлов
// HTMLCollection				+  +Может хранить только узлы HTML элементов
// Element(узел)				+
// hasChildNodes()(childNodes)			+ Проверка наличия дочерних узлов


//							Свойста связанные с html-атрибутами
// id														+ (Возв. содер. атрибута)
// element.className = ""							+ (Для чтения содер. класса, + можно перезаписывать)
// element.style.backgroundColor = "beige"	+ 
// Там очень много свойств, это просто как пример чтобы понять как работает


// 						Свойства и методы связанные с DOM
// children																+
// parentElement 														+
// nextElementSibling и previousElementSibling				+
// firstElementChild, lastElementChild							+


// 						Свойства с информацией о содержимом
// innerHTML					+
// outerHTML					+
// textContent					+


//							Свойство classList
// element.classList.add()						+
// element.classList.remove()					+
// element.classList.replace()				+
// element.classList.toggle()					+





// 												УРОК 2
// свойство hidden


//							Доступ к Атрибутам (и свойства)
// elem.hasAttribute(имя атрибута)			+ (Проверка, Есть ли атрибут)
// elem.getAttribute(Имя атрибута) 			+ (Получаем значение атрибута)
// elem.setAttribute(Имя атрибута, value) + (Уст. значение атрибута)
// elem.removeAttribute(Имя атрибута)		+ (Удалить атрибут)
// elem.attributes								+ (Массив всех атриб. элемента)


//							Нестандартные атрибуты, dataset
// dataset


//							Изменение Документа
//							(Создание элемента)
//document.createElement(tag)			+ создаем новый узел
//document.createTextNode(text)		+ (Используестся редко)

//							Методы вставки
//node.append()		+ Добавляет узлы или строки в конец
//node.prepend()		+ Добавляет узлы или строки в начало
//node.before()		+ Добавляет узлы или строки до node
//node.after()			+ после node
//node.replaceWith()	+ заменет node


//							insertAdjacentHTML
//elem.insertAdjacentHTML(where, html) 	+(Where)-куда делать вставку(относительно elem)
//"beforebegin"									+Перед элементом
//"afterbegin"										+В начало елемнта
//"beforeend" 										+в конец
//"afterend"										+после элемента
//(второй параметр)								+ HTML строка которая будет вставленна, как html строка


//							Удаление узлов
// node.remove()							+

//							Клонированиие узлов: cloneNode
//elem.cloneNode(true)			+клонирует точнуб копию элемента
//elem.cloneNode(false)			+клонирует клон без дочерних элементов


//							Ввод в браузерные события
//событие					+ Сигнал от брауера что что-то произошло
//click						+(Клик мышкой)

//change				+ Меняет что-то в форме, и фиксирует
//blur				+ срабатывает при расфокусе поля формы
//input				+ Срабатывает сразу при изменении значения поля
//submit				+ Когда польщователь отправляет валидную форму. если не валидна и ее нельзя отправить, то не сработает

//DOMContentLoaded	+
//load					+

//unload					+ Когда пользователь выходит со страницы
//keydown				+ Фиксирует момент нажатия кнопки до того, как она будет отпущена
//keyup					+ А это фиксирует отпускание кнопки

//mouseover				+ Когда польщователь наводит курсор на HTML элемент
//mouseout				+ Когда курсор покидает элемент
//scroll					+ Прокручивание страницы


//								Обработчик событий
//Обработчик событий
//onclick 	+ Назначить обработчик события "click" сразу на элемент button
// можно использовать атрибут onclick, вот так:
// <button onclick="alert('Клик!')"></button>
// ФУНДОМЕНТАЛЬНЫЙ НЕДОСТАТОК   ---   Невозможность повесить несколько обработчиков в одно событие одного элемента


//								addEventListener
// element.addEventListener(event, handler, [options]);
//event									+ Имя событие например click
//handler 								+ ссылка на функцию обработчик
//options(once,capture,passive)	+ Дополнительный обьект со свойствами

// once		+ если true то обработчик будет автматически удален после выполнения
// cepture	+ фаза на которой должен сработать обработчик
// passive	+ если true, то указывает, что обработчик никогда не вызовет preventDefault()


//									Удаление обработчика
//element.removeEventListener(event, handler, [options]) + для удаления обработчика. Желательно испольщовать те же параметры что и в addEventListener


//					Объект (происшествия)события(и свойства и методы)
// Объект события - объект с информацией о событии
//	type			+ тип происшествия
//	target		+ ссылка на объект, которым было инициированно событие
// Например, если событие произошло на поле ввода, мы получим ссылку на этот элемент DOM.


//preventDefault() + предотвращает дефолтное поведение
//stopPropagation() + Предотвращает истечение события
//stopImmediatePropagation() + делает то же, что и stopPropagation, но в том числе предотвращает вызов обработчиков события, установленных на этом же элементе.

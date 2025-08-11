# ToDoList Desktop App

## Опис
Це десктоп-додаток для керування завданнями, створений на базі:
- **Electron** — для десктопного середовища
- **Vite + React** — для фронтенду
- **NestJS (Node.js)** — для бекенду (API)
- **TypeScript** — для типізації

---

## Вимоги
Перед запуском переконайтесь, що встановлені:
- [Node.js](https://nodejs.org/)
- npm

---

## Клонування репозиторію
git clone https://github.com/OleHodlevskyj/toDoList
cd todolist-electron


## Встановлення залежностей

### Фронтенд
cd frontend
npm install


### Бекенд
cd ../backend
npm install

### Запуск у режимі розробки
### Запустити бекенд (NestJS)
cd backend
npm run start:dev
Бекенд за замовчуванням стартує на http://localhost:3000

### Запустити фронтенд + Electron
cd ../frontend
npm run dev

### Структура проєкту
/backend          # Бекенд (NestJS)
  /src
    /task         # Модуль для завдань
    main.ts       # Точка входу бекенду
  package.json

/frontend         # Фронтенд (React + Vite + Electron)
  electron.js     # Основний файл Electron
  preload.js      # Прелоад скрипт
  src/            # React код
  package.json

README.md

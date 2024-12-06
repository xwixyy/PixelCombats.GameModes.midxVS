// предполагается как общая библиотека, для создания и работы со стандартными командами в режимах (синие, красные, зомби)
// предложения и пул реквесты по улучшению библиотеки приветствуются
import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room' ;
// Импортируем необходимые модули из PixelCombats

// Создаем команду "Смотрящий"
const teamWatcher = new Team({
    name: 'Смотрящий',
    color: 'blue', // Голубой цвет команды
});

// Создаем команду "Ищет вас"
const teamSeeker = new Team({
    name: 'Ищет вас',
    color: 'red', // Красный цвет команды
});

// Функция для отображения информации о командах
function displayTeams() {
    console.log(Команда: ${teamWatcher.name}, Цвет: ${teamWatcher.color});
    console.log(Команда: ${teamSeeker.name}, Цвет: ${teamSeeker.color});
}

// Вызов функции для отображения информации о командах
displayTeams();
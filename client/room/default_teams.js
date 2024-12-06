// предполагается как общая библиотека, для создания и работы со стандартными командами в режимах (синие, красные, зомби)
// предложения и пул реквесты по улучшению библиотеки приветствуются
import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room' ;
// Импортируем необходимые модули из PixelCombats
import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room';

// Создаем команды
const watcherTeam = new Teams('Смотрящий', Color.BLUE);
const seekerTeam = new Teams('Ищет вас', Color.RED);

// Пример вывода информации о командах
console.log(Команда: ${watcherTeam.name}, Цвет: ${watcherTeam.color});
console.log(Команда: ${seekerTeam.name}, Цвет: ${seekerTeam.color});
// Функция для отображения информации о командах
function displayTeams() {
    consol

// Вызов функции для отображения информации о командах
displayTeams();
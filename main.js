const apiKey = '66dee2b2fd79a26ebfe52b6a05743cb1';
const city = 'Odessa';
const weatherContainer = document.getElementById('weather');
const tempElement = document.getElementById('temp');
const descriptionElement = document.getElementById('description');
const locationElement = document.getElementById('location');
const refreshButton = document.getElementById('refreshButton');


async function getWeather() {
    console.log("Запуск функции getWeather");  // Для отладки
    weatherContainer.classList.add('loading');
    tempElement.textContent = 'Завантаження...';
    descriptionElement.textContent = '';
    locationElement.textContent = '';

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`);


        if (!response.ok) {
            throw new Error(`Помилка: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Полученные данные от API:", data);


        if (data && data.main && data.weather && data.weather[0] && data.sys) {
            updateWidget(data);
        } else {
            throw new Error("Неполные данные от API");
        }

    } catch (error) {
        tempElement.textContent = 'Помилка при завантаженні даних';
        descriptionElement.textContent = '';
        locationElement.textContent = '';
        console.error("Ошибка:", error.message);
    } finally {
        weatherContainer.classList.remove('loading');
    }
}

// Функция для обновления виджета
function updateWidget(data) {
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const location = `${data.name}, ${data.sys.country}`;

    console.log("Обновление виджета с данными:", { temperature, description, location });

    tempElement.textContent = `${temperature}°C`;
    descriptionElement.textContent = description;
    locationElement.textContent = location;
}


refreshButton.addEventListener('click', getWeather);


window.addEventListener('load', getWeather);



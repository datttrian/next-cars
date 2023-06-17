export async function fetchCars() {
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'db900c0964mshba57cef93bcec17p18e0b6jsn7c17797ce99a',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}
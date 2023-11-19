// 1) Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма каждого товара.
// А так же в самом конце выводится итоговая сумма и количество всех товаров.

const car = [
    {
      title: "BMW",
      price: 40000,
      count: "15",
    },
    {
      title: "Toyota",
      price: 20000,
      count: "13",
    },
    {
      title: "Ford",
      price: 30000,
      count: "20",
    },
    {
      title: "Chevrolet",
      price: 60000,
      count: "9",
    },
    {
      title: "Volkswagen",
      price: 30000,
      count: "13",
    },
];

function displayProducts(products) {
    const productList = document.getElementById("product-list");
    let totalSum = 0;

    products.forEach(product => {
        const itemTotal = product.price * product.count;
        totalSum += itemTotal;

        const listItem = document.createElement("li");
        listItem.textContent = `${product.title} - $${itemTotal}`;
        productList.appendChild(listItem);
    });

    const totalList = document.getElementById("total-list");
    const totalItems = document.createElement("li");
    totalItems.textContent = `Total price of all items: $${totalSum}`;
    totalList.appendChild(totalItems);
}

displayProducts(car);



// 2) Напишите скрипт, который выводит в интерфейс следующую таблицу (html должен быть пустым, все элементы создаются строго с помощью скриптов)

const companies = [
    {
        "No.": 1,
        "Full Name": "Bill Gates",
        Position: "Founder Microsoft",
        Salary: 1000,
    },
    {
        "No.": 2,
        "Full Name": "Steve Jobs",
        Position: "Founder Apple",
        Salary: 1200,
    },
    {
        "No.": 3,
        "Full Name": "Larry Page",
        Position: "Founder Google",
        Salary: 1100,
    },
    {
        "No.": 4,
        "Full Name": "Mark Zuckeberg",
        Position: "Founder Facebook",
        Salary: 1300,
    },
];

function createTable(data) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    table.border = 1;
    table.style.borderCollapse = "collapse";

    for(const key in data[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    data.forEach(company => {
        const row = document.createElement('tr');

        for(const key in company) {
            const cell = document.createElement('td');
            cell.textContent = company[key];
            row.appendChild(cell);

            if (key === "Salary") {
                cell.textContent = `$${company[key]}`;
            }
        }

        table.appendChild(row);
    });

    document.body.appendChild(table);
}

createTable(companies);



// 3) Дан массив из объектов, в котором хранятся породы собак и их возраст. Напишите цикл, который создаст для каждого объекта параграфы (Пример как должен выглядеть вывод первого объекта: golden retriever's age is 7) и добавит в body.

const dogs = [
    {
      breed: "golden retriever",
      age: 7,
    },
    {
      breed: "labrador retriever",
      age: 4,
    },
    {
      breed: "french bulldog",
      age: 12,
    },
    {
      breed: "beagle",
      age: 6,
    },
    {
      breed: "german shepherd dog",
      age: 2,
    },
    {
      breed: "poodle",
      age: 3,
    },
    {
      breed: "bulldog",
      age: 4,
    },
];

dogs.forEach((dog) => {
    const p = document.createElement("p");
    p.textContent = `${dog.breed}'s age is ${dog.age}`;
	   document.body.append(p);
});



// 4) Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.

const films = [
    {
        name: "The Green Mile",
        age: 1999,
    },
    {
        name: "Forrest Gump",
        age: 1994,
    },
    {
        name: "Fight Club",
        age: 1999,
    },
    {
        name: "Back to the Future",
        age: 1985,
    },
    {
        name: "Leon",
        age: 1994,
    },
    {
        name: "Hachi: A Dog's Tale",
        age: 2008,
    },
    {
        name: "The Wolf of Wall Street",
        age: 2013,
    },
    {
        name: "The Fifth Element",
        age: 1997,
    },
    {
        name: "Harry Potter and the Goblet of Fire",
        age: 2005,
    },
    {
        name: "Oppenheimer",
        age: 2023,
    },
];

console.log(films);
const diseaseList = document.getElementById('disease-list');

fetch('http://127.0.0.1:5000/diseases')
    .then(response => response.json())
    .then(data => {
        data.diseases.forEach(disease => {
            const diseaseElement = document.createElement('div');
            diseaseElement.classList.add('disease');
            diseaseElement.innerHTML = `
                <h2>${disease.name}</h2>
                <p><strong>Description:</strong> ${disease.description}</p>
                <p><strong>Symptoms:</strong> ${disease.symptoms}</p>
                <p><strong>Treatment:</strong> ${disease.treatment}</p>
            `;
            diseaseList.appendChild(diseaseElement);
        });
    });

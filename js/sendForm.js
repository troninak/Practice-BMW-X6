const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
    const request = new XMLHttpRequest();
    request.open('POST', server);
    request.send(data);
    request.addEventListener('readystatechange', () => {
        if (request.readyState != 4) return;
        if (request.status == 200 || request.status == 201) {
            const respons = JSON.parse(request.responseText);
            callBack(respons.id);
        } else {
            falseCallBack(request.status);
            throw new Error(request.status);
        }
    })
}

const formElems = document.querySelectorAll('.form');

const formHendler = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = {};

        for (const { name, value } of form.elements) {
            if (name) {
                data[name] = value;
            }
        }

        const smallElem = document.createElement('small');

        sendData(JSON.stringify(data),
        (id) => {
            smallElem.innerHTML = ('Ваша заявка №' + id + '! <br>В билжайшее время с вами свяжемся!');
            smallElem.style.color = 'green'
            form.append(smallElem);
        },
        (err) => {
            smallElem.textContent = ('Технические неполадки, попродуйте отравить заявку позже');
            smallElem.style.color = 'red';
            form.append(smallElem);
        });

        form.reset();
    });
}

formElems.forEach(formHendler);

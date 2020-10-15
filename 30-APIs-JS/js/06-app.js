/*Speech Recognition API -> solo es compatible con chrome y edge */
const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click',ejecutarSpeechAPI);

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onStart = function (){
        //cuando comience a ejecutarse...
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    recognition.onspeechend = function (){
        salida.textContent = 'Se dejó de grabar';
        recognition.stop();
    };

    recognition.onresult = function (e){
        //console.log(e.results);
        console.log(e.results[0][0]);

        const {confidence,transcript} = e.results[0][0];
        const speech = document.createElement('p');
        speech.innerHTML = `Grabación: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Porcentaje de fiabilidad: ${parseInt(confidence*100)}%`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);


    }

}
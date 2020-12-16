window.onload = function() {
    function registration() {
        const forms = document.querySelectorAll('#registration form');

        forms.forEach((form, step) => form.addEventListener('submit', function (event) {
            event.preventDefault();
            nextStep.call(this, step)

            // ajax({
            //     method: 'get',
            //     url: 'http://localhost:3005/step-reg',
            //     success(response) {
            //        const { status = false } = response && JSON.parse(response);

            //         if (true) {
            //             nextStep.call(this, step)
            //         }

            //     },
            //     error() {

            //     }
            // })
        }));


        function nextStep(currentStep) {
            const STEP = 1;
            const FIRST_STEP = 0;

            let nextStep = currentStep + STEP;
                nextStep = forms[nextStep]? nextStep : FIRST_STEP;

            forms[currentStep].classList.remove('center');
            forms[nextStep].classList.add('center');
        }
    }

    registration();
}